var audio = new Audio('GENERATOR 20000Hz.wav')
var now

function pressed() {
    now = new Date
    audio.play()
    document.getElementById('time').innerHTML = now.getSeconds() + now.getMilliseconds() / 1000
    setTimeout(pause, 100)
}

function pause() {
    audio.pause()
}