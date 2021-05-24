var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width_of_line = 4;
var size = 40;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
console.log("mousedown event callled");
var mouseX = e.clientX - canvas.offsetLeft;
var mouseY = e.clientY - canvas.offsetTop;
console.log("X position is "+ mouseX + " and Y position is " + mouseY);
width_of_line = document.getElementById("width_of_line").value;
console.log("Width of line is " + width_of_line);
size = document.getElementById("size").value;
console.log("Size of the circles is " + size);

draw(mouseX,mouseY);
}

function draw(mouseX,mouseY) {
ctx.beginPath();
ctx.strokeStyle = "blue";
console.log("Blue circle generated");
ctx.lineWidth = width_of_line;
ctx.arc(mouseX,mouseY,size,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
console.log("Black circle generated");
ctx.lineWidth= width_of_line;
ctx.arc(mouseX + 60,mouseY,size,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
console.log("Red circle generated");
ctx.lineWidth= width_of_line;
ctx.arc(mouseX + 120,mouseY,size,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
console.log("Yellow circle generated");
ctx.lineWidth= width_of_line;
ctx.arc(mouseX + 28,mouseY + 50,size,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
console.log("Green circle generated");
ctx.lineWidth= width_of_line;
ctx.arc(mouseX + 108,mouseY +50,size,0,2*Math.PI);
ctx.stroke();
}

function erase () {
ctx.clearRect(0,0,canvas.width,canvas.height);
console.log("Drawing erased");
}