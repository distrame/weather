from ..BaseControllers import *


class MainHandler(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.render(self.ServerInfo().get_template("MainHandler.html"),
                    copyright=copyright())
        return
