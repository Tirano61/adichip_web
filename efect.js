
window.onload = function(){
  document.querySelector(".area").style.height = "0";
  document.querySelector(".context").style.display = "none";
  var element = document.querySelector(".codepen");
  
  element.classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-0.7s');
}

var imgButton = document.getElementById("logo").onclick = cambiar;

function cambiar() {
  document.querySelector(".area").style.height = "100%";
  document.querySelector(".context").style.display = "flex";
  var element = document.querySelector(".fondo");
  element.style.setProperty('--animate-duration', '2s');
  element.classList.add('animate__animated', 'animate__fadeOut');

  element.addEventListener('animationend', () => {
    // do something
    document.getElementById("logo").style.display = "none";
    document.getElementById("cuadrado").style.display = "none";
  });
}

