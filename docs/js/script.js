var TableClass = function(){
  this.clicknumber = 1;
};
TableClass.prototype.addClick = function(){
  this.clicknumber++;
};
TableClass.prototype.setColor = function(classtarget){
  switch (this.clicknumber%4) {
    case 0:
      $("."+classtarget).css("background","#fff");
      break;
    case 1:
      $("."+classtarget).css("background","#ccc");
      break;
    case 2:
      $("."+classtarget).css("background","#666");
      break;
    case 3:
      $("."+classtarget).css("background","#000");
      break;
    default:
      $("."+classtarget).css("background","#fff");
      break;
  }
};
var tableclass = Array();
$(function(){
  $("td").click(function()
  {
    var target = "target" + $(this).parent().index() + "-" + $(this).index();
    var index = $(this).index() + $(this).parent().index() * $(this).parent().children().length;
    //alert(target);
    $(this).addClass(target);
    //NULLを返したらクラスを生成する。
    if(tableclass[index] == null){
      tableclass[index] = new TableClass();
      tableclass[index].setColor(target);
    }else{
      //alert($(this).parent().children().length);
      tableclass[index].addClick();
      tableclass[index].setColor(target);
    }
  }
  );
});
