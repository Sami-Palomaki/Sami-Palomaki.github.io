function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if(!getCookie("visits")) {
    setCookie("visits", "1", 30);
} else {
    var visits = getCookie("visits");
    visits++;
    setCookie("visits", visits, 30);
}
if(!getCookie("totalVisits")) {
    setCookie("totalVisits", "1", 30);
} else {
    var totalVisits = getCookie("totalVisits");
    totalVisits++;
    setCookie("totalVisits", totalVisits, 30);
}

// document.getElementById("counter").inner
