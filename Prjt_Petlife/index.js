 var txtDuvida = document.querySelectorAll('.duvida')

 txtDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
 })