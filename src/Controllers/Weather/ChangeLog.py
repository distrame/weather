from ..BaseControllers import *


class ChangeLog(BaseHandler):
    """
    Страница чейнджлога.
    """

    def get(self):
        self.render(self.ServerInfo().get_template("ChangeLog.html"),
                    copyright=copyright())

        return
