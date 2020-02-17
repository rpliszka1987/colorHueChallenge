var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRandomNumber() {
    var number = Math.floor(Math.random() * 256);
    return number;
}

for (var i = 0; i < 10; i++) {
    red = getRandomNumber();
    green = getRandomNumber();
    blue = getRandomNumber();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);