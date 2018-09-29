import tornado.web


class IP(tornado.web.RequestHandler):
    """
    Заглавная.
    """

    def get(self):
        self.write({"ip": self.request.remote_ip})
        return
