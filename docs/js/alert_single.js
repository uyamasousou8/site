document.addEventListener('DOMContentLoaded',function(){
  var bg = document.getElementById('bg');
  var add = document.getElementById('add');
  var ok = document.getElementById('ok');

  //bg.style.display = 'none';
  add.addEventListener('click',function(){
    window.alert("tes");
  });
  ok.addEventListener('click',function(){
      //bg.style.display = 'none';
      bg.classList.remove('open');
  });
});
