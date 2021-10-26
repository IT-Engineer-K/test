var audio = new Audio('GENERATOR 20000Hz.wav')
var now
var seconds

function pressed() {
    now = new Date
    seconds = now.getSeconds() + now.getMilliseconds() / 1000
    audio.play()
    document.getElementById('time').innerHTML = seconds
    setTimeout(pause, 100)
}

function pause() {
    audio.pause()
}

function calculate() {
    document.getElementById('time2').innerHTML = Number(document.getElementById('value').value) - seconds
}