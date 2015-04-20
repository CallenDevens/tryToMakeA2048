var position =array (
    array(new boardGrid(0,0),)
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


