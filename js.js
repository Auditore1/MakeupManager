
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function setfilho(){
  const quadro = document.querySelector("ul.ula");	
  
  for (let i = 0; i < 50; i++){
           const li = document.createElement("li");
           //const random = (min,max) => Math.random()*(max - min) + min;
           const size = Math.floor(Math.random() * (90 - 10) ) + 10;;
           const position = Math.random()*(70 - 1) + 1;
           li.style.width = size+'px';
           li.style.height = size+'px';
           li.style.bottom = '-10000';
           li.style.left = position+'%';
           li.style.opacity = Math.random() * (0.9 - 0.4)+0.4;
           li.style.animationDelay = getRandomInt(10,200)+'s';
           li.style.animationDuration = getRandomInt(4, 30)+'s';
           li.style.animationTimingFunction = 'cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})';
           quadro.appendChild(li);
  }
  }
  document.addEventListener("DOMContentLoaded", setfilho);
