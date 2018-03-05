var fps = 30;
var canvas = null;
var ctx = null;
var x = 0;
var y = 0;
var pressKeys =[];
var run = function()
{
  var _run = function()
  {
    update();
    draw();

    setTimeout(_run,1000.0/fps);
  };
  setTimeout(_run,1000.0/fps);
};
var update = function(){
  //内部処理
  ctx.clearRect(0,0,ctx.width,ctx.height);
  movePlayer();
};
var draw = function(){
  ctx.beginPath();
  ctx.rect(x,y,50,50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
};
var movePlayer = function()
{
  if(pressKeys[0])
  {
    x--;
  }
  if(pressKeys[1])
  {
    y--;
  }
  if(pressKeys[2])
  {
    x++;
  }
  if(pressKeys[3])
  {
    y++;
  }
}
var keyDown = function(e){
  var ck = e.keyCode;

  if(ck === 37){
    //x--;
    pressKeys[0] = true;
  } //左キー
  if(ck === 38){
    //y--;
    pressKeys[1] = true;
  } //上キー
  if(ck === 39){
    //x++;
    pressKeys[2] = true;
  } //右キー
  if(ck === 40){
    //y++;
    pressKeys[3] = true;
  } //下キー
};
var keyUp = function(e){
  var ck = e.keyCode;

  if(ck === 37){
    //x--;
    pressKeys[0] = false;
  } //左キー
  if(ck === 38){
    //y--;
    pressKeys[1] = false;
  } //上キー
  if(ck === 39){
    //x++;
    pressKeys[2] = false;
  } //右キー
  if(ck === 40){
    //y++;
    pressKeys[3] = false;
  } //下キー
};
var Init = function(){
  canvas = document.getElementById("shooting");
  ctx = canvas.getContext("2d");
  ctx.width = 320;
  ctx.height = 480;

  //キー入力のイベントを仕込んでおく。
  document.addEventListener('keydown',keyDown,false);
  document.addEventListener('keyup',keyUp,false);
};

document.addEventListener('DOMContentLoaded',function(){
//DOMが読み込み終わったら初期化
  Init();
  run();
});
