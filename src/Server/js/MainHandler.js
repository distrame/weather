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
            $("<h4> " + rej.location.name + " </h4>", {
                "id": "weather_current-" + "title"
            }).appendTo("#weather_current-head");
        }

        $("<div/>", {
            "id": "weather_current-" + "body",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_current");
        {
            $("<img src=" + rej.current.condition.icon + "/>", {
                "id": "weather_current-" + "icon"
            }).appendTo("#weather_current-body");
            $("<div/>", {
                "id": "weather_current-" + "info"
            }).appendTo("#weather_current-body");
            {
                $("<p> " + rej.current.condition.text + " </p>", {
                    "id": "weather_current-" + "state"
                }).appendTo("#weather_current-info");
                $("<p> " + rej.current.temp_c + " по цельсию. </p>", {
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
            $("<img src=" + rej.forecast.forecastday[i].day.condition.icon + "/>", {
                "id": "weather_day_" + i + "-" + "icon"
            }).appendTo("#weather_day_" + i + "-body");
            $("<div/>", {
                "id": "weather_day_" + i + "-" + "info"
            }).appendTo("#weather_day_" + i + "-body");
            {
                $("<p> " + rej.forecast.forecastday[i].day.condition.text + " </p>", {
                    "id": "weather_day_" + i + "-" + "state"
                }).appendTo("#weather_day_" + i + "-info");
                $("<p> Максимальная " + rej.forecast.forecastday[i].day.maxtemp_c + "C </p>", {
                    "id": "weather_day_" + i + "-" + "temp_max"
                }).appendTo("#weather_day_" + i + "-info");
                $("<p> Минимальная " + rej.forecast.forecastday[i].day.mintemp_c + "C </p>", {
                    "id": "weather_day_" + i + "-" + "temp_min"
                }).appendTo("#weather_day_" + i + "-info");
            }
        }
    }

}