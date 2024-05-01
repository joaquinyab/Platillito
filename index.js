document.addEventListener('DOMContentLoaded',function(){
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
})