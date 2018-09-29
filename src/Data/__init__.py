from sys import platform

ip = None
Weather_version = ""


def vneh_ip():
    """
    Возвращает текущий ip машины.
    Если сиё чудо будет повешено на хост, то надо будет запускать вместо локалхоста на этот ip.
    :return:
    """
    global ip
    if not ip:
        from requests import get
        ip = get('https://api.ipify.org').text
    return ip


def type_of_sys():
    return platform[:3]


def main_address():
    if type_of_sys() == "win":
        return "127.0.0.1"
    else:
        return "127.0.0.1"


def main_port():
    if type_of_sys() == "win":
        return 8002
    else:
        return 8002


def domain():
    if type_of_sys() == "win":
        return main_address() + ":" + format(main_port())
    else:
        return "wownik.ru"


def http_type():
    if type_of_sys() == "win":
        return "http://"
    else:
        return "https://"


def get_change_log():
    import os
    import io
    log = io.open(os.path.dirname(__file__) + "/ChangeLog.txt", "r", encoding="utf-8")

    par = []
    for i in log:
        par.append([i.split("$")[0], "$".join(i.split("$")[1:])])

    return par


def get_weather_api_url():
    return "https://api.apixu.com/v1"


def get_weather_api_key():
    return "8ce1c85ac34a4491b84135659182909"
