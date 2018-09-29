def main():
    import logging
    import os

    from . import Data
    from .Server.Server import PyServer

    logging.basicConfig(filename=os.path.dirname(__file__) + "/../IP.log",
                        filemode="w", format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
                        level=logging.INFO)

    PS = PyServer(ip=Data.main_address(), port=Data.main_port(), domain=Data.domain())
    PS.start()
