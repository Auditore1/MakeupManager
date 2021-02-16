
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });
//acima é  botão flutuante Materializze.css :v não sei se vou deixar neh mas dx ae
function addback(foto){
  document.getElementById("mold").style.backgroundImage = "URL("+foto+")";
}


  //abaixo é a animação
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  
  }
  function setfilho(){
  const quadro = document.querySelector("ul.ula");	
  
  for (let i = 0; i < 20; i++){
           const li = document.createElement("li");
           //const random = (min,max) => Math.random()*(max - min) + min;
           const size = Math.floor(Math.random() * (120 - 10) ) + 10;;
           const position = Math.random()*(60 - 20) + 20;
           li.style.width = size+'px';
           li.style.height = size+'px';
           li.style.bottom = '-10000';
           li.style.left = position+'%';
           li.style.opacity = Math.random() * (0.2 - 0.1)+0.1;
           li.style.animationDelay = getRandomInt(1,5)+'s';
           li.style.animationDuration = getRandomInt(10, 60)+'s';
           li.style.borderRadius = "50%";
          li.style.backgroundImage = "URL(img/sl/AndyCL"+getRandomInt(1,7)+".png)";
          li.style.backgroundSize = "cover";
           li.style.animationTimingFunction = 'cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})';
           quadro.appendChild(li);
  }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var insts = M.Sidenav.init(elems,{
      inDuration: 1500,
      edge: 'left',
      outDuration:1000,
      preventScrolling: false
    });
  });
  document.addEventListener("DOMContentLoaded", setfilho);
  document.addEventListener("DOMContentLoaded",resetimg);
 function resetimg(){
    // img/sl/name.tipo
    img = document.getElementById("imgsl");
    img.style.backgroundImage = "URL(img/sl/AndyCL"+getRandomInt(1,7)+".png)";
    setTimeout(resetimg, 5000)
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems,{
      inDuration:1000,
      outDuration:500
    });
  });