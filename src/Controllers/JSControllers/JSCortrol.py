from ..BaseControllers import *


class JS(BaseHandler):
    """
    Выгрузка JS файлов.
    """

    def get(self, file):
        self.render(self.ServerInfo().get_js(file))

        return
