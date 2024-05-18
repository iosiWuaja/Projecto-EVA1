var modal = document.getElementById("Modal");
var btn = document.getElementById("registrar-btn");
var span = document.getElementsByClassName("close")[0];
let conteo = 0;

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const añadir = () => {
    conteo++;
}

const actValor = () => {
    document.getElementById('conteo').innerText = conteo;
};

const añadirBtns = document.getElementsByClassName('añadir');
Array.from(añadirBtns).forEach(btn => {
    btn.addEventListener('click', (event) =>{
        añadir();
        actValor();
    });
});