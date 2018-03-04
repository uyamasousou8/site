document.addEventListener('DOMContentLoaded',function(){
  var bg = document.getElementById('bg');
  var add = document.getElementById('add');
  var ok = document.getElementById('ok');
  add.addEventListener('click',function(){
    bg.style.overflow = 'auto';
    bg.style.height = '100%';
    bg.classList.add('open');
  });
  ok.addEventListener('click',function(){
      //bg.style.display = 'none';
      bg.classList.remove('open');
      bg.style.overflow = 'hidden';
      bg.style.height = '0';
  });
});
