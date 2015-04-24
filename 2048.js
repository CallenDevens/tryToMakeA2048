//use 2-demension array to represent the whole game broad coordinate 
var position =new Array (
    new Array(new boardGrid(0,0),new boardGrid(0,1),new boardGrid(0,2),new boardGrid(0,3)),
    new Array(new boardGrid(1,0),new boardGrid(1,1),new boardGrid(1,2),new boardGrid(1,3)),
    new Array(new boardGrid(2,0),new boardGrid(2,1),new boardGrid(2,2),new boardGrid(2,3)),
    new Array(new boardGrid(3,0),new boardGrid(3,1),new boardGrid(3,2),new boardGrid(3,3))

);
$(document).ready(function(){
	var gameBoard=new board(position);
    /*
    Character codes:
    
    37 - left
    
    38 - up
    
    39 - right
    
    40 - down
    */
    $(document).keydown(function(e){
        if (e.keyCode == 38) { 
           gameBoard.moveUp();
           return false;
        }
    });
});

function numberGrid(x,y){
    this.number=Math.random()>0.8?4:2;
	this.x=x;
	this.y=y;
}
//numberGrid destructor function
numberGrid.prototype.destructor=function()
{

}

// the Grid holding number grids
function boardGrid(x,y){
	this.x=x;
	this.y=y;
	this.top=20+(20+125)*x;
	this.left=20+(20+125)*y;
    this.grid=null;
	this.state=0;
}

//abandoned
/*
boardGrid.prototype.receiveNumber=function(numberGrid){
	this.grid=numberGrid;
}
*/



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
			this.map[i][j].div.innerHTML="x:"+this.map[i][j].x+"y:"+this.map[i][j].y+"   i:"+i+"  j:"+j;
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
//add number to board
board.prototype.addNumberGrid=function(newNumber)
{
	newNumber.div=document.createElement("div");
	newNumber.div.className="numberGrid";
	newNumber.div.style.top=20+(20+125)*newNumber.x+"px";
	newNumber.div.style.left=20+(20+125)*newNumber.y+"px";
	newNumber.div.innerHTML=newNumber.number;
	
	// set the number to the grid and set its state "occupied(1)";
	this.map[newNumber.x][newNumber.y].grid=newNumber;
	this.map[newNumber.x][newNumber.y].state=1;
	this.div.appendChild(newNumber.div);
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
//moveup key 38 pressed
board.prototype.moveUp=function()
{
	var map=this.map;
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++)
		{
			if(map[i][j].grid&&map[i+1][j].grid)
			{
				if(map[i][j].grid.number==map[i+1][j].grid.number)
			    {
				    //this.merge(map[i][j].grid.number,map[i+1][j].grid.number);
			    }
			}
		}
	}
	this.resetLayOutUp();
}
board.prototype.resetLayOutUp=function()
{
	map=this.map;
	var moveableNumber;
	
	for(var j=0;j<4;j++){
	    for(var i=0;i<3;i++)
	    {
             if(map[i][j].state==0)
			 {
				 alert("i:"+i+" j:"+j);
                 for(var k=i+1;k<4;k++)
                 {
					 alert(k);
					 if(map[k][j].state==1)
					 {
						 alert("k:"+k+"j:"+j);
						 moveableNumber=map[k][j];
						 break;
					 }
						 
				 }					 
			 }
			 if(moveableNumber)
			 {
				 moveableNumber.grid.x=i;
				 moveableNumber.grid.y=j;
				 
			     map[i][j].grid=moveableNumber.grid;
			     map[i][j].state=1;
			         
			     //reset map state
			     moveableNumber.grid=null;
			     moveableNumber.state==0;
			     	 
			     //put div to new position;
			     map[i][j].grid.div.style.top=map[i][j].top+"px";
			     map[i][j].grid.div.style.left=map[i][j].left+"px";
			 }				 
		}
			
	}
}
//merge map2 to map1 then delete map2
/*
board.prototype.merge=function(map1,map2)
{
	$(map2.div).animate(
	    {left:map1.div.style.left,
		 top:map1.div.style.top},
	);
	map1.grid.number+=map2.grid.number;
}
*/



