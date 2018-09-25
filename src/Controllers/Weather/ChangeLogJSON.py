from ..BaseControllers import *


class ChangeLogJSON(BaseHandler):
    def get(self):
        self.write({"change_log": change_log()})
        return
