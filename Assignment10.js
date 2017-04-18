var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext("2d");//use getContext method
Main.StandardColor = "#999999";
Main.HighlightColor = "#FF0000";
Main.MousePressed = false;
Main.MX = 0;
Main.MY = 0;

Main.Box = function(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;

	this.IsSelected = function()
	{
		if (!Main.MousePressed) return false;
		var withinXAxisCoordinates = Main.MX > this.X && Main.MX < (this.X + this.Width);
		var withinYAxisCoordinates = Main.MY > this.Y && Main.MY < (this.Y + this.Height);
		return withinXAxisCoordinates && withinYAxisCoordinates;
	}
}


Main.Canvas.onmousemove = function(event)
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.MX = mouseX;
	Main.MY = mouseY;
}

Main.MouseUp = function(mouseEvent)
{
	console.log("mouse up");
	Main.MousePressed = false;
	slide(1);
	

}

Main.MouseDown = function(mouseEvent)
{
	Main.MousePressed = true;//nothing happens when the mouse is clicked???

}

 var imagecount = 1;
 var total = 4;
  function slide(x){  
    var Image = document.getElementById('img');
    imagecount= imagecount + x;
    if(imagecount > total)
	  {
		imagecount = 1;
	  }
    if(imagecount < 1)
	  { 
		imagecount = total;
	  }
    Image.src = "img"+ imagecount + ".jpg";
    }


Main.Animate = function(){
	var canvas=document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img=document.getElementById("img");
	//var img2 = document.getElementById("img2");
	ctx.drawImage(img, 500, 500);
	console.log("animate is called")
	//requestAnimFrame(function() { Main.Animate(); });

}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();



$(document).ready(function(){

	//Main.Animate();
	//bcy();
	Main.Canvas.addEventListener('mouseup', function(mouseEvent) { Main.MouseUp(mouseEvent); });
	Main.Canvas.addEventListener('mousedown', function(mouseEvent) { Main.MouseDown(mouseEvent); });
});


window.onload = function() {
	console.log("I am here");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("img");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");
   ctx.drawImage(img, 10, 10, 200, 200);
   ctx.drawImage(img2, 265, 10,200,200);
   ctx.drawImage(img3, 515, 10,200,200);
   ctx.drawImage(img4, 765, 10,200,200);

   /*for(var i=1;  i<4; i++)
		{
		bcy(i);
		Main.Context.fillStyle = box.IsSelected() ? Main.HighlightColor : Main.StandardColor;
		//Main.Context.fillRect(box.X, box.Y, box.Width, box.Height);
	}*/
};
