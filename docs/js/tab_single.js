document.addEventListener('DOMContentLoaded',function(){

  var tab = [];
  var tabbutton = [];
  var tabparent = document.getElementById("tab");
  var i = 0;
  for(i=0;i<4;i++){
    tabbutton[i] = document.getElementById("tabbutton"+(i+1));
    tab[i] = document.getElementById("tab"+(i+1));
    //console.log("tab"+(i+1));
    if(i!=0){
      tab[i].style.display = "none";
    }
  }
  //tabbutton[1] = document.getElementById("tabbutton2");
  //tabbutton[2] = document.getElementById("tabbutton3");
  //tabbutton[3] = document.getElementById("tabbutton4");
  //tab[1].style.display = "none";
  //tab[2].style.display = "none";
  //tab[3].style.display = "none";
  tabbutton[0].addEventListener('click',function(){
  if(!this.classList.contains('current'))
  {
    for(var j = 0;j<4;j++){
      if(j != 0){
          tab[j].style.display = 'none';
        }
      tab[0].style.display = '';
      }
      var opts = tabparent.childNodes;
      for(var i=0,len = opts.length;i<len;i++)
      {
        var opt = opts.item(i);
        if(opt.nodeType === 1)
        {
          if(opt.childNodes.item(0).classList.contains('current'))
          {
            opt.childNodes.item(0).classList.remove('current');
          }
        }
      }
      this.classList.add('current');
  }
  });
  tabbutton[1].addEventListener('click',function(){
  if(!this.classList.contains('current'))
  {
    for(var j = 0;j<4;j++){
      if(j != 1){
          tab[j].style.display = 'none';
        }
      tab[1].style.display = '';
      }
      var opts = tabparent.childNodes;
      for(var i=0,len = opts.length;i<len;i++)
      {
        var opt = opts.item(i);
        if(opt.nodeType === 1)
        {
          if(opt.childNodes.item(0).classList.contains('current'))
          {
            opt.childNodes.item(0).classList.remove('current');
          }
        }
      }
      this.classList.add('current');
  }
  });
  tabbutton[2].addEventListener('click',function(){
  if(!this.classList.contains('current'))
  {
    for(var j = 0;j<4;j++){
      if(j != 2){
          tab[j].style.display = 'none';
        }
      tab[2].style.display = '';
      }
      var opts = tabparent.childNodes;
      for(var i=0,len = opts.length;i<len;i++)
      {
        var opt = opts.item(i);
        if(opt.nodeType === 1)
        {
          if(opt.childNodes.item(0).classList.contains('current'))
          {
            opt.childNodes.item(0).classList.remove('current');
          }
        }
      }
      this.classList.add('current');
  }
  });
  tabbutton[3].addEventListener('click',function(){
  if(!this.classList.contains('current'))
  {
    for(var j = 0;j<4;j++){
      if(j != 3){
          tab[j].style.display = 'none';
        }
      tab[3].style.display = '';
      }
      var opts = tabparent.childNodes;
      for(var i=0,len = opts.length;i<len;i++)
      {
        var opt = opts.item(i);
        if(opt.nodeType === 1)
        {
          if(opt.childNodes.item(0).classList.contains('current'))
          {
            opt.childNodes.item(0).classList.remove('current');
          }
        }
      }
      this.classList.add('current');
  }
  });
});
