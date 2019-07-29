/* ========================== clear inputs ========================== */

if(document.getElementById('jkx-input')){  
  document.getElementById('jkx-input').value = "";
}

/* ========================== update date & time ========================== */

function setDateTime() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var period = 'AM';
  var display = "";

  if (hours > 12) { period = 'PM'; } else { period = 'AM'; }
  month = addMissingDigits(month);
  day = addMissingDigits(day);
  hours = addMissingDigits(hours);
  minutes = addMissingDigits(minutes);

  display = hours + ":" + minutes + " " + period + " " + year + "-" + month + "-" + day;

  if(document.getElementById('date-time')){document.getElementById('date-time').innerHTML = display;}  

  setTimeout(setDateTime, 5000);

}

function addMissingDigits(number) {
  if( number < 10 ){ return '0' + number; }
  else { return number; }
   
}

setDateTime();

/* ========================== sound events ========================== */

var clickSound = function() {
  document.getElementById("click-sound").play();
}

var blipSound = function() {
  document.getElementById("blip-sound").play();
}

var blipSound2 = function() {
  document.getElementById("blip-sound2").play();
}

var sciFiSound = function() {
  document.getElementById("sci-fi-sound").play();
}

/* ========================== page direct events ========================== */





  var nextPage, currentPage, previousPage, displayLimit;
var metaElems = document.getElementsByTagName('meta');
var btnGo = document.querySelector('.jkx-btn-go');

for(var i = 0; i < metaElems.length; i++) {
  if (metaElems[i].getAttribute('name') === 'page-number') { 
    currentPage = metaElems[i].getAttribute('content');
    nextPage = parseInt(currentPage) + 1;
    previousPage = parseInt(currentPage) - 1;
  }
  if (metaElems[i].getAttribute('name') === 'display-limit') {
    displayLimit = metaElems[i].getAttribute('content');
  }
}

var goToNextPage = function() {
  blipSound();
  setTimeout(function () {
    window.location.href = 'page' + nextPage + '.html';
  }, 500);
}

var goToPreviousPage = function() {
  sciFiSound();
  setTimeout(function () {
    window.location.href = 'page' + previousPage + '.html';
  }, 750);
}

var clearDisplay = function() {
  blipSound2(); 
  btnGo = document.querySelector('.jkx-btn-go'); 
  if(btnGo.className.indexOf('hidden') == -1) {
    btnGo.className += ' hidden';
  }
  setTimeout(function () {
    document.getElementById('jkx-input').value = "";
  }, 250);
}

  


