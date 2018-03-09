var fps = 30;
var canvas = null;
var ctx = null;
var x = 0;
var y = 0;
var gamescene = 0;
var gametime = 0;
var pressKeys =[];
var pbullet = [];
var ebullet = [];
var enemy = [];
var effect = [];
var score = 0;
class Effect {
  constructor(x,y) {
    this.radius = Math.floor(Math.random()*10);
    this.EffectX = x;
    this.EffectY = y;
    var SpeedrandomX = -1;
    var SpeedrandomY = -1;
    if(Math.floor(Math.random()*201)%2 == 0)
    {
      SpeedrandomX = 1;
    }
    this.EffectSpeedX = SpeedrandomX * Math.floor(Math.random()*11);
    if(Math.floor(Math.random()*201)%2 == 0)
    {
      SpeedrandomY = 1;
    }
    this.EffectSpeedY = SpeedrandomY + Math.floor(Math.random()*11);
    this.flag = 1;
    this.lifetime = Math.floor(Math.random()*10);
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = "#fff0ff";
    ctx.arc(this.EffectX,this.EffectY,this.radius,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
  }
  move()
  {
    this.EffectX += this.EffectSpeedX;
    this.EffectY += this.EffectSpeedY;
    this.lifetime--;
  }
  getlife()
  {
    return this.lifetime;
  }
}
class PBullet{
  constructor(x,y){
    this.sizeX = 8;
    this.sizeY = 8;
    this.PBulletX = x - 6/2;
    this.PBulletY = y;
    this.PBulletSpeedX = 0;
    this.PBulletSpeedY = -6;
    this.radius = 8;
    this.flag = 1;
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
  getradius()
  {
    return this.radius;
  }
  setflag(Flag)
  {
    this.flag = Flag;
  }
  getflag()
  {
    return this.flag;
  }
}
class EBullet{
  constructor(x,y,px,py){

    this.EBulletX = x;
    this.EBulletY = y;
    //角度を考える。
    var sbx,sby,sb;
    sbx = px - x;
    sby = py - y;
    sb = Math.sqrt(sbx*sbx + sby*sby);
    this.EBulletSpeedX = sbx / sb * 8;
    this.EBulletSpeedY = sby / sb * 8;
    this.radius = 4;
    this.flag = 1;
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = "#0ff0ff";
    ctx.arc(this.EBulletX,this.EBulletY,this.radius,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
  }
  move()
  {
    this.EBulletX += this.EBulletSpeedX;
    this.EBulletY += this.EBulletSpeedY;
  }
  getX(){
    return this.EBulletX;
  }
  getY(){
    return this.EBulletY;
  }
  getradius()
  {
    return this.radius;
  }
  setflag(Flag)
  {
    this.flag = Flag;
  }
  getflag()
  {
    return this.flag;
  }
}
class Player{
  constructor(x,y){
    this.PlayerX = x;
    this.PlayerY = y;
    this.PlayerSpeedX = 6;
    this.PlayerSpeedY = 6;
    this.radius = 10;
    this.flag = 1;
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
  getX(){
    return this.PlayerX;
  }
  getY(){
    return this.PlayerY;
  }
  getradius()
  {
    return this.radius;
  }
  setflag(Flag)
  {
    this.flag = Flag;
  }
  getflag()
  {
    return this.flag;
  }

}
var player = new Player(160,450);
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
    this.flag = 1;
    this.gettime = 0;

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
    this.gettime++;
    if(this.gettime%40==10){
      for(var i = 0;i < 256;i++){
        if(ebullet[i] == null){
          ebullet[i] = new EBullet(this.EnemyX,this.EnemyY,player.getX(),player.getY());
          break;
        }
      }
    }
  }
  getX(){
    return this.EnemyX;
  }
  getY(){
    return this.EnemyY;
  }
  getradius()
  {
    return this.radius;
  }
  setflag(Flag)
  {
    this.flag = Flag;
  }
  getflag()
  {
    return this.flag;
  }
}
var run = function()
{
  var _run = function()
  {

    if(gamescene == 1){
      update();
      draw();
    }
    else {
      ctx.beginPath();
      ctx.font = "28px serif"
      ctx.fillStyle= "#fff";
      ctx.fillText("GameOver",104,240);
      ctx.fill();
      ctx.closePath();
    }

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
      if(pbullet[i].getX()<0 || pbullet[i].getX()>ctx.width || pbullet[i].getY() < 0 || pbullet[i].getY() > ctx.height)
      {
        pbullet[i] = null;
        continue;
      }
      //衝突判定
      for(var j=0;j<256;j++)
      {
        //敵が存在していなければ飛ばす
        if(enemy[j] == null){
          continue;
        }
        //敵が存在したら衝突判定を行う
        var distance = (pbullet[i].getX() - enemy[j].getX())*(pbullet[i].getX() - enemy[j].getX()) + (pbullet[i].getY() - enemy[j].getY())*(pbullet[i].getY() - enemy[j].getY());
        var radius = (pbullet[i].getradius() + enemy[j].getradius())*(pbullet[i].getradius() + enemy[j].getradius());
        if(distance < radius){
          //中心点同士の距離が半径の合計の二乗より小さければ衝突している。
          //即座に消去する。
          pbullet[i].setflag(0);
          //パーティクルを作成する。
          var k = 0;
          while(k<10){
            for(var t = 0;t<512;t++){
              if(effect[t]!=null){
                continue;
              }
              else if(effect[t]==null){
                effect[t] = new Effect(enemy[j].getX(),enemy[j].getY());
                break;
              }
            }
            k++;
          }
          score += 100;
          //敵の消去フラグ
          enemy[j].setflag(0);
        }
      }
      if(pbullet[i].getflag() == 0){
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
      if(enemy[i].getflag() == 0)
      {
        enemy[i] = null;
        continue;
      }
      enemy[i].move();
      //プレイヤーとの衝突判定
      var distance = (player.getX() - enemy[i].getX())*(player.getX() - enemy[i].getX()) + (player.getY() - enemy[i].getY())*(player.getY() - enemy[i].getY());
      var radius = (player.getradius() + enemy[i].getradius())*(player.getradius() + enemy[i].getradius());
      if(distance < radius){
        //衝突していたらゲームオーバー
        gamescene = 2;
      }
      //敵が画面外に出たら消去する
      if(enemy[i].getX()<0 || enemy[i].getX()>ctx.width || enemy[i].getY() < 0 || enemy[i].getY() > ctx.height)
      {
        enemy[i] = null;
      }
    }
  }
  for(var i = 0;i<256;i++){
    //そもそも弾が存在しなければ飛ばす
    if(ebullet[i] == null){
      continue;
    }
    ebullet[i].move();
    //画面外に弾が出たら消去する。
    if(ebullet[i].getX()<0 || ebullet[i].getX()>ctx.width || ebullet[i].getY() < 0 || ebullet[i].getY() > ctx.height)
    {
      ebullet[i] = null;
      continue;
    }
    //衝突判定
    var distance = (player.getX() - ebullet[i].getX())*(player.getX() - ebullet[i].getX()) + (player.getY() - ebullet[i].getY())*(player.getY() - ebullet[i].getY());
    var radius = (player.getradius() + ebullet[i].getradius())*(player.getradius() + ebullet[i].getradius());
    if(distance < radius){
      //衝突していたらゲームオーバー
      gamescene = 2;
    }
  }
  for(var i = 0;i<512;i++){
    //そもそもパーティクルが存在していなければ飛ばす
    if(effect[i] == null){
      continue;
    }
    else {
      effect[i].move();
      //敵が画面外に出たら消去する
      if(effect[i].getlife() < 0){
        effect[i] = null;
      }
    }
  }
};
var draw = function(){
  //スコアの表示
  ctx.beginPath();
  ctx.font = "14px serif"
  ctx.fillStyle= "#fff";
  ctx.fillText("Score:"+score,0,10);
  ctx.fill();
  ctx.closePath();

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
    if(ebullet[i] == null){
      continue;
    }
    else {
      ebullet[i].draw();
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
  for(var i = 0;i<256;i++){
    if(effect[i] == null){
      continue;
    }
    else {
      effect[i].draw();
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
  gamescene = 1;


  //キー入力のイベントを仕込んでおく。
  document.addEventListener('keydown',keyDown,false);
  document.addEventListener('keyup',keyUp,false);
};

document.addEventListener('DOMContentLoaded',function(){
//DOMが読み込み終わったら初期化

  //ゲームスタート領域をクリックしたらスタート
  var gamestart = document.getElementById("GameStart");
  var shooting = document.getElementById("shooting");
  gamestart.addEventListener('click',function(){
    gamestart.style.display = "none";
    shooting.style.display = "block";
    Init();
    run();
  });
});
