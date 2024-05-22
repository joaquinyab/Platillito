
document.addEventListener('DOMContentLoaded',function(){


   let IconoMenu = document.getElementById('Icono');
    let Menu = document.querySelector('.Menu'); // Selecciona el primer elemento con la clase 'Menu'

    IconoMenu.addEventListener('click', function() {
        if (Menu.style.display === 'flex') {
            Menu.style.display = 'none';
        } else {
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

