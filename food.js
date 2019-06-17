class Food{
	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;
		this.energy = floor(100);
		this.beingEaten = false;
	}

	reduceEnergy = function(cell){
			this.energy = this.energy - 1;
	}
	
	update = function(cell){
		if(this.beingEaten == true){
			setTimeout(this.reduceEnergy(cell),5000);
		}
		if(this.energy == 10){
			for( var i = 0; i < foodCells.length; i++){ 
   				if ( foodCells[i] === this) {
     				foodCells.splice(i, 1);
     				cell.isPopulatedWithFood = false;
     				this.beingEaten = false;
     				i--;
   				}
			}
		}
	}


	show = function(){
		fill(4,231,72);
		for(var i = 0; i < foodCells.length; i++){
			ellipse((foodCells[i].x - this.w/2),(foodCells[i].y - this.w/2),16,16);
		}
	}


}