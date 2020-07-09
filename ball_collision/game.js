var canvas = document.getElementById("myCanvas");
alert(canvas);
var ctx = canvas.getContext("2d");
var ballRadius = 30;var ballRadius1 = 30;
var x,x1,y,y1,dx,dx1,dy,dy1,r,anima,al,beta;
var flag = 0;
var command,command1;
var IntervalID;

function drawBall() {
    ctx.beginPath();
    ctx.arc(dx, dy, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBall1() {
    ctx.beginPath();
    ctx.arc(dx1, dy1, ballRadius1, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
	drawBall1();


	r+=1; 
	dx=x+r*Math.cos(command*Math.PI/180); 
	dy=y-r*Math.sin(command*Math.PI/180);


	dx1=x1+r*Math.cos((command1)*Math.PI/180); 
	dy1=y1-r*Math.sin((command1)*Math.PI/180);


	

	if(Math.abs(ballRadius+ballRadius1-Math.sqrt(Math.pow(dx-dx1,2)+Math.pow(dy-dy1,2)))<1 && flag==0)
	{	
		flag = 1;
		collisionX = (dx+dx1)/2;
		collisionY = (dy+dy1)/2;
		gama = Math.atan((-dy1 + collisionY)/(dx1 - collisionX))*180/Math.PI+90;
		command = 2*gama - command;
		command1 = 2*gama - command1;
		
		
		
		//alert(gama);
		r = 0;
		x=dx;y=dy;x1=dx1;y1=dy1;
		
	}

	
}



button1 = document.getElementById('option');
	button1.onclick = function()
	{
		 x = ballRadius+200;
		 y = canvas.height/2 +100;
		 dx = x;
		 dy = y;
		 
		 x1 = canvas.width-200-30;
		 y1 = canvas.height/2 +100;
		 dx1 = x1;
		 dy1 = y1;
		 r=0;
		 
		

		command = document.getElementById('command').value;
		value1 = document.getElementById('command1').value;
		command1 = 180 - value1;
		IntervalID = setInterval(draw, 10);


	}

