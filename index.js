
function setup(){
//const canvas = document.getElementById("canvas");


createCanvas(displayWidth, displayHeight);
oncanvas =document.createElement("canvas");
 oncanvas.width = width;
oncanvas.height = height;
//console.log(oncanvas.width);


const context = oncanvas.getContext("2d");


oncanvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";


let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");

const frame = function() {
  drawingContext.clearRect(0, 0, width, height);
  healthBar.show(drawingContext);
  requestAnimationFrame(frame);
}

canvas.onclick = function() {
  health -= 10;
  healthBar.updateHealth(health);
};

frame();
}
