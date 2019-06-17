class Slime{
	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;
		this.pos = createVector(this.x,this.y);
		this.velocity = createVector();
		this.acceleration = createVector(random(-1,1),random(-1,1));
	}

	update = function(){
		this.velocity.add(this.acceleration);
		if(this.pos.x >= width - 1 || this.pos.x <= 1){
			this.velocity.mult(-1);
		}
		if(this.pos.y >= height - 1 || this.pos.y <= 1){
			this.velocity.mult(-1);
		}
		this.pos.add(this.velocity);
		this.acceleration.mult(0);
	}

	checkDistanceFromFoodAndStop(){
		for(let m=0;m<foodCells.length;m++){
			let dt = int(dist(this.pos.x,this.pos.y,foodCells[m].food.x,foodCells[m].food.y));
			if(dt == 0){
				this.update();
			}
			else if(dt <= 40){
				this.pos.x = foodCells[m].food.x;
				this.pos.y = foodCells[m].food.y;
				this.acceleration.mult(0);
				this.velocity.mult(0);
				foodCells[m].food.beingEaten = true;
			}
			else{
				this.update();
			}


		}
	}

	show = function(){
		fill(177,156,217);
		ellipse((this.pos.x - this.w/2),(this.pos.y - this.w/2),16,16);
	}
}