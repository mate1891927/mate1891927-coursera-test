(function(window) {

             //secondpart
    var speakWord = "Hello";
    var helloSpeaker = function (name) {
        document.write(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

})(window);