const calendar = document.getElementById ("calendar")
const data1 = document.getElementById ("data1")
const data2 = document.getElementById ("data2")
const enviar = document.getElementById ("enviar")
const itens = document.querySelectorAll ("td")

enviar.addEventListener('click', function(){
    for(let i = 0; i< itens.length; i++){
        if(itens[i].textContent == data1.value || itens[i].textContent == data2.value){
            itens[i].style.backgroundColor ="pink"
        }
    }
})

