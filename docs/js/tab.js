$(function(){
  //#tab1以外非表示にする。
  $('#contents div[id !="tab1"]').hide();

  //タブをクリック
  $("a").on("click",function(){
    //クリック時の処理
    $("#contents div").hide();

    $($(this).attr("href")).show();

    $(".current").removeClass("current");

    $(this).addClass("current");

    return false;
  });
});
