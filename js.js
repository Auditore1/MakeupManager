
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
           const size = Math.floor(Math.random() * (90 - 10) ) + 10;;
           const position = Math.random()*(70 - 1) + 1;
           li.style.width = size+'px';
           li.style.height = size+'px';
           li.style.bottom = '-10000';
           li.style.left = position+'%';
           li.style.opacity = Math.random() * (0.2 - 0.1)+0.1;
           li.style.animationDelay = getRandomInt(5,30)+'s';
           li.style.animationDuration = getRandomInt(20, 60)+'s';
           li.style.borderRadius = "50%";
          li.style.backgroundImage = "URL(img/sl/AndyCL"+getRandomInt(1,7)+".png)";
          li.style.backgroundSize = "cover";
           li.style.animationTimingFunction = 'cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})';
           quadro.appendChild(li);
  }
  }
  document.addEventListener("DOMContentLoaded", setfilho);
  document.addEventListener("DOMContentLoaded",resetimg);
 function resetimg(){
    // img/sl/name.tipo
    img = document.getElementById("imgsl");
    img.style.backgroundImage = "URL(img/sl/AndyCL"+getRandomInt(1,7)+".png)";
    setTimeout(resetimg, 5000)
  }