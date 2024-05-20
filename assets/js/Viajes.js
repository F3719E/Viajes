
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });

  $('[data-toggle="tooltip"]').on('click', function () {
    $(this).tooltip('hide')
  });
});

// BTN ENVIAR CORREO
$(document).ready(function () {
  $("#btnenviar").click(function () {
    alert("El correo fue enviado correctamente.");
  });
});

// $(document).ready(function () {
//   $("#tituloingredientes").on("dblclick", function () {
//     $("table#tablaingredientes td").css("color", "red");
//     $("table#tablaingredientes1 td").css("color", "red");

//   });
// });

// $(document).ready(function () {
//   $("#titulopreparacion").on("dblclick", function () {
//     $("table#tablapreparacion td").css("color", "red");

//   });
// });


// $(document).ready(function () {

//   $("#titulocard").click(function () {
//     $("#cartatexto1").toggle();
//     $("#cartatexto2").toggle();
//     $("#cartatexto3").toggle();
//   });
// });


// $("#nav ul li a[href^='#']").on('click', function(e) {

//   // prevent default anchor click behavior
//   e.preventDefault();

//   // store hash
//   var hash = this.hash;

//   // animate
//   $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 1000, function(){

//       // when done, add hash to url
//       // (default click behaviour)
//       window.location.hash = hash;
//     });

// });