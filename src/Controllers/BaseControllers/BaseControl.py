import tornado.web


class BaseHandler(tornado.web.RequestHandler):
    """
    Базовые методы контроллеров.
    """

    def get_current_user(self):
        return {"login": self.Cookie().get_secure_cookie("login"),
                "user_id": self.Cookie().get_secure_cookie("user_id"),
                "display_name": self.Cookie().get_secure_cookie("display_name"),
                "description": self.Cookie().get_secure_cookie("description"),
                "profile_image_url": self.Cookie().get_secure_cookie("profile_image_url"),
                "offline_image_url": self.Cookie().get_secure_cookie("offline_image_url"),
                "view_count": self.Cookie().get_secure_cookie("view_count"),
                "access_token": self.Cookie().get_secure_cookie("access_token"),
                "scope": self.Cookie().get_secure_cookie("scope"),
                "token_type": self.Cookie().get_secure_cookie("token_type")}

    def authorizated(self):
        if (True and
                self.get_current_user()["login"] is not None and
                self.get_current_user()["user_id"] is not None and
                self.get_current_user()["display_name"] is not None and
                self.get_current_user()["profile_image_url"] is not None and
                self.get_current_user()["offline_image_url"] is not None and
                self.get_current_user()["view_count"] is not None and
                self.get_current_user()["access_token"] is not None and
                self.get_current_user()["scope"] is not None and
                self.get_current_user()["token_type"] is not None):
            return True
        else:
            return False

    @staticmethod
    def ServerInfo():
        from .ServerInfo import ServerInfo
        return ServerInfo()

    def Cookie(self):
        from .Cookie import Cookie
        return Cookie(self)
