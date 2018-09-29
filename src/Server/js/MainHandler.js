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
            $("<h5> " + rej.current.location.name + " </h5>", {
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
            $("<span> " + rej.current.current.condition.text + " </span>", {
                "id": "weather_current-" + "state"
            }).appendTo("#weather_current-body");
        }
    }
}