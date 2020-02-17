var html = '';
var rgbColor;

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    var color = 'rgb(';
    color += getRandomNumber() + ',';
    color += getRandomNumber() + ',';
    color += getRandomNumber() + ')';
    return color;
}

function displayResults(html) {
    document.write(html);
}

for (var i = 0; i < 10; i++) {
    rgbColor = randomColor();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

displayResults(html);