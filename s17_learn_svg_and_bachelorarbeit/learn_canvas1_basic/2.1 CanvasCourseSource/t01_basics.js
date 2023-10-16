const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// ctx.fillStyle = "red";
// ctx.fillRect(100,100,500,300); //filled shape
// ctx.strokeRect(90,90,520,320); // outline
// ctx.clearRect(150,150,400,200);  //transparent, 等价于把这一个区域清空。

// ctx.fillStyle = "#0000ff";
// ctx.fillRect(40,40,100,100);

// ctx.fillStyle = "#0f0";
// ctx.fillRect(80,80,100,100);

// ctx.fillStyle = "rgb(255,0,255)";
// ctx.fillRect(120,120,100,100);

// ctx.fillStyle = "rgba(255,0,255,0.1)";
// ctx.fillRect(20,20,400,400);


ctx.fillStyle = 'red';
ctx.strokeStyle = "blue";
// ctx.rect(100,100,200,100);
// ctx.fill();
// ctx.stroke();

// ctx.strokeRect(200,200,200,100);

// This method signals the start of a new drawing path. Any previous paths and shapes are left intact, and a new path is started. It's used to separate different shapes/paths from each other.
ctx.beginPath();
ctx.moveTo(50,400); //move pen
ctx.lineTo(50,100); // draws a line
ctx.lineTo(500,100); // draws a line
ctx.lineTo(500,400); // draws a line
ctx.lineTo(80,300); // draws a line
ctx.fill();
ctx.stroke(); //applies the shape by drawing
//  This method closes the current path by drawing a straight line from the current point to the starting point. This is useful for ensuring shapes like polygons are closed and don't have gaps
//  直接封住。
ctx.closePath();


ctx.fillStyle = "purple";
ctx.strokeStyle = "green";
ctx.beginPath(320,50);
ctx.moveTo(320,50);
ctx.lineTo(520,250);
ctx.lineTo(120,250);
ctx.lineTo(320,30);
ctx.fill();
ctx.stroke();
ctx.closePath();
