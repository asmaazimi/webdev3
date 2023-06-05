
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bugX = 0;
var bugY = 0;
var bugSpeed = 1000; 
var score = 0;
function drawBug() {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(bugX, bugY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    requestAnimationFrame(drawBug);
}
function moveBug() {
    bugX = Math.floor(Math.random() * (canvas.width - 40)) + 20;
    bugY = Math.floor(Math.random() * (canvas.height - 40)) + 20;
}
function updateScore() {
    document.getElementById("score").textContent = score;
}
function resetSpeed() {
    bugSpeed = 1000;
}
canvas.addEventListener("click", function(event) {
    var distance = Math.sqrt(Math.pow(event.offsetX - bugX, 2) + Math.pow(event.offsetY - bugY, 2));
    if (distance <= 20) {
        score++;
        updateScore();
        moveBug();
        bugSpeed -= 50;
        if (bugSpeed < 100) {
            bugSpeed = 100;
        }
        clearInterval(interval);
        interval = setInterval(moveBug, bugSpeed);
    }
});
document.getElementById("resetScore").addEventListener("click", function() {
    score = 0;
    updateScore();
});
document.getElementById("resetSpeed").addEventListener("click", function() {
    resetSpeed();
    clearInterval(interval);
    interval = setInterval(moveBug, bugSpeed);
});
moveBug();
setInterval(moveBug, bugSpeed);
requestAnimationFrame(drawBug);
