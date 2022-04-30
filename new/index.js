var nome = "Gabriel dos Santos Pereira"
var arr = []


for(let i = nome.length; i > 0; i--){
    arr.push(nome[i-1])
}

var nomeInvertido = ""


for (let i = 0; i < arr.length; i++) {
    nomeInvertido += arr[i]
}

console.log(nomeInvertido)

