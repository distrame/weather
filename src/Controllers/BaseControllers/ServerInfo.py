class ServerInfo:
    def __init__(self):
        pass

    @staticmethod
    def get_main_address():
        from src.Data import main_address
        return main_address()

    @staticmethod
    def get_main_port():
        from src.Data import main_port
        return main_port()

    @staticmethod
    def get_domain():
        from src.Data import domain
        return domain()

    @staticmethod
    def get_http_type():
        from src.Data import http_type
        return http_type()

    @staticmethod
    def get_server_time():
        import time
        return time.strftime("%H:%M:%S")

    @staticmethod
    def get_dir(way: str = "") -> str:
        from src.Server import get_dir
        return get_dir() + way

    def get_css(self, css: str) -> str:
        return self.get_dir("/css/") + css

    def get_image(self, image: str) -> str:
        return self.get_dir("/images/") + image

    def get_js(self, js: str) -> str:
        return self.get_dir("/js/") + js

    def get_template(self, template: str) -> str:
        return self.get_dir("/templates/") + template
