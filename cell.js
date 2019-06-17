class Cell{
	constructor(x,y,w){
		this.x = x;
		this.y = y;
		this.w = w;
		this.food;
		this.slime;
		this.isPopulatedWithFood = false;
		this.isPopulatedWithSlime = false;
	}

	show = function(){
		if(this.isPopulatedWithFood && !this.isPopulatedWithSlime){
			this.food.update(this);
			this.food.show();	
		}
		// /!this.isPopulatedWithFood
		if(this.isPopulatedWithSlime){
			this.slime.checkDistanceFromFoodAndStop();
			this.slime.show();
			console.log(slimeCells);
		}
	}

	spawnFood = function(){
		if(this.constructor.name == "Cell" && this.isPopulatedWithFood == false){
			this.food = new Food(this.x,this.y,this.w);
			this.isPopulatedWithFood = true;
			foodCells.push(this.food);
		}
	}

	spawnSlime = function(){
		if(this.constructor.name == "Cell" && this.isPopulatedWithSlime == false){
			this.slime = new Slime(this.x,this.y,this.w);
			this.isPopulatedWithSlime = true;
			slimeCells.push(this.slime);
		}	
	}
}