class Slime{
	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;
		this.pos = createVector(this.x,this.y);
		this.velocity = createVector();
		this.acceleration = createVector(random(-0.5,0.5),random(-0.5,0.5));
		this.energy = 10;
	}

	update = function(){
		this.acceleration.x = random(-0.005,0.005);
		this.acceleration.y = random(-0.005,0.005);
		let steer = this.communitySteer();
		if(steer){
			this.velocity = steer;
		}
		this.velocity.add(this.acceleration);
		if(this.pos.x >= width - 1 || this.pos.x <= 1){
			this.velocity.mult(-1);
		}
		if(this.pos.y >= height - 1 || this.pos.y <= 1){
			this.velocity.mult(-1);
		}
		this.pos.add(this.velocity);
		this.acceleration.mult(0);

		if(this.pos.x <= 0 || this.pos.x >= width){
			this.pos.x = random(width/2);
		}

		if(this.pos.y <= 0 || this.pos.y >= height){
			this.pos.y = random(height/2);
		}
	}

	checkDistanceFromFoodAndStop(){
		if(foodCells.length >= slimeCells.length){
		for(let m=0;m<foodCells.length;m++){
			let dt = int(dist(this.pos.x,this.pos.y,foodCells[m].x,foodCells[m].y));
			if(dt <= 20 ){
				this.pos.x = foodCells[m].x;
				this.pos.y = foodCells[m].y;
				foodCells[m].beingEaten = true;
				this.energy = this.energy + foodCells[m].energy;
			}
			else{
				this.update();
			}
		}
		}else{
			this.update();
		}
	}

	communitySteer = function(){
		if(foodCells.length < slimeCells.length){
			let m = slimeCells.sort(compareValues('energy','desc'));
			let desired = p5.Vector.sub(m[0].pos,this.pos);
			desired.normalize();
			let steer = p5.Vector.sub(desired,this.velocity);
			return steer;
		}
	}

	releasePheromone = function(){
		if(this.energy - 20 >= 10){
			this.energy = this.energy - 20;
		}
	}

	show = function(){
		fill(177,156,217);
		ellipse((this.pos.x - this.w/2),(this.pos.y - this.w/2),16,16);
	}

}