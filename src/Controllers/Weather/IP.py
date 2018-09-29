from ..BaseControllers import *


class IP(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.write({"ip": self.request.remote_ip,
                    "request": str(self.request)})
        print(dir(self.request))
        return
