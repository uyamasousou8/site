document.addEventListener('DOMContentLoaded',function(){
  var bg = document.getElementById('bg');
  var click = document.getElementById('click');
  var ok = document.getElementById('ok');

  bg.style.display = 'none';
  click.addEventListener('click',function(){
    bg.style.display = '';
  });
  ok.addEventListener('click',function(){
      bg.style.display = 'none';
  });
});
