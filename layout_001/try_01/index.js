function toggle(className, displayState){
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}

var i = 0;
 
document.addEventListener('click', function (event) {
  if ( i === 1) {
    i = 0;
      toggle('content-section', 'none');
      toggle('full-height-section', 'block'); 
  } else {
    i = 1;
    	toggle('content-section', 'block');
      toggle('full-height-section', 'none');
  }
}, false);

toggle('content-section', 'none');
toggle('full-height-section', 'block');