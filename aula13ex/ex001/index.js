function contar(){
    var inicio = Number(document.querySelector("input#inicio").value)
    var fim = Number(document.querySelector("input#fim").value)
    var passo = Number(document.querySelector("input#passo").value)
    var res = document.getElementById("res")

    if(inicio == 0 || fim == 0 || passo == 0 || inicio > fim || passo > fim){
        alert("[ERRO] Dados incorretos")
    } else {
        res.innerHTML = ''
        for (let i = inicio; i <= fim; i+=passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
        res.innerHTML += '\u{1F3C1}'
    }
    
}