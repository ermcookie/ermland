points = document.getElementById("points");
prestreq = [500,750,1500]
req = [0,100,500];
gain = [1,2,10];
mult = 1;
function silly(n){
    if (points >= req[n]){
    points = points + gain[n] * mult;
    }
    document.getElementById("points").innerHTML = points;
};
function prestige(n){
    if (points >= prestreq[n]){
    points = 0;
    mult = mult + 1
    }
    document.getElementById("points").innerHTML = points;
};
function rebirth(n){
    if (points >= prestreq[n]){
    points = 0;
    mult = mult + 5
    }
    document.getElementById("points").innerHTML = points;
};