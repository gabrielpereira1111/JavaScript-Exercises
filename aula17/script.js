var pessoa = {
    nome: "José",
    altura: 180,
    peso: 84,
    engordar(p=0){
        return this.peso+=p
    }
}
console.log(pessoa.engordar(2))