



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






// Obtener el modal
var modal = document.getElementById("reviewModal");

// Obtener el botón que abre el modal
var reviewButtons = document.querySelectorAll(".reviewButton");

// Obtener el <span> que cierra el modal
var closeButton = modal.querySelector(".close");

// Cuando el usuario haga clic en el botón, abrir el modal
reviewButtons.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";
    }
});

// Cuando el usuario haga clic en <span> (x), cerrar el modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Manejar el envío de la reseña
document.getElementById("submitReview").onclick = function() {
    var rating = document.getElementById("rating").value;
    var comment = document.getElementById("comment").value;
    console.log("Puntuación: " + rating);
    console.log("Comentario: " + comment);
    
    // Cerrar el modal
    modal.style.display = "none";
    
    // Mostrar mensaje de confirmación
    var confirmMessage = "¡Reseña enviada correctamente!";
    window.confirm(confirmMessage);
}












