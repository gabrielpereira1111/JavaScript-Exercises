function verificar(){
    var anoNascimento = Number(document.getElementById("nascimento").value)
    var sex = document.getElementsByName("radsex")
    var res = document.getElementById("res")
    var ano = new Date().getFullYear()
    if(anoNascimento <= 0 || anoNascimento > ano){
        alert("[ERRO] Verifique novamente os dados inseridos")
    } else {
        var idade = ano - anoNascimento
        var genero;
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if(sex[0].checked){
            genero = "Masculino"
            if(idade > 0 && idade <= 10){
                img.setAttribute("src", "imgs/homem-crianca.jpg")
                img.setAttribute("width", "200px")
            } else if(idade > 10 && idade <= 25){
                img.setAttribute("src", "imgs/homem-jovem.jpg")
                img.setAttribute("width", "200px")
            } else if(idade > 25 && idade <= 60){
                img.setAttribute("src", "imgs/homem-adulto.jpg")
                img.setAttribute("width", "200px")
            } else if(idade > 60){
                img.setAttribute("src", "imgs/homem-idoso.jpg")
                img.setAttribute("width", "200px")
            }
        } else if(sex[1].checked){
            genero = "Feminino"
            if(idade > 0 && idade <= 10){
                img.setAttribute("src", "imgs/mulher-crianca.jpg")
                img.setAttribute("width", "200px")
            } else if(idade > 10 && idade <= 25){
                img.setAttribute("src", "imgs/mulher-jovem.jpg")
                img.setAttribute("width", "200px")
            } else if(idade > 25 && idade <= 60){
                img.setAttribute("src", "imgs/mulher-adulto.jpg")
                img.setAttribute("width", "200px")
            } else if(idade > 60){
                img.setAttribute("src", "imgs/mulher-idosa.jpg")
                img.setAttribute("width", "200px")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Nós detectamos sexo ${genero} e ${idade} anos <br>`
        res.appendChild(img)
    }
}