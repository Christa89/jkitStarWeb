
function NumberPad(){
    setTimeout(() => {

        var keyboardElem;
    
    var inputElem = document.getElementById('jkx-input');
    if(document.querySelector('.jkx-alphanumericpad')) { 
        keyboardElem = document.querySelector('.jkx-alphanumericpad'); 
        inputElem = document.getElementById('jkx-input');
        var maxLength = inputElem.getAttribute('maxlength');
        var backspace = document.querySelector('.jkx-alphanumericpad .backspace')
    } 
    else { 
        setTimeout(() => {
            inputElem = document.getElementById('jkx-input');
            keyboardElem = document.querySelector('.jkx-numpad');      
        }, 500);
     } 
    /* 
    
     if(displayLimit == undefined){
        displayLimit ="3";
     }
     */
    
    var metaElems1 = document.getElementsByTagName('meta');
    
    
    for(var i = 0; i < metaElems.length; i++) {
      /*   if (metaElems[i].getAttribute('name') === 'page-number') { 
          currentPage = metaElems[i].getAttribute('content');
          nextPage = parseInt(currentPage) + 1;
          previousPage = parseInt(currentPage) - 1;
        } */
        if (metaElems[i].getAttribute('name') === 'display-limit') {
          displayLimit = metaElems[i].getAttribute('content');
        }
      }
    
    document.addEventListener('click', function(e) {
        if(keyboardElem.contains(e.target) && e.target.tagName == 'BUTTON') {
            // clickSound();
            var btnGo = document.querySelector('.jkx-btn-go');
            inputElem.value += e.target.value;
            var displayLength = inputElem.value.length;
            if( backspace && backspace.contains(e.target) ) { 
                inputElem.value = inputElem.value.substring(0,parseInt(inputElem.value.length)-1);
            }
            if(displayLength > displayLimit) {
                if(document.querySelector('.jkx-numpad')) {                
                 inputElem.value = inputElem.value.substring(1,parseInt(displayLimit)+1);
                }  
                if( document.querySelector('.jkx-alphanumericpad') && displayLength == maxLength ) { inputElem.value = inputElem.value.substring(1,parseInt(maxLength)+1); }          
                if( document.querySelector('.jkx-alphanumericpad')) { return; }
            } 
            if( displayLength == displayLimit ) { btnGo.className = btnGo.className.replace('hidden','').trim(); }
            if( displayLength < displayLimit && btnGo.className.indexOf('hidden') == -1 ) { btnGo.className += " hidden"; }        
        }
    }); 
    
        
    }, 250);
}



