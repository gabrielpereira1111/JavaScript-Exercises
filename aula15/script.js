function soma(n1=0, n2=0) {
    return n1+n2
}
console.log(soma(2,8))
console.log()

function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(100))
console.log()

function parImpar(n){
    if(n%2==1){
        return "Ímpar"
    } else{
        return "Par"
    }
}
console.log(parImpar(8))