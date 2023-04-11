var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var paleta = document.querySelector("input");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);
var raio = 10;
var desenha = false;

function desenhaCirculo(evento) {
    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
    }
    if(evento.shiftKey && evento.altKey) {
        alert("Só aperte uma tecla por vez, por favor!!")
    } else if(evento.shiftKey && raio + 10 <= 40) {
        raio = raio + 10;
    } else if(evento.altKey && raio - 5 >= 10) {
        raio = raio -5;
    }
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
    
}

tela.onmousemove = desenhaCirculo;

function habilitaDesenhar() {
    desenha = true;
}

function desabilitaDesenhar() {
    desenha = false;
}

tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;

