document.addEventListener('DOMContentLoaded',function(){

  var list =  document.getElementById("list");
  var mainGraph = document.getElementById("mainGraph");

  list.addEventListener('click',function(e){
    console.log("tes");
    var data_image = e.target.getAttribute('data-image');
    if(data_image){
      console.log("src:" + data_image)
      var img = document.createElement('img');
      img.src = '../img/' + data_image +'.jpg';
      img.alt = 'photo'
      img.height = 400;
      img.width = 600;
      console.log(img.src);
      mainGraph.replaceChild(img,mainGraph.lastChild);      
    }
  });

});
