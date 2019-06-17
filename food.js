class Food{
	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;
		this.energy = floor(100);
		this.beingEaten = false;
	}

	reduceEnergy = function(){
			this.energy = this.energy - 1;
	}
	
	update = function(cell){
		if(this.beingEaten == true){
			setTimeout(this.reduceEnergy(),1000);
		}
		if(this.energy == 10){
			for( var i = 0; i < foodCells.length; i++){ 
   				if ( foodCells[i] == 5) {
     				foodCells.splice(i, 1);
     				cell.isPopulatedWithFood = false;
     				i--;
   				}
			}
		}
	}

	

	show = function(){
		console.log(foodCells.length);
		fill(4,231,72);
		for(var i = 0; i < foodCells.length; i++){
			ellipse((foodCells[i].food.x - this.w/2),(foodCells[i].food.y - this.w/2),16,16);
		}
	}


}