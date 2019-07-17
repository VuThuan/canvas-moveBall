var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = getRandomInteger(canvas.width - ballRadius, ballRadius);
var y = getRandomInteger(canvas.height - ballRadius, ballRadius);
var dx = 3;
var dy = -3;
var timeOut = 10;

function getRandomInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

document.addEventListener("keydown", keyHandler, false);

function keyHandler(e) {
    var kCode = e.keyCode;
    switch (kCode) {
        case 38: {
            timeOut -= 5;
            if (timeOut < 0) {
                timeOut = 0;
            }
            break;
        }
        case 40: {
            timeOut += 5;
            if (timeOut > 15) {
                timeOut = 15;
            }
            break;
        }
        default:
    }
}

function moveBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }
    else if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }
    x += dx;
    y += dy;
    timeout = setTimeout(moveBall, timeOut);
    console.log(timeOut);
}

window.onresize = function () {
    location.reload();
}

var timeout = setTimeout(moveBall, timeOut);