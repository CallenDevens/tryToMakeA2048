//use 2-demension array to represent the whole game broad coordinate 
var position =new Array (
    new Array(new boardGrid(0,0),new boardGrid(0,1),new boardGrid(0,2),new boardGrid(0,3)),
    new Array(new boardGrid(1,0),new boardGrid(1,1),new boardGrid(1,2),new boardGrid(1,3)),
    new Array(new boardGrid(2,0),new boardGrid(2,1),new boardGrid(2,2),new boardGrid(2,3)),
    new Array(new boardGrid(3,0),new boardGrid(3,1),new boardGrid(3,2),new boardGrid(3,3))

);
$(document).ready(function(){
	var gameBoard=new board(position);
});

function numberGrid(x,y){
    this.number=Math.random()>0.5?4:2;
	this.x=x;
	this.y=y;
}

// the Grid holding number grids
function boardGrid(x,y){
	this.x=x;
	this.y=y;
    this.grid=null;
	this.state=0;
}
boardGrid.prototype.receiveNumber=function(numberGrid){
	this.grid=numberGrid;
}

// the Game board
function board(position){
	this.map=position;
	this.div=document.createElement("div");
	this.div.id="board";
	document.body.appendChild(this.div);
	
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++)
		{
			this.map[i][j].div=document.createElement("div");
			this.map[i][j].div.className="boardGrid";
			this.div.appendChild(this.map[i][j].div);
		}
	}
	this.randomNewNumGrid();
	this.randomNewNumGrid();
}
//Generator new numberGrid
board.prototype.randomNewNumGrid=function(){
	do{
	    var x=Math.floor(Math.random()*4);
		var y=Math.floor(Math.random()*4);		
	}while(!this.isPositionAvailable(x,y))
		
	var newNumber=new numberGrid(x,y);
	this.addNumberGrid(newNumber)
}
board.prototype.addNumberGrid=function(newNumber)
{
	newNumber.div=document.createElement("div");
	newNumber.div.innerHTML=newNumber.number;
	this.map[newNumber.x][newNumber.y].grid=newNumber;
	this.map[newNumber.x][newNumber.y].div.appendChild(newNumber.div);
}

board.prototype.isPositionAvailable=function(x,y){
	if(this.map[x][y].state==0)
	{
		return true;
	}
	else if(this.map[x][y].state==1)
	{
		return false;
	}
}
