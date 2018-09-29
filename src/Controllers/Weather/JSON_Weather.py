from tornado.httputil import HTTPHeaders

import requests

from ..BaseControllers import *
from src.Data import get_weather_api_url, get_weather_api_key


class WeatherJSONBy_user_ip(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.post()
        return

    def post(self):
        ip = (HTTPHeaders.parse(str(self.request.headers))).get("X-Real-Ip")

        url = get_weather_api_url() + "/current.json" + "?"
        dict_ = {"key": get_weather_api_key(),
                 "q": ip,
                 "days": 7,
                 "lang": "ru"}

        for i in dict_:
            url += "{}={}&".format(i, dict_[i])
        url = url[:-1]

        res = requests.get(url=url)
        rej = res.json()
        
        self.write(rej)
        return
