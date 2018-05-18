# coding=utf-8
from flask import Flask, render_template
import json
import time
import os

app = Flask(__name__)

root_path = os.path.split(os.path.realpath(__file__))[0]
__base_user_path = root_path + '/static/data/user_%s'
__base_trip_path = root_path + '/static/data/user_%s/trip_%s'


def load_user(user_id):
    user_path = __base_user_path % user_id
    user_file = '%s.json' % user_id
    try:
        with open(user_path + '/' + user_file, 'r') as f:
            data = f.read()
            if len(data) is 0:
                return None
            user = json.loads(data)
            # print 'Load user %s' % user
            user['trips'] = [trip for trip in user['trips'] if trip['privacy'] is False]
            return user
    except IOError, e:
        print e
        return None


def load_trip(user_id, trip_id):
    trip_path = __base_trip_path % (user_id, trip_id)
    trip_file = '%s.json' % trip_id
    try:
        with open(trip_path + '/' + trip_file, 'r') as f:
            data = f.read()
            if len(data) is 0:
                return None
            trip = json.loads(data)
            # print 'Load trip %s' % trip
            return trip
    except IOError, e:
        print e
        return None


def load_trip_script(user_id, trip_id):
    trip_path = __base_trip_path % (user_id, trip_id)
    try:
        with open(trip_path + '/script.js', 'r') as f:
            data = f.read()
            if len(data) is 0:
                return None
            # print 'Load trip script %s' % data
            return str(data)
    except IOError, e:
        print e
        return None


@app.route('/users/<int:user_id>')
def user_index(user_id):
    user = load_user(user_id)
    if user is None:
        return 'User not found'
    else:
        return render_template('user.html', user=user)


@app.route('/users/<int:user_id>/trips/<int:trip_id>')
def trip_index(user_id, trip_id):
    trip = load_trip(user_id, trip_id)
    trip_script = load_trip_script(user_id, trip_id)
    if trip is None:
        return 'Trip not found'
    else:
        return render_template('trip.html', trip=trip, trip_script=trip_script, user_id=user_id, trip_id=trip_id)


@app.template_filter('switch_user_image')
def switch_user_image(url, user_id):
    return '/static/data/user_' + str(user_id) + url[url.rindex('/'):]


@app.template_filter('switch_trip_image')
def switch_trip_image(url, user_id, trip_id):
    return '/static/data/user_' + str(user_id) + '/trip_' + str(trip_id) + url[url.rindex('/'):]


@app.template_filter('time_unit')
def switch_trip_image(unit):
    return {'minute': u'分钟', 'hour': u'小时', 'day': u'天'}.get(unit, unit)


@app.template_filter('price_currency')
def switch_trip_image(price_currency):
    return {'CNY': u'元', ' USD': u'美元'}.get(price_currency, price_currency)


@app.template_filter('date_format')
def date_format(value, format='%Y年%m月%d日'):
    return time.strftime(format, time.localtime(float(value)))


if __name__ == '__main__':
    app.run()
