from ..BaseControllers import *

from tornado.httputil import HTTPHeaders


class IP(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        print(dir(self.request))
        self.write({"request": str(self.request),
                    "arguments": str(self.request.arguments),
                    "body": str(self.request.body),
                    "full_url": str(self.request.full_url()),
                    "uri": str(self.request.uri),
                    "ip": str(self.request.remote_ip),
                    "headers": (HTTPHeaders.parse(str(self.request.headers)))})
        print(HTTPHeaders.parse(self.request.headers))
        return
