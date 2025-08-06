points = document.getElementById("points");
function addPoints() {
    points = points + 1;
    document.getElementById("points").innerText = points;
}
function silly(x) {
    if (x == 0) {
        points = points + 1;
        document.getElementById("points").innerText = points;
        document.getElementById("blep").disabled = true;
        document.getElementById("blep").innerText = "blepped :3";
    }
    if (x == 1) {
    if (points >= 5) {
        points = points - 5;
        document.getElementById("points").innerText = points;
        document.getElementById("sillydance").disabled = true;
        document.getElementById("sillydance").innerText = "sillydanced";
    } else {
        alert("you need at least 5 points to do the sillydance");
    }
}
}