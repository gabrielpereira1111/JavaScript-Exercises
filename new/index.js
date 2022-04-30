var nome = "vaca"
var arr = []


for(let i = 3; i >= 0; i--){
    arr.push(nome[i])
}

var nomeInvertido = ""

for (let i = 0; i < 4; i++) {
    nomeInvertido += arr[i]
}

console.log(nomeInvertido)

