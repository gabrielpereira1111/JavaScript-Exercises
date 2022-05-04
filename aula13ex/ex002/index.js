function gerarTabuada(){
    var number = Number(document.querySelector('input#number').value)
    var select = document.querySelector("select#seltab")
    if(number != 0){
        select.innerHTML = ''
        for(let i = 0; i <= 10; i++){
            var option = document.createElement('option')
            option.text = `${number} * ${i} = ${number*i}`
            select.appendChild(option)
        }
    } else{
        alert("[ERRO] Digite um número!")
    }
}