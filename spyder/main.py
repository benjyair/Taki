# -*- coding: utf-8 -*-
import json
import os
import requests
import random
import time
import codecs
import shutil
import sys

reload(sys)
sys.setdefaultencoding('utf8')

base_user_url = 'http://chanyouji.com/api/users/%s.json?page=%s'
base_trip_url = 'http://chanyouji.com/api/trips/%s.json'

base_user_path = '../data/user_%s'
base_trip_path = '../data/user_%s/trip_%s'


def sleep(leave=20):
    date = random.random() * leave
    print 'Sleep %s s' % date
    time.sleep(date)


def req(url):
    timeout = 10
    user_agent = 'Mozilla/5.0 (iPhone;CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46(KHTML, like Gecko)Mobile/13D15 ClassBox/7.3 ClassBox/7.3 ClassBox/7.3'
    headers = {'User-Agent': user_agent,
               'Accept': 'application/json, text/javascript, */*; q=0.01',
               'Accept-Language': 'zh-cn',
               'Accept-Encoding': 'gzip, deflate',
               'Connection': 'keep-alive',
               'Content-Type': 'application/json',
               'X-Requested-With': 'XMLHttpRequest'
               }
    try:
        response = requests.get(url, headers=headers, timeout=timeout)
        if response.status_code == 200:
            return response.json()
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


def parse_image_url(trip_days):
    urls = []
    for day in trip_days:
        for node in day['nodes']:
            for note in node['notes']:
                photo = note.get('photo')
                if photo is not None:
                    urls.append(photo['url'])
    print 'Found %s images' % len(urls)
    return urls


def save_images(path, urls):
    for url in urls:
        response = requests.get(url)
        file_name = url[url.rindex('/') + 1:]
        with open(path + '/' + file_name, 'wb') as img:
            img.write(response.content)
            img.flush()
            print 'Download %s success' % file_name


def save_trip(trip_id):
    trip_url = base_trip_url % trip_id
    data = req(trip_url)
    user_id = str(data['user']['id'])
    user_name = str(data['user']['name'])
    trip_name = str(data['name'])
    print 'Found (user id: %s, user name: %s, trip id: %s, trip name: %s)' % (user_id, user_name, trip_id, trip_name)
    trip_path = base_trip_path % (user_id, trip_id)
    trip_name = '%s.json' % trip_id
    save(trip_path, trip_name, json.dumps(data, ensure_ascii=False))
    sleep()
    urls = parse_image_url(data['trip_days'])
    save_images(trip_path, urls)


def save_user(user_id):
    user_url = base_user_url % (user_id, 0)
    user_json = req(user_url)

    name = user_json['name']
    trips_count = user_json['trips_count']
    trips = user_json['trips']

    user_path = base_user_path % user_id
    if os.path.exists(user_path):
        shutil.rmtree(user_path)

    print 'User name: %s, trips count: %s' % (name, trips_count)
    user_json['trips'] = None
    save(user_path, '%s.json' % user_id, json.dumps(user_json, ensure_ascii=False))

    for trip in trips:
        save_trip(str(trip['id']))

    page_count = trips_count / 10
    if trips_count % 10 > 0:
        page_count += 1

    if page_count > 1:
        for count in range(2, page_count + 1, 1):
            user_url = base_user_url % (user_id, count)
            trips = req(user_url)['trips']
            for trip in trips:
                save_trip(str(trip['id']))


chanyouji_id = raw_input('Please enter your ChanYouJi Id: ')
save_user(chanyouji_id)
