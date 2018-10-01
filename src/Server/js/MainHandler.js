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

    $("<div id='City' class='d-flex justify-content-center' style='width: 100%;'> </div>").appendTo("#days");
    $("<div id=\"weather_current\" class=\"col-md-12 card bk_blue\">\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div id=\"weather_day_1\" class=\"col-md-6 card bk_blue\">\n" +
        "                    </div>\n" +
        "                    <div id=\"weather_day_2\" class=\"col-md-6 card bk_blue\">\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div id=\"weather_day_3\" class=\"col-md-6 card bk_blue\">\n" +
        "                    </div>\n" +
        "                    <div id=\"weather_day_4\" class=\"col-md-6 card bk_blue\">\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div id=\"weather_day_5\" class=\"col-md-6 card bk_blue\">\n" +
        "                    </div>\n" +
        "                    <div id=\"weather_day_6\" class=\"col-md-6 card bk_blue\">\n" +
        "                    </div>\n", {}).appendTo("#days");

    $("<h1> " + rej.location.name + " </h1>", {
        "id": "weather_current-" + "title"
    }).appendTo("#City");
    {
        $("<div/>", {
            "id": "weather_current-" + "head",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_current");
        {
            $("<h2> " + rej.forecast.forecastday[0].date + " </h2>", {
                "id": "weather_current-" + "title"
            }).appendTo("#weather_current-head");
        }

        $("<div/>", {
            "id": "weather_current-" + "body",
            "class": "d-flex justify-content-center",
            "style": "height: 100%;"
        }).appendTo("#weather_current");
        {
            $("<img src='http:" + rej.current.condition.icon + "' width='64px' height='64px'/>", {
                "id": "weather_current-" + "icon",
                "style": "width: 30%;"
            }).appendTo("#weather_current-body");
            $("<div/>", {
                "id": "weather_current-" + "info",
                "style": "width: 70%;"
            }).appendTo("#weather_current-body");
            {
                $("<p> " + rej.current.condition.text + " </p>", {
                    "id": "weather_current-" + "state"
                }).appendTo("#weather_current-info");
                $("<p> Текущая: " + rej.current.temp_c + "C </p>", {
                    "id": "weather_current-" + "temp"
                }).appendTo("#weather_current-info");
                $("<p> Макс: " + rej.forecast.forecastday[0].day.maxtemp_c + "C </p>", {
                    "id": "weather_current-" + "temp_max"
                }).appendTo("#weather_current-info");
                $("<p> Мин: " + rej.forecast.forecastday[0].day.mintemp_c + "C </p>", {
                    "id": "weather_current-" + "temp_min"
                }).appendTo("#weather_current-info");
            }
        }
    }

    for (var i = 1; i < 7; i++) {
        $("<div/>", {
            "id": "weather_day_" + i + "-" + "head",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_day_" + i + "");
        {
            $("<h4> " + rej.forecast.forecastday[i].date + " </h4>", {
                "id": "weather_day_" + i + "-" + "title"
            }).appendTo("#weather_day_" + i + "-head");
        }

        $("<div/>", {
            "id": "weather_day_" + i + "-" + "body",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_day_" + i + "");
        {
            $("<img src='http:" + rej.forecast.forecastday[i].day.condition.icon + "' width='64px' height='64px'/>", {
                "id": "weather_day_" + i + "-" + "icon",
                "style": "width: 30%; vertical-align: center;"
            }).appendTo("#weather_day_" + i + "-body");
            $("<div/>", {
                "id": "weather_day_" + i + "-" + "info",
                style: "width: 70%;"
            }).appendTo("#weather_day_" + i + "-body");
            {
                $("<p> " + rej.forecast.forecastday[i].day.condition.text + " </p>", {
                    "id": "weather_day_" + i + "-" + "state"
                }).appendTo("#weather_day_" + i + "-info");
                $("<p> Макс: " + rej.forecast.forecastday[i].day.maxtemp_c + "C </p>", {
                    "id": "weather_day_" + i + "-" + "temp_max"
                }).appendTo("#weather_day_" + i + "-info");
                $("<p> Мин: " + rej.forecast.forecastday[i].day.mintemp_c + "C </p>", {
                    "id": "weather_day_" + i + "-" + "temp_min"
                }).appendTo("#weather_day_" + i + "-info");
            }
        }
    }

}