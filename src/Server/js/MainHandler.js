function httpGet(theUrl, data = null, sync = false) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, sync); // false for synchronous request
    xmlHttp.send(data);
    return xmlHttp.responseText;
}

function httpPost(theUrl, data = null, sync = false) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, sync); // false for synchronous request
    xmlHttp.send(data);
    xmlHttp.onload = function () {
        console.log(this.responseText);
    };
}

function onlod() {
    var res = httpGet("/Weather/WeatherJSONBy_user_ip");
    var rej = JSON.parse(res);

    {
        $("<div/>", {
            "id": "weather_current-" + "head",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_current");
        {
            $("<h4> " + rej.current.location.name + " </h4>", {
                "id": "weather_current-" + "title"
            }).appendTo("#weather_current-head");
        }

        $("<div/>", {
            "id": "weather_current-" + "body",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_current");
        {
            $("<img src=" + rej.current.current.condition.icon + "/>", {
                "id": "weather_current-" + "icon"
            }).appendTo("#weather_current-body");
            $("<div/>", {
                "id": "weather_current-" + "info"
            }).appendTo("#weather_current-body");
            {
                $("<span> " + rej.current.current.condition.text + " </span>", {
                    "id": "weather_current-" + "state"
                }).appendTo("#weather_current-info");
                $("<span> " + rej.current.current.temp_c + " по цельсию. </span>", {
                    "id": "weather_current-" + "temp"
                }).appendTo("#weather_current-info");
            }
        }
    }

    for (var i = 0; i < 7; i++) {
        $("<div/>", {
            "id": "weather_day_" + i + "-" + "body",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_day_" + i + "");
        {
            $("<img src=" + rej.forecast.forecastday[i].condition.icon + "/>", {
                "id": "weather_day_" + i + "-" + "icon"
            }).appendTo("#weather_day_" + i + "-body");
            $("<div/>", {
                "id": "weather_day_" + i + "-" + "info"
            }).appendTo("#weather_day_" + i + "-body");
            {
                $("<span> " + rej.forecast.forecastday[i].condition.text + " </span>", {
                    "id": "weather_day_" + i + "-" + "state"
                }).appendTo("#weather_day_" + i + "-info");
                $("<span> Максимальная " + rej.forecast.forecastday[i].maxtemp_c + "C </span>", {
                    "id": "weather_day_" + i + "-" + "temp_max"
                }).appendTo("#weather_day_" + i + "-info");
                $("<span> Минимальная " + rej.forecast.forecastday[i].mintemp_c + "C </span>", {
                    "id": "weather_day_" + i + "-" + "temp_min"
                }).appendTo("#weather_day_" + i + "-info");
            }
        }
    }

}