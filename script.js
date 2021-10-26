var audio = new Audio('GENERATOR 20000Hz.wav')
var now

function pressed() {
    now = new Date
    audio.play()
    setTimeout(pause, 100);
}

function pause() {
    audio.pause()
    alert(now.getMilliseconds())
}