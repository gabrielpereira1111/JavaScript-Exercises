
function load(){
    var message = document.querySelector("div#msg")
    var image = document.querySelector("img#imagem")
    hora = new Date().getHours();
    if(hora >= 13 && hora < 19){
        message.innerHTML = `Boa tarde! São ${hora} horas`
        image.src = "imgs/tarde.jpg"
        document.body.style.backgroundColor = "#E59448"
    } else if(hora >= 0 && hora < 13){
        message.innerHTML = `Boa dia! São ${hora} horas`
        image.src = "imgs/manha.jpg"
        document.body.style.backgroundColor = "#EDD487"
    } else {
        message.innerHTML = `Boa noite! São ${hora} horas`
        image.src = "imgs/noite.jpg"
        document.body.style.backgroundColor = "#573F61"
    }

}