from tornado.web import RequestHandler


class Cookie:
    """
    Используются в других хендлерах иупо для того чтобы проще доставать куки
    """
    def __init__(self, request_handler: RequestHandler):
        self.request_handler = request_handler

    def get_secure_cookie(self, cookie: str):
        res = self.request_handler.get_secure_cookie(cookie, None)
        try:
            res = res.decode("utf-8")
        except:
            pass

        return res
