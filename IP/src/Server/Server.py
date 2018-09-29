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
        }
        return tornado.web.Application([
            (r"/IP", Controllers.IP),
			
        ], **settings, cookie_secret="VerySecretWoWnikCookie")

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
