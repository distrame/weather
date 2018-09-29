from tornado.httputil import HTTPHeaders

import requests

from ..BaseControllers import *
from src.Data import get_weather_api_url, get_weather_api_key


def get_current(q, lang):
    url = get_weather_api_url() + "/current.json" + "?"
    dict_ = {"key": get_weather_api_key(),
             "q": q,
             "lang": lang}

    for i in dict_:
        url += "{}={}&".format(i, dict_[i])
    url = url[:-1]

    res = requests.get(url=url)
    rej = res.json()
    return rej


def get_forecast(q, days, lang):
    url = get_weather_api_url() + "/forecast.json" + "?"
    dict_ = {"key": get_weather_api_key(),
             "q": q,
             "days": days,
             "lang": lang}

    for i in dict_:
        url += "{}={}&".format(i, dict_[i])
    url = url[:-1]

    res = requests.get(url=url)
    rej = res.json()
    return rej


class WeatherJSONBy_user_ip(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.post()
        return

    def post(self):
        ip = (HTTPHeaders.parse(str(self.request.headers))).get("X-Real-Ip")

        self.write(get_forecast(q=ip, days=7, lang="ru"))
        return
