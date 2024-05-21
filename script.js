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

/*formurlario contacto */




function validarFormulario(){
 
  $('.alert').remove();


  // declarion de variables
  var nombre=$('#nombre').val(),
      correo=$('#correo').val(),
      asunto=$('#asunto').val(),
      mensaje=$('#mensaje').val();

  // validamos el campo nombre
  if(nombre=="" || nombre==null){

      cambiarColor("nombre");
      // mostramos le mensaje de alerta
      mostraAlerta("Ingresa nombre");
      return false;
  }else{
      var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
      if(!expresion.test(nombre)){
          // mostrara el mesaje que debe ingresar un nombre válido
          cambiarColor("nombre");
          mostraAlerta("No se permiten carateres especiales o numeros");
          return false;
      }
  }

  // validamos el correo
  if(correo=="" || correo==null){

      cambiarColor("correo");
      // mostramos le mensaje de alerta
      mostraAlerta("Ingresa correo electronico");
      return false;
  }else{
      var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if(!expresion.test(correo)){
          // mostrara el mesaje que debe ingresar un nombre válido
          cambiarColor("correo");
          mostraAlerta("Por favor ingrese un correo válido");
          return false;
      }
  }

  // validamos el asunto
  if(asunto=="" || asunto==null){

      cambiarColor("asunto");
      // mostramos le mensaje de alerta
      mostraAlerta("Asunto vacío");
      return false;
  }else{
      var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
      if(!expresion.test(asunto)){
          // mostrara el mesaje que debe ingresar un nombre válido
          cambiarColor("asunto");
          mostraAlerta("No se permiten caracteres especiales");
          return false;
      }
  }

   // validamos el mensaje
   if(mensaje=="" || mensaje==null){

      cambiarColor("mensaje");
      // mostramos le mensaje de alerta
      mostraAlerta("No puede quedar mensaje vacío");
      return false;
  }else{
      var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
      if(!expresion.test(mensaje)){
          // mostrara el mesaje que debe ingresar un nombre válido
          cambiarColor("mensaje");
          mostraAlerta("No se permiten caracteres especiales");
          return false;
      }
  }

  $('form').submit();
  return true;
  
} 

$('input').focus(function(){
  $('.alert').remove();
  colorDefault('nombre');
  colorDefault('correo');
  colorDefault('asunto');
});

$('textarea').focus(function(){
  $('.alert').remove();
  colorDefault('mensaje');
});


function colorDefault(dato){
  $('#' + dato).css({
      border: "1px solid #999"
  });
}

function cambiarColor(dato){
  $('#' + dato).css({
      border: "1px solid #dd5144"
  });
}


function mostraAlerta(texto){
  $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}


/*Formulario REGISTRO */

$(document).ready(function() {
  $('#registro-form').submit(function(e) {
      e.preventDefault(); 

     
      var nombres = $('#nombres').val();
      var apellidos = $('#apellidos').val();
      var correo = $('#correo').val();
      var contrasena = $('#contrasena').val();
      var acuerdo = $('#confirm').prop('checked');

      // Validar campos
      if (nombres.trim() === '') {
          alert('Por favor, ingrese su nombre.');
          return;
      }

      if (apellidos.trim() === '') {
          alert('Por favor, ingrese su apellido.');
          return;
      }

      if (correo.trim() === '') {
          alert('Por favor, ingrese su correo electrónico.');
          return;
      }

      if (contrasena.trim() === '') {
          alert('Por favor, ingrese su contraseña.');
          return;
      }

      if (!acuerdo) {
          alert('Por favor, acepte los términos y condiciones.');
          return;
      }

      
      $('#Modal').show();
  });

  
  $('.close').click(function() {
      $('#Modal').hide();
  });
});
