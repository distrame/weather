function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function ChangeLog() {
    var log = httpGet("/Weather/ChangeLogJSON");
    var pars = JSON.parse(log);

    log = document.getElementById("log");
    for (var i = 0; i < pars.change_log.length; i++) {
        console.log(pars.change_log[i]);

        var tit = document.createElement("h4");
        var dis = document.createElement("p");
        tit.innerText = pars.change_log[i][0];
        dis.innerText = pars.change_log[i][1];

        log.appendChild(tit);
        log.appendChild(dis);
    }
}
