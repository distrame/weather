from tornado.httputil import HTTPHeaders

from ..BaseControllers import *


class IP(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.write({"request": str(self.request),
                    "arguments": str(self.request.arguments),
                    "body": str(self.request.body),
                    "full_url": str(self.request.full_url()),
                    "uri": str(self.request.uri),
                    "ip": str(self.request.remote_ip),
                    "headers": [i for i in ((HTTPHeaders.parse(str(self.request.headers))).get_all())]})
        return
