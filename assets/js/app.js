$(document).ready(function (){
	$('.modal').modal();

/*hacer funcionar el boton..*/
$('#add').click(function(){
/*Evento click ejecutara el guardado de las variables
*name
*phone
*email
*/
var name = $('.name').val();
	$('.name').val('');

var phone = $('.phone').val();
     $('.phone').val('');

var email = $('#email').val();
    $('#email').val();
    
    /* Guardo en la variable contenedor el div vacío con id cont que está
    * en el html, donde se guardarán los contactos
    */
    var contenedor = $('#cont');
    /*
    * Le agrego al contenedor la estructura que necesito con el valor de
    * las variables name y phone
    */
    contenedor.append('<div class="container contacto"><ul class="collection"><li class="collection-item avatar"><h5>'+ name +'</h5><p>'+ phone +'</p><p>'+ email +'</p><a href="#!" class="secondary-content"><i class="material-icons basura">delete_forever</i></a></li></ul></div>');
    /*
    * Dejo la llamada hecha a la función que borra el contacto
    */
    deleteContact();
  })

})
});