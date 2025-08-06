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
}