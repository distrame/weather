setInterval(function () {
    Data = new Date().toLocaleTimeString();
    if (Data.length < 8){
        Data = "0"+Data;
    }
    document.getElementById("time").innerHTML = Data;
}, 250);