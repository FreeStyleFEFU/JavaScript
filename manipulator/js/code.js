var screen,scene;
var mas = new Array();
var i = 0;



window.onload = function resize(){
	//var par1,par2,par3,par4,par5,par6;

	WorkWindow();
	command();

	var renderer = new THREE.WebGLRenderer({canvas:screen});
	renderer.setClearColor(0xffd1dc);

	scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width/height,0.1,5000);
	camera.position.set(100,100,1000); //координаты по x,y,z

	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light);

	var axes = new THREE.AxesHelper(1000);
	scene.add(axes);

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 5;
	controls.screenSpacePanning = true;
	controls.minDistance = 2;
	controls.maxDistance = 3000;
	controls.maxPolarAngle = Math.PI / 2;


	//DrowLine();
	DrowBox1(25,200,25,0,0,0);
	DrowBox(200,25,25,0,212.5,0);
	DrowPlane(1000,1000,0,0,0);
	//DrowSphere(100,20,20,-200,200,0);
	//DrowCylinder(50,50,150,-300,-50,0);
	//renderer.render(scene,camera);
	//requestAnimationFrame(resize);
	//alert(mas[1].position.x);

		function loop()
	{
		

		renderer.render(scene,camera);
		requestAnimationFrame(loop);
		//requestAnimationFrame(resize);
	}

	loop();

	r = 100;
	t = 0;
	s = 2 * Math.PI / 180;

	var dx, dy,dz;
	dx = 0;
	dy = 0;
	dz = 45;
	var max = Math.max(Math.abs(dx),Math.abs(dy),Math.abs(dz));
	var alpha = max;

	
	r = 10;
	t = 0;
	s = 2 * Math.PI / 180;
	
	/*var mInverse = new THREE.Matrix4().getInverse( mas[0].matrixWorld );
	mas[0].position.applyMatrix4( mInverse );*/
	
	mas[0].position.applyMatrix4(mas[0].matrixWorld) 
	
	var	intervalID = setInterval(function()
	{
	alpha = anima1(intervalID,0, dx/max, dy/max, dz/max, alpha);
	
	
	/*x0 = mas[1].position.x;
	y0 = mas[1].position.y;
	x1 = x0 + r * Math.sin(t);
	y1 = y0 + r * Math.cos(t);
	mas[1].position.x = x1;
	mas[1].position.y = y1;
	t-=s;*/
	
	},10); 


}

// function konstrukt(x_d, y_d, z_d)
// {
// 	x_d = x_d * 1000;
// 	x_d += y_d;
// 	x_d = x_d * 1000;
// 	x_d += z_d
// 	return x_d;
// }

/* X = 1; Y = 2; Z = 3; XY = 4; XZ = 5; YZ = 6;*/
function anima1(intervalID,par1,dx,dy,dz,step)
{

	// var z_degree = alpha % 1000;
	// z_degree = Math.trunc(z_degree);
	// alpha = alpha / 1000;
	// var y_degree = alpha % 1000;
	// y_degree = Math.trunc(y_degree);
	// alpha = alpha / 1000;
	// var x_degree = alpha % 1000;
	// x_degree = Math.trunc(x_degree);

	if(step == 0)
	{
		 clearInterval(intervalID);
  }

	mas[1].rotation.x += Math.PI/180 * dx;
	mas[1].rotation.y += Math.PI/180 * dy;
	mas[1].rotation.z += Math.PI/180 * dz;
	mas[par1].rotation.x += Math.PI/180 * dx;
	mas[par1].rotation.y += Math.PI/180 * dy;
	mas[par1].rotation.z += Math.PI/180 * dz;
	
	/*rad = Math.sqrt(mas[1].position.x* mas[1].position.x + mas[1].position.z* mas[1].position.z);
	radius = Math.sqrt(rad*rad + mas[1].position.y* mas[1].position.y);
	al = Math.acos(rad/radius)*180/Math.PI;
	if(mas[1].position.y < 0) 
		al = 360 - al;
	//alert(al);
	mas[1].position.x = radius*Math.cos((al+dy+dz)*Math.PI/180);
	mas[1].position.y = radius*Math.sin((al+dx+dz)*Math.PI/180);
	mas[1].position.z = radius*Math.tan((al+dx+dy)*Math.PI/180);*/
	
	
	
	R = Math.sqrt(mas[1].position.x* mas[1].position.x + mas[1].position.y* mas[1].position.y);
	a = Math.acos(mas[1].position.x/R)*180/Math.PI;
	if(mas[1].position.y < 0) 
		a = 360 - a;
	//alert(a);
	mas[1].position.x = R*Math.cos((a+dz)*Math.PI/180);
	mas[1].position.y = R*Math.sin((a+dz)*Math.PI/180);
	//clearInterval(intervalID);
	
	/*
	R = Math.sqrt(mas[1].position.x* mas[1].position.x + mas[1].position.y* mas[1].position.y + mas[1].position.z* mas[1].position.z);
	Sigma = Math.acos(mas[1].position.z/R);
	Fi = Math.atan(mas[1].position.y/mas[1].position.x);
	a = Math.acos(mas[1].position.x/R)*180/Math.PI;
	beta = Math.acos(mas[1].position.y/R)*180/Math.PI;
	delta = Math.acos(mas[1].position.z/R)*180/Math.PI;
	if(mas[1].position.y < 0) 
		a = 360 - a;
	//alert(a);
	mas[1].position.x = R * Math.sin(Sigma*(a+dx)) * Math.cos(Fi*(a+dx));
	mas[1].position.y = R * Math.sin(Sigma*(beta+dy)) * Math.sin(Fi*(beta+dy));
	mas[1].position.z = R * Math.cos(Sigma*(delta+dz));
	//clearInterval(intervalID);
	*/
	
	step--;
	return step;
	
	


}


