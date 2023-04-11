var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0,2 * Math.PI);
    pincel.fill();
}

function desenhaFlor(x, y) {
    desenhaCirculo(x, y + 20, 10, "blue");
    desenhaCirculo(x, y, 10, "red");
    desenhaCirculo(x, y - 20, 10, "yellow");
    desenhaCirculo(x - 20, y, 10, "orange");
    desenhaCirculo(x + 20, y, 10, "black");
}

desenhaFlor(300, 200);