from ..BaseControllers import *


class IP(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.write({"request": str(self.request),
                    "arguments": self.request.arguments,
                    "body": self.request.body,
                    "full_uri": self.request.full_uri,
                    "ip": self.request.remote_ip,
                    "headers": self.request.headers})
        print(dir(self.request))
        return
