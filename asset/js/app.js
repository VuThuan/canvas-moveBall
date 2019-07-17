var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//đường kính của ball
var ballRadius = 20;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = getRandomInteger(canvas.width - ballRadius, ballRadius);
var y = getRandomInteger(canvas.height - ballRadius, ballRadius);
var dx = 3;
var dy = -3;
var timeOut = 10;

//Hàm random số bất kỳ trong khoảng max min
function getRandomInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Hàm vẽ ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    //màu của ball
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

//Sự kiện khi nhấn nút xuống
document.addEventListener("keydown", keyHandler, false);

function keyHandler(e) {
    var kCode = e.keyCode;
    switch (kCode) {
        //KeyCode = 38 là nút Up trên bàn phím
        case 38: {
            timeOut -= 5;
            if (timeOut < 0) {
                timeOut = 0;
            }
            break;
        }
        //KeyCode = 40 là nút Down trên bàn phím
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

//Hàm di chuyển quả bóng 
function moveBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    //Khi quả bóng chạm 2 góc trên và dưới
    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }
    //Khi quả bóng chạm 2 góc trái và phải
    else if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }
    x += dx;
    y += dy;
    timeout = setTimeout(moveBall, timeOut);
    console.log(timeOut);
}

//Load lại trang khi resize width
window.onresize = function () {
    location.reload();
}

var timeout = setTimeout(moveBall, timeOut);