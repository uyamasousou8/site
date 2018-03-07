var fps = 30;
var canvas = null;
var ctx = null;
var x = 0;
var y = 0;
var gametime = 0;
var pressKeys =[];
var pbullet = [];
var enemy = [];
class PBullet{
  constructor(x,y){
    this.sizeX = 6;
    this.sizeY = 8;
    this.PBulletX = x - 6/2;
    this.PBulletY = y;
    this.PBulletSpeedX = 0;
    this.PBulletSpeedY = -6;
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.fillRect(this.PBulletX,this.PBulletY,this.sizeX,this.sizeY);
    ctx.fill();
    ctx.closePath();
  }
  move()
  {
    this.PBulletX += this.PBulletSpeedX;
    this.PBulletY += this.PBulletSpeedY;
  }
  getX(){
    return this.PBulletX;
  }
  getY(){
    return this.PBulletY;
  }
}
class Enemy{
  constructor(x,y){
    this.radius = 10;
    this.EnemyX = x;
    this.EnemyY = y;
    var Speedrandom = -1;
    if(Math.floor(Math.random()*201)%2 == 0)
    {
      Speedrandom = 1;
    }
    this.EnemySpeedX = Speedrandom * Math.floor(Math.random()*11);
    this.EnemySpeedY = 3 + Math.floor(Math.random()*5);
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = "#00FF00";
    ctx.arc(this.EnemyX,this.EnemyY,this.radius,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
  }
  move()
  {
    this.EnemyX += this.EnemySpeedX;
    this.EnemyY += this.EnemySpeedY;
  }
  getX(){
    return this.EnemyX;
  }
  getY(){
    return this.EnemyY;
  }
}
class Player{
  constructor(x,y){
    this.PlayerX = x;
    this.PlayerY = y;
    this.PlayerSpeedX = 3;
    this.PlayerSpeedY = 3;
    this.radius = 10;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.PlayerX,this.PlayerY,this.radius,0,Math.PI*2,false);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }
  move(){
    if(pressKeys[0])
    {
      if(this.PlayerX >= -5){
        this.PlayerX-=this.PlayerSpeedX;
      }
    }
    if(pressKeys[1])
    {
      if(this.PlayerY >= -5){
        this.PlayerY-=this.PlayerSpeedY;
      }
    }
    if(pressKeys[2])
    {
      if(this.PlayerX < ctx.width + 5)
      {
        this.PlayerX+=this.PlayerSpeedX;
      }
    }
    if(pressKeys[3])
    {
      if(this.PlayerY < ctx.height + 5)
      {
        this.PlayerY+=this.PlayerSpeedY;
      }
    }
    if(pressKeys[4] && gametime%6==0)
    {
      for(var i=0;i<256;i++){
        if(pbullet[i] == null){
          pbullet[i] = new PBullet(this.PlayerX,this.PlayerY);
          break;
        }
      }
    }
  }

}
var player = new Player(160,450);
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
  gametime++;
  //敵の生成
  if(gametime%10 === 1){
    for(var i=0;i<256;i++){
      if(enemy[i] == null){
        enemy[i] = new Enemy(Math.floor(Math.random()*ctx.width),0 + 5);
        break;
      }
    }
  }

  ctx.clearRect(0,0,ctx.width,ctx.height);
  player.move();
  for(var i = 0;i<256;i++){
    //そもそも弾が存在しなければ飛ばす
    if(pbullet[i] == null){
      continue;
    }
    else {
      pbullet[i].move();
      //画面外に弾が出たら消去する。
      if(pbullet[i].getX()<0 || pbullet[i].getX()>ctx.width || pbullet[i].getY() < 0 || pbullet[i].getY() > ctx.heights)
      {
        pbullet[i] = null;
      }
    }
  }
  for(var i = 0;i<256;i++){
    //そもそもエネミーが存在していなければ飛ばす
    if(enemy[i] == null){
      continue;
    }
    else {
      enemy[i].move();
      //敵が画面外に出たら消去する
      if(enemy[i].getX()<0 || enemy[i].getX()>ctx.width || enemy[i].getY() < 0 || enemy[i].getY() > ctx.heights)
      {
        enemy[i] = null;
      }
    }
  }
};
var draw = function(){
  player.draw();
  for(var i = 0;i<256;i++){
    if(pbullet[i] == null){
      continue;
    }
    else {
      pbullet[i].draw();
    }
  }
  for(var i = 0;i<256;i++){
    if(enemy[i] == null){
      continue;
    }
    else {
      enemy[i].draw();
    }
  }
};
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
  if(ck === 32)
  {
    pressKeys[4] = true;
  }//スペースキー
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
  if(ck === 32)
  {
    pressKeys[4] = false;
  }//スペースキー
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
