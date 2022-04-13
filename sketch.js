
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var block1,block2;
var rotator1,rotator2,rotator3;
var plane;
var particle1,particle2,particle3,particle4,particle5
var angle1 = 30
var angle2 = 60
var angle3 = 90


function setup() { 
	createCanvas(400,400);


		engine = Engine.create();
		world = engine.world;

		var plane_option ={

			isStatic: true
		}

	//Crie os Corpos aqui.

			plane = Bodies.rectangle(200,395,400,20,plane_option);
			World.add(world,plane);

			block1 = Bodies.rectangle(290,100,100);
			World.add(world,block1);

			block2 = Bodies.rectangle(300,100,100);
			World.add(world,block2);




			var rotator1_option ={

				isStatic: true
			}

			rotator1 = Bodies.rectangle(250,200,150,120,rotator1_option);
			World.add(world,rotator1);


			var rotator2_option ={

				isStatic: true
			}

			rotator2 = Bodies.rectangle(250,200,150,120,rotator2_option);
			World.add(world,rotator2);


			var rotator3_option ={

				isStatic: true
			}

			rotator3 = Bodies.rectangle(250,200,150,120,rotator3_option);
			World.add(world,rotator3);



			



			var particle1_option ={
				restitution:0.4,
				friction:0.02

			}

			particle1 = Bodies.circle(220,10,10,particle1_option);
			World.add(world,particle1);

			var particle2_option ={
				restitution:0.4,
				friction:0.02

			}

			particle2 = Bodies.circle(220,10,10,particle2_option);
			World.add(world,particle2);


			var particle3_option ={
				restitution:0.4,
				friction:0.02

			}

			particle3 = Bodies.circle(220,10,10,particle3_option);
			World.add(world,particle3);


			var particle4_option ={
				restitution:0.4,
				friction:0.02

			}

			particle4 = Bodies.circle(220,10,10,particle4_option);
			World.add(world,particle4);


			var particle5_option ={
				restitution:0.4,
				friction:0.02

			}

			particle5 = Bodies.circle(220,10,10,particle5_option);
			World.add(world,particle5);




	//Engine.run(Engine);
  
}


function draw() {
background("black");
Engine.update(engine)
  
	

	fill("red")
	rectMode(CENTER);
	rect(block1.position.x,block1.position.y,100);

	
	
	rect(block2.position.x,block2.position.y,100);

	
  	
  	rect(plane.position.x,plane.position.y,400,20);

	

	ellipseMode(CENTER);
	ellipse(particle1.position.x,particle1.position.y,10);

	
	ellipse(particle2.position.x,particle2.position.y,10);

	
	ellipse(particle3.position.x,particle3.position.y,10);

	
	ellipse(particle4.position.x,particle4.position.y,10);

	
	ellipse(particle5.position.x,particle5.position.y,10);

	Matter.Body.rotate(rotator1,angle1);
			push();
			translate(rotator1.position.x,rotator1.position.y);
			rotate(angle1);
			rect(0,0,150,20);
			pop();
			angle1 += 6;

			Matter.Body.rotate(rotator2,angle2);
			push();
			translate(rotator2.position.x,rotator2.position.y);
			rotate(angle2);
			rect(0,0,150,20);
			pop();
			angle2 += 6;

			Matter.Body.rotate(rotator3,angle3);
			push();
			translate(rotator3.position.x,rotator3.position.y);
			rotate(angle3);
			rect(0,0,150,20);
			pop();
			angle3 += 6;

  
  
  
 
}



