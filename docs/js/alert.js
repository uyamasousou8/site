$(function(){

  //背景とアラーとボックスを非表示にする。
  $("#bg").hide();

  $("#click").on("click",function(){
    //背景とアラーとボックスをフェードインする。
    $("#bg").fadeIn(300);
  });
  $("#ok").on("click",function(){
    $("#bg").fadeOut(300);    
  });
});
