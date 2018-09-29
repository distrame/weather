from ..BaseControllers import *


class IP(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        print(dir(self.request))
        self.write({"request": str(self.request),
                    "arguments": str(self.request.arguments),
                    "body": str(self.request.body),
                    "full_uri": str(self.request.full_uri),
                    "ip": str(self.request.remote_ip),
                    "headers": str(self.request.headers)})
        return
