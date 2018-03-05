document.addEventListener('DOMContentLoaded',function(){

  var menubutton = document.getElementById('menubutton');
  var list = document.getElementById('menu');
  var listdata = document.querySelectorAll('#menu li');
  var pushflag = false;

  menubutton.addEventListener('click',function(){
    //console.log("push");
    if(!pushflag){
      list.classList.remove("menuhide");
      for(var i=0,len = listdata.length;i<len;i++){
        console.log("tes");
        listdata.item(i).classList.remove("animetion")
      }
      pushflag = true;
    }
    else{
      list.classList.add("menuhide");
      pushflag = false;
      for(var i=0,len = listdata.length;i<len;i++){
        console.log("tes");
        listdata.item(i).classList.add("animetion")
      }
    }
  });

});
