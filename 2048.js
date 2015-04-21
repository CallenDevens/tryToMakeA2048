var position =array (
    array(new boardGrid(0,0),new boardGrid(0,1),new boardGrid(0,2),new boardGrid(0,3)),
    array(new boardGrid(1,0),new boardGrid(1,1),new boardGrid(1,2),new boardGrid(1,3)),
    array(new boardGrid(2,0),new boardGrid(2,1),new boardGrid(2,2),new boardGrid(2,3)),
    array(new boardGrid(3,0),new boardGrid(3,1),new boardGrid(3,2),new boardGrid(3,3)),

);

function coordinate(x,y)
{
    this.x=x;
	this.y=y;
}
function numberGrid(x,y){
    this.number=2;
	this.numberCoordinate= new coordinate(x,y);
}
function boardGrid(x,y){
	this.x=x;
	this.y=y;
    this.grid=null;
	this.state=0;
}
boardGrid.prototype.receiveNumber=function(numberGrid){
	this.grid=numberGrid;
}
function board(position){
	this.map=position;
}

$(document).ready(){
	var gameBoard=new board(position)
}

