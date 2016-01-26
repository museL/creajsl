var canvas;
var stage;
var gameView =new createjs.Container();
window.onload = function(){
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    gameView =new createjs.Container();
    stage.addChild(gameView);
    var bitmap=new createjs.Bitmap("9.jpg");
    gameView.addChild(bitmap);
    createjs.Ticker.setFPS(30);
     createjs.Ticker.addEventListener("tick",tick);
}
function tick(e){
	 stage.update();
}
