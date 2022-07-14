var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

var textbox = $("#textbox")


var instructions = $("#instructions")


var content = ''

recognition.continuous = true

recognition.onstart = function() {
    instructions.text("Voice Recognition is on")
}
recognition.onspeechend = function() {
    instructions.text("No Activity")
}
recognition.onerror = function() {
    instructions.text("Try again")
}

recognition.onresult = function (event) {
    var current = event.resultIndex;

    var trnascript = event.results[current][0].trnascript
    content += trnascript

    textbox.val(content)
}

$("#start-btn").click(function(event) {
    if(content.length) {
    content += '' }
    recognition.start()
})

textbox.on('input',function() {

    content = $(this).val() 
})