$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});


var canvas = document.createElement("canvas");
canvas.width = 55;
canvas.height = 20;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);
var message = "Mensagem"; //Define a mensagem
ctx.font = '9pt Arial'; //Define Tamanho e fonte
ctx.fillStyle = 'black'; //Define a cor
ctx.fillText(message, positionY, positionX);

var c = document.getElementById("UgCanvas");
var ctx = c.getContext("2d");