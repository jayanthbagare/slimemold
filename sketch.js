let foodCells = [];
let slimeCells = [];
function setup(){
	createCanvas(600,600);
	this.w = 30;
	this.cols = floor(width / w);
	this.rows = floor(height / w);
	this.grid = [];
	
	for(i = 0; i < 600; i++){
		this.grid[i] = [];
		for(j =0; j < 600; j++){
			this.grid[i][j] = new Cell(i,j,w);
			if(random(0,1) < 0.01){
				this.grid[i][j].spawnSlime();
			}

			if(random(0,1) < 0.03){
				this.grid[i][j].spawnFood();
			}
			
			j = j + this.w;
		}
		i = i + this.w;
	}
}

function draw(){
	background(255);
	for(i = 0; i < 600; i++){
		for(j =0; j < 600; j++){
			this.grid[i][j].show();
			j = j + this.w;
		}
		i = i + this.w;
	}	
}

function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}