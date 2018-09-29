from ..BaseControllers import *


class IP(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.write({"ip": self.request.remote_ip})
        return
