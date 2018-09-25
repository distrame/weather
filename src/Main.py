def main():
    import logging
    import os

    from . import Data
    from .Server.Server import PyServer

    logging.basicConfig(filename=os.path.dirname(__file__) + "/../Weather.log",
                        filemode="w", format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
                        level=logging.INFO)

    Weather_version = {"name": "Weather", "status": "ALPHA", "version": "1", "build": "1"}
    Data.Weather_version = Weather_version

    # main()
    for i in Data.Weather_version:
        logging.info("{}\t: {}".format(i, Data.Weather_version[i]))
        print("{}\t: {}".format(i, Data.Weather_version[i]))
    logging.info("")
    print("")

    PS = PyServer(ip=Data.main_address(), port=Data.main_port(), domain=Data.domain())
    PS.start()
