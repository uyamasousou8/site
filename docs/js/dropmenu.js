document.addEventListener('DOMContentLoaded',function(){

  var navi = document.getElementById('navi');

  navi.addEventListener('mouseover',function(){
    console.log("test over");
    var opt = this.firstElementChild.firstElementChild.nextElementSibling;
    console.log(opt);
    opt.style.display = '';
  });
  navi.addEventListener('mouseout',function(){
    console.log("test out");
    var opt = this.firstElementChild.firstElementChild.nextElementSibling;
    console.log(opt);
    opt.style.display = 'none';
  });

});
