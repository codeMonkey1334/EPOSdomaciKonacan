var doznovljeni = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
var konami = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var pozicija = 0;

document.addEventListener('keydown', function(e){
    var kljuc = doznovljeni[e.keyCode];
    var potrebanTetris = konami[pozicija];

    if(kljuc == potrebanTetris){
        pozicija++;
        if(pozicija == konami.length){
            window.alert("Znaš svoje Easet Egg-ove!");
            location.replace("https://tetris.com/play-tetris");
        }
    }
    else{
        pozicija = 0;
    }
});

var dozvoljeniSamurai = {
    87: 'w',
    65: 'a',
    75: 'k',
    69: 'e',
    32: ' ',
    85: 'u',
    80: 'p',
    83: 's',
    77: 'm',
    82: 'r',
    73: 'i'
};
var cyberpunk = ['w', 'a', 'k', 'e', ' ', 'u', 'p', ' ', 's','a','m','u','r','a','i'];
var punkpozicija = 0;

document.addEventListener('keydown', function(e){
    var kljuc = dozvoljeniSamurai[e.keyCode];
    var potreban = cyberpunk[punkpozicija];

    if(kljuc == potreban){
        punkpozicija++;
        if(punkpozicija == cyberpunk.length){
            window.alert("We've got a city to burn!");
            location.replace("https://www.youtube.com/watch?v=m1kYOo9UxBw");
        }
    }
    else{
        punkpozicija = 0;
    }
});