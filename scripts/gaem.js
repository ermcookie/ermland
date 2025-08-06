points = document.getElementById("points");
pointsperclick = 1;
document.getElementById("points").innerText = points;
document.getElementById("blep").disabled = false;   // Initialize points
document.getElementById("sillydance").disabled = false; // Initialize buttons       
function addPoints() {
    points = points + pointsperclick;
    document.getElementById("points").innerText = points;
}
function silly(x) {
    if (x == 0) {
        points = points + pointsperclick;
        document.getElementById("points").innerText = points;
        document.getElementById("blep").disabled = true;
        document.getElementById("blep").innerText = "blepped :3";
    }
    if (x == 1) {
    if (points >= 5) {
        points = points - 5;
        document.getElementById("points").innerText = points;
        pointsperclick = pointsperclick + 1;
        document.getElementById("addPointsButton").innerText = "click me for "+ pointsperclick + " points";
        alert("you did the sillydance! now you get " + pointsperclick + " points per click!");
        document.getElementById("sillydance").disabled = true;
        document.getElementById("sillydance").innerText = "sillydanced";
    } else {
        alert("you need at least 5 points to do the sillydance");
    } 
}
if (x == 2) {
    if (points >= 10) {
        points = points - 10;
        document.getElementById("points").innerText = points;
        pointsperclick = pointsperclick + 2;
        document.getElementById("addPointsButton").innerText = "click me for "+ pointsperclick + " points";
        alert("you did the glorp! now you get " + pointsperclick + " points per click!");
        document.getElementById("glorp").disabled = true;
        document.getElementById("glorp").innerText = "glorped";
    } else {
        alert("you need at least 10 points to do the glorp");
    }
}
if (x == 3) {
    if (points >= 500) {
        points = points - 500;
        document.getElementById("points").innerText = points;
        pointsperclick = pointsperclick + 5;
        document.getElementById("addPointsButton").innerText = "click me for "+ pointsperclick + " points";
        alert("you did the prestige! now you get " + pointsperclick + " points per click!");
        document.getElementById("prestige").disabled = true;
        document.getElementById("prestige").innerText = "prestiged";
    } else {
        alert("you need at least 500 points to do the prestige");
    }
} else if (x == 4) {
    if (points >= 750) {
        points = points - 750;
        document.getElementById("points").innerText = points;
        pointsperclick = pointsperclick + 10;
        document.getElementById("addPointsButton").innerText = "click me for "+ pointsperclick + " points";
        alert("you did the ultra prestige! now you get " + pointsperclick + " points per click!");
        document.getElementById("ultraprestige").disabled = true;
        document.getElementById("ultraprestige").innerText = "ultra prestiged";
    } else {
        alert("you need at least 750 points to do the ultra prestige");
    }
}
}
function prestige(x) {
    if (x == 0) {
        if (points >= 500) {
            points = points - 500;
            document.getElementById("points").innerText = points;
            pointsperclick = pointsperclick * 2;
            document.getElementById("addPointsButton").innerText = "click me for "+ pointsperclick + " points";
            alert("you did the prestige! now you get " + pointsperclick + " points per click!");
            document.getElementById("prestige").disabled = true;
            document.getElementById("prestige").innerText = "prestiged";
        } else {
            alert("you need at least 500 points to do the prestige");
        }
    }
    if (x == 1) {
        if (points >= 750) {
            points = points - 750;
            document.getElementById("points").innerText = points;
            pointsperclick = pointsperclick * 3;
            document.getElementById("addPointsButton").innerText = "click me for "+ pointsperclick + " points";
            alert("you did the ultra prestige! now you get " + pointsperclick + " points per click!");
            document.getElementById("ultraprestige").disabled = true;
            document.getElementById("ultraprestige").innerText = "ultra prestiged";
        } else {
            alert("you need at least 750 points to do the ultra prestige");
        }
    }
}