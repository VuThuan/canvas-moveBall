var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Ball radius
var ballRadius = 20;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = getRandomInteger(canvas.width - ballRadius, ballRadius);
var y = getRandomInteger(canvas.height - ballRadius, ballRadius);
var dx = 3;
var dy = -3;
var timeOut = 10;

//function get random integer
function getRandomInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//function draw ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    //color of the ball
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

//Event when pressing down button 
document.addEventListener("keydown", keyHandler, false);

function keyHandler(e) {
    var kCode = e.keyCode;
    switch (kCode) {
        //KeyCode = 38 is the TOP button on the keyboard
        case 38: {
            timeOut -= 5;
            if (timeOut < 0) {
                timeOut = 0;
            }
            break;
        }
        //KeyCode = 40 is the BOTTOM button on the keyboard
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

//function move Ball
function moveBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    //When the ball hits the top and bottom two corners
    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }
    //When the ball hits the left and right two corners
    else if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }
    x += dx;
    y += dy;
    timeout = setTimeout(moveBall, timeOut);
    console.log(timeOut);
}

//Load the page when resize width 
window.onresize = function () {
    location.reload();
}

var timeout = setTimeout(moveBall, timeOut);