



document.addEventListener('DOMContentLoaded',function(){

    let IconoMenu = document.getElementById('Icono');
    let Menu = document.querySelector('.Menu'); // Selecciona el primer elemento con la clase 'Menu'

   

    IconoMenu.addEventListener('click', function() {
        if (Menu.style.display === 'flex') {
            Menu.style.display = 'none';
        } 
        
        else {
            Menu.style.display = 'flex';
            Menu.style.flexDirection= 'row'
        }
        });
})



const searchInput = document.getElementById('Filtrar')
const list = document.getElementById('lista').getElementsByTagName('li')


searchInput.addEventListener('input',function(){
        const filtrar = searchInput.value.toUpperCase();
        for (let i=0;i<list.length; i++){
            const item = list[i];
            const textValue = item.textContent || item.innerText;
            if(textValue.toUpperCase().indexOf(filtrar)>-1){
                item.style.display = '';

            }else{
                item.style.display='none';
            }

        
        }
})




// Obtener el modal de reseñas
var modal = document.getElementById('reviewModal');

// Obtener el botón que abre el modal de reseñas
var reviewButtons = document.querySelectorAll(".reviewButton");

// Obtener el span de cierre del modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón de reseña, abrir el modal
reviewButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        modal.style.display = "block";
    });
});

// Cuando se hace clic en el span de cierre, cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Cuando se hace clic en el botón de enviar reseña
document.getElementById('submitReview').onclick = function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;

    // Aquí puedes añadir la lógica para enviar la reseña, por ejemplo, enviarla a un servidor, guardarla en localStorage, etc.

    // Cerrar el modal después de enviar la reseña
    modal.style.display = "none";

    // Mostrar mensaje de confirmación (prompt)
    var confirmation = confirm("¡Reseña enviada con éxito! ¿Quieres realizar otra reseña?");
    if (confirmation) {
        modal.style.display = "block"; // Mostrar de nuevo el modal para realizar otra reseña
        // Puedes limpiar los campos del modal si es necesario
        document.getElementById('rating').value = '1';
        document.getElementById('comment').value = '';
       

    } else {
        // Aquí puedes redirigir a otra página o realizar otra acción
        console.log("No se realizará otra reseña.");
    }
}













