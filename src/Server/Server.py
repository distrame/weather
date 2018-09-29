import logging
import os

import tornado.escape
import tornado.ioloop
import tornado.web
import tornado.websocket

from src import Controllers


class PyServer:
    @staticmethod
    def make_app():
        settings = {
            "static_path": os.path.dirname(__file__),
            "static_url_prefix": "/Weather/static/"
        }
        return tornado.web.Application([
            (r"/", Controllers.Weather.ToMain),
            (r"/Weather", Controllers.Weather.MainHandler),

            (r"/Weather/ChangeLog", Controllers.Weather.ChangeLog),
            (r"/Weather/ChangeLogJSON", Controllers.Weather.ChangeLogJSON),

            (r"/Weather/JS/(.*)", Controllers.JSControllers.JS),

            # Static
            (r"/Weather/static", tornado.web.StaticFileHandler, dict(path=settings['static_path']))
        ], **settings, cookie_secret="VerySecretWeatherCookie")

    def __init__(self, ip: str, port: str, domain=None):
        self.ip = ip
        self.domain = domain
        self.port = port
        self.app = self.make_app()

    def start(self):
        """
        Слушает io через порт. Так же отчечает. Магия.
        :return:
        """
        logging.info("[Weather.tornado.web] Web services starting on {}: {}".format(self.ip, self.port))
        print("[Weather.tornado.web] Web services starting on {}: {}".format(self.ip, self.port))
        self.app.listen(self.port, self.ip)
        tornado.ioloop.IOLoop.current().start()
        return True

    @staticmethod
    def stop():
        """
        Остановка сервера
        :return:
        """
        tornado.ioloop.IOLoop.current().stop()
        return True
