from ..BaseControllers import *


class ToMain(BaseHandler):
    def get(self):
        self.redirect("/Weather")
        return


class MainHandler(BaseHandler):
    """
    Заглавная.
    """

    def get(self):
        self.render(self.ServerInfo().get_template("MainHandler.html"),
                    copyright=copyright())
        print(self.request)
        return
