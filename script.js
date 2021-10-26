var audio = new Audio('GENERATOR 20000Hz.wav')
var now

function pressed() {
    now = new Date
    audio.play()
    setTimeout(pause, 100);
    document.getElementById('time').innerHTML = now.getSeconds() + now.getMilliseconds() / 1000;
}

function pause() {
    audio.pause()
}