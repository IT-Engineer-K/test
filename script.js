var audio = new Audio('GENERATOR 20000Hz.wav')

function pressed() {
    var now = new Date
    audio.play()
    alert(now.getMilliseconds())
}