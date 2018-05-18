#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import os
import requests
import random
import time
import codecs
import shutil
import sys
from bs4 import BeautifulSoup

reload(sys)
sys.setdefaultencoding('utf8')

chanyouji_url = 'http://chanyouji.com'
base_user_url = 'http://chanyouji.com/api/users/%s.json?page=%s'
base_map_url = 'http://chanyouji.com/api/users/map/%s.json'
base_trip_url = 'http://chanyouji.com/api/trips/%s.json'
base_trip_script_url = 'http://chanyouji.com/trips/%s'

root_path = os.path.split(os.path.realpath(__file__))[0]
base_user_path = root_path + '/data/user_%s'
base_trip_path = root_path + '/data/user_%s/trip_%s'


def sleep(leave=20):
    date = random.random() * leave
    print 'Sleep %s s' % date
    time.sleep(date)


def load_cookies():
    print 'Load cookies'
    session = requests.session()
    response = session.get(chanyouji_url)
    sleep()
    global cookies, headers
    cookies = response.cookies.get_dict()
    headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
               'Accept-Encoding': 'gzip, deflate',
               'Accept-Language': 'zh-CN,zh;q=0.9',
               'Cache-Control': 'no-cache',
               'Connection': 'keep-alive',
               'Host': 'chanyouji.com',
               'Pragma': 'no-cache',
               'Upgrade-Insecure-Requests': '1',
               'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36'
               }


def req(url):
    try:
        response = requests.get(url, headers=headers, cookies=cookies)
        if response.status_code == 200:
            return response
        else:
            print('HTTP CODE: %d %s' % (response.status_code, url))
    except Exception as e:
        print('Request %s Error %s' % (url, e))


def save(file_path, file_name, data):
    if not os.path.exists(file_path):
        os.makedirs(file_path)
    with codecs.open(file_path + '/' + file_name, 'w', encoding='utf8') as f:
        f.write(data)
        f.flush()


def parse_image_url(days):
    urls = [note['photo']['url'] for d in days for node in d['nodes'] for note in node['notes'] if note.get('photo')]
    print 'Found %s images' % len(urls)
    return urls


def save_images(path, urls):
    for url in urls:
        try:
            header = {'Content-Type': 'application/x-www-form-urlencoded'}
            response = requests.get(url, headers=header)
            file_name = url[url.rindex('/') + 1:]
            with open(path + '/' + file_name, 'wb') as img:
                img.write(response.content)
                img.flush()
                print 'Download %s success' % file_name
        except Exception as e:
            print('Download %s Error %s' % (url, e))


def save_trip_script(file_path, trip_id):
    trip_script_url = base_trip_script_url % trip_id
    data = req(trip_script_url).content
    sleep()
    soup = BeautifulSoup(data, "html.parser")
    file_name = 'script.js'
    all_script = soup.find_all('script')
    save(file_path, file_name, str(all_script[5])[8:-9])


def save_trip(trip_id):
    trip_url = base_trip_url % trip_id
    data = req(trip_url).json()
    sleep()
    user_id = str(data['user']['id'])
    user_name = str(data['user']['name'])
    trip_name = str(data['name'])
    print 'Found (user id: %s, user name: %s, trip id: %s, trip name: %s)' % (user_id, user_name, trip_id, trip_name)
    trip_path = base_trip_path % (user_id, trip_id)
    trip_name = '%s.json' % trip_id
    # save trip json to trip path
    save(trip_path, trip_name, json.dumps(data, ensure_ascii=False))
    # save trip images to trip path
    urls = parse_image_url(data['trip_days'])
    save_images(trip_path, urls)
    # save trip collection script to trip path
    save_trip_script(trip_path, trip_id)
    # save cover photo to user path
    user_path = base_user_path % user_id
    save_images(user_path, {data['front_cover_photo_url']})


def save_user(user_id):
    load_cookies()
    print 'Load user info'
    user_url = base_user_url % (user_id, 0)
    user_json = req(user_url).json()
    sleep()

    name = user_json['name']
    image = user_json['image']
    trips_count = user_json['trips_count']
    trips = user_json['trips']

    user_path = base_user_path % user_id
    if os.path.exists(user_path):
        shutil.rmtree(user_path)

    print 'User name: %s, trips count: %s' % (name, trips_count)

    page_count = trips_count / 10
    if trips_count % 10 > 0:
        page_count += 1

    if page_count > 1:
        for count in range(2, page_count + 1, 1):
            user_url = base_user_url % (user_id, count)
            trips.extend(req(user_url).json()['trips'])
            sleep()

    user_json['trips'] = trips
    # save user json to user path
    save(user_path, '%s.json' % user_id, json.dumps(user_json, ensure_ascii=False))
    # save user map to user path
    map_url = base_map_url % user_id
    save(user_path, 'map.json', json.dumps(req(map_url).json(), ensure_ascii=False))
    # save user image to user path
    save_images(user_path, {image})
    # save trips
    for trip in trips:
        if trip['privacy'] is False:
            save_trip(str(trip['id']))


if __name__ == '__main__':
    save_user(raw_input('Please enter your ChanYouJi Id: '))
