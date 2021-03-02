(function () {

var names = ["Yaakov", "Jemmy", "Jihane", "Jaura", "Camilia", "Oualid", "Laura", "Piko", "Freud", "Johana"];


for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  };
}

})();