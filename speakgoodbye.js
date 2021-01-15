(function(window) {

            //firstpart
    var speakWord = "Good Bye";
    var byeSpeaker = function (name) {
        document.write(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);