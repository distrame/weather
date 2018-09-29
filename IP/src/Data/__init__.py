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
        return vneh_ip()


def main_port():
    if type_of_sys() == "win":
        return 8010
    else:
        return 8010


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
