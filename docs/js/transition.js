document.addEventListener('DOMContentLoaded',function(){

  var btn = document.getElementById("btn");
  var test2 = document.getElementById("test2");
  var test3 = document.getElementById("test3");

  btn.addEventListener('click',function(){

    test2.classList.add("colors");
    test3.classList.add("heights");
  });

});