function DrowLine()
{	
  var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-100, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 100, 0));
  geometry.vertices.push(new THREE.Vector3(100, 0, 0));
  
  var line = new THREE.Line(geometry, material);
  	mas[i] = line;

	i++;
  
  scene.add(line);
}

function DrowBox(par1,par2,par3,par4,par5,par6)
{
	var geometry = new THREE.BoxGeometry(par1,par2,par3,5,5,5);
	geometry.applyMatrix(new THREE.Matrix4().makeTranslation(geometry.parameters.width/2,0,0));
	var material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true });
	/*var material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true, vertexColors:THREE.FaceColors });
	for(var i = 0;i<geometry.faces.length;i++)
	{
		geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
	}*/
	var mesh = new THREE.Mesh(geometry, material);
	var pivot = new THREE.Object3D();
	pivot.add(mesh);
	scene.add(pivot);
	//scene.add(mesh);

	mas[i] = mesh;

	mesh.position.x = par4;
	mesh.position.y = par5;
	mesh.position.z = par6;
	//mesh.rotation.x = Math.PI/4;
	//mesh.rotation.y = Math.PI/4;
	//mesh.rotation.z = Math.PI/2;


	i++;




}
function DrowBox1(par1,par2,par3,par4,par5,par6)
{
	var geometry = new THREE.BoxGeometry(par1,par2,par3,5,5,5);
	geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0,geometry.parameters.height/2,0));
	var material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true });
	/*var material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true, vertexColors:THREE.FaceColors });
	for(var i = 0;i<geometry.faces.length;i++)
	{
		geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
	}*/
	var mesh = new THREE.Mesh(geometry, material);
	var pivot = new THREE.Object3D();
	pivot.add(mesh);
	scene.add(pivot);
	//scene.add(mesh);

	mas[i] = mesh;

	mesh.position.x = par4;
	mesh.position.y = par5;
	mesh.position.z = par6;
	//mesh.rotation.x = Math.PI/4;
	//mesh.rotation.y = Math.PI/4;
	//mesh.rotation.z = Math.PI/2;


	i++;




}

function DrowCylinder(par1,par2,par3,par4,par5,par6)
{
	var geometry = new THREE.CylinderGeometry(par1,par2,par3);

	var material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true });
	/*var material = new THREE.MeshBasicMaterial({color:0xffffff,/*wireframe:true, vertexColors:THREE.FaceColors });
	for(var i = 0;i<geometry.faces.length;i++)
	{
		geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
	}*/
	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	mas[i] = mesh;

	mesh.position.x = par4;
	mesh.position.y = par5;
	mesh.position.z = par6;
	mesh.rotation.x = Math.PI/1;
	mesh.rotation.y = Math.PI/1;


	i++;

}
function DrowSphere(par1,par2,par3,par4,par5,par6)
{
	var geometry = new THREE.SphereGeometry(par1,par2,par3);

	var material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true });
	/*var material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true, vertexColors:THREE.FaceColors });
	for(var i = 0;i<geometry.faces.length;i++)
	{
		geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
	}*/
	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	mas[i] = mesh;

	mesh.position.x = par4;
	mesh.position.y = par5;
	mesh.position.z = par6;

	i++;


}

function DrowPlane(par1,par2,par3,par4,par5)
{
	var geometry = new THREE.PlaneGeometry(par1,par2,25,25);
	var material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true });


	/*var material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true, vertexColors:THREE.FaceColors });
	for(var i = 0;i<geometry.faces.length;i++)
	{
		geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
	}*/
	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	mas[i] = mesh;

	mesh.position.x = par3;
	mesh.position.y = par4;
	mesh.position.z = par5;
	mesh.rotation.x = Math.PI/2;
	//mesh.rotation.y = Math.PI/4;

	i++;
}

function WorkWindow()
{
	width = window.innerWidth;
    height = window.innerHeight;
    screen = document.getElementById('canvas');
	screen.width  = width * 4/5;
	screen.height = height * 4/5;



}

function command()
{

	var width = window.innerWidth;
    var height = window.innerHeight;
	size = document.getElementById('size');
	size.style.float = 'right';
	size.style.width  = width/5 + 'px';
	size.style.height = height/5 + 'px';


	size1 = document.getElementById('size1');
	size1.style.float = 'down';
	size1.style.width  = width/10 + 'px';
	size1.style.height = height/10 + 'px';

	debug = document.getElementById('debug');
	debug.style.width  = width*4/5 + 'px';
	debug.style.height = height/5 + 'px';

	button1 = document.getElementById('option');
	button1.onclick = function()
	{
		var command = document.getElementById('command').value;

		if (command == "Вправо")
		{
		alert('Ну типо двигаемся вправо');
		}
		if (command == "Влево")
		{
		alert('Ну типо двигаемся влево');
		}
		if (command == "Вперед")
		{
		alert('Мы уже вперде');
		}
		if (command == "Назад")
		{
		alert('Ну типо двигаемся Взад');
		}
	}

}
