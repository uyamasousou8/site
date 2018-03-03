$(function(){
  //ボタンへのクリックイベント
  $("button").on("click",function(){
    //クリックしたときの処理
    //ulの要素を開閉
    $("ul").slideToggle(200);
  });
});
