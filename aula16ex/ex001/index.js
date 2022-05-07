var arr = []
var res = document.querySelector("div#res")

function isNumber(num){
    if(num != 0 && (num > 0 && num <= 100)){
        return true
    } else {
        return false
    }
}
function inArray(num, array){
    if(array.indexOf(num) == -1){
        return false
    } else {
        return true
    }
}
function adicionar(){
    var number = Number(document.querySelector("input#number").value)
    var select = document.querySelector("select#numberList")
    
    if(isNumber(number) && !inArray(number, arr)){
        arr.push(number)
        let item = document.createElement("option")
        item.text = `O valor ${number} foi adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("[ERRO] Dados Inválidos")
    }
}

function finalizar(){
    if(arr.length == 0){
        alert("[ERRO] Adicione antes de finalizar")
    } else{
        res.innerHTML = `<p>Ao todo temos ${arr.length} valores</p>`
        let maior = arr[0];
        let menor = arr[0];
        let soma = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > maior){
                maior = arr[i]
            }
            if(arr[i] < maior){
                menor = arr[i]
            }

            soma += arr[i]
        }
    }
}

