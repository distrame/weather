function httpGet(theUrl, data = null) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(data);
    return xmlHttp.responseText;
}

function httpPost(theUrl, data = null) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, true); // false for synchronous request
    xmlHttp.send(data);
    xmlHttp.onload = function () {
        console.log(this.responseText);
    };
}

function onlod() {
    var res = httpGet("/Weather/WeatherJSONBy_user_ip");
    var rej = JSON.parse(res).data;

    {
        $("<div/>", {
            "id": "weather_current-" + "head",
            "class": "d-flex justify-content-center"
        }).appendTo("#weather_current");
        {
            $("<h5/>", {
                "id": "weather_current-" + "title"
            }).appendTo("#weather_current-head");
            {
                $(rej.current.location.name, {}).appendTo("#weather_current-title");
            }
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
                "id": "weather_current-" + "state"
            }).appendTo("#weather_current-body");
            {
                $(rej.current.current.condition.text, {}).appendTo("#weather_current-state");
            }
        }
    }
}