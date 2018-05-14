# -*- coding: utf-8 -*-
import json
import os
import requests
import random
import time
import codecs
import re
import sys

reload(sys)
sys.setdefaultencoding("utf8")


def sleep(leave=20):
    date = random.random() * leave
    print "Sleep %ss" % date
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
            data = response.json()
            print('Request %s Success' % url)
            return data
        else:
            print('HTTP CODE: %d %s' % (response.status_code, url))
    except Exception as e:
        print('Request %s Error %s' % (url, e))


def save(file_path, file_name, data):
    if not os.path.exists(file_path):
        os.makedirs(file_path)
    with codecs.open(file_path + "/" + file_name, "w+", encoding='utf8') as f:
        f.write(data)
        f.flush()


def parse_and_save_image(path, data):
    urls = re.findall('url": "(.*?)"', data)
    print "Found %s images" % len(urls)
    for url in urls:
        response = requests.get(url)
        file_name = url[url.index("/", 22) + 1:]
        with open(path + "/" + file_name, 'wb') as img:
            img.write(response.content)
            img.flush()
            print "Download %s success" % file_name


def save_chanyouji(user_id):
    base_user_url = "http://chanyouji.com/api/users/%s.json?page=%s"
    base_trip_url = "http://chanyouji.com/api/trips/%s.json"

    user_url = base_user_url % (user_id, 0)
    user_json = req(user_url)

    cid = user_json["id"],
    name = user_json["name"]
    trips_count = user_json["trips_count"]

    print "User name %s, trips_count: %s" % (name, trips_count)

    for trip in user_json["trips"]:
        print "Save trip %s" % str(trip["name"])
        trip_id = str(trip["id"])
        trip_url = base_trip_url % trip_id
        save_path = "../data/user_%s/trip_%s" % (user_id, trip_id)
        save_name = "%s.json" % trip_id
        content = json.dumps(req(trip_url), ensure_ascii=False)
        save(save_path, save_name, content)
        sleep()
        parse_and_save_image(save_path, content)

    user_json["trips"] = None
    save("../data/user_%s" % user_id, "%s.json" % user_id, json.dumps(user_json, ensure_ascii=False))

    page_count = trips_count / 10
    if trips_count % 10 > 0:
        page_count += 1

    if page_count > 1:
        for count in range(2, page_count + 1, 1):
            user_url = base_user_url % (user_id, count)
            trips = req(user_url)["trips"]
            for trip in trips:
                print "save trip %s" % str(trip["name"])
                trip_id = str(trip["id"])
                trip_url = base_trip_url % trip_id
                save_path = "../data/user_%s/trip_%s" % (user_id, trip_id)
                save_name = "%s.json" % trip_id
                content = json.dumps(req(trip_url), ensure_ascii=False)
                save(save_path, save_name, content)
                sleep()
                parse_and_save_image(save_path, content)


chanyouji_id = 658973
save_chanyouji(chanyouji_id)
