var rateMe = function(e) {

    blipSound2();

    var clickedStar;
    var clickedStarIndex;
    var rateStarElements = []; 
    var ratingElement = document.getElementById('jkx-rating'); 
    var rateStars = ratingElement.querySelectorAll('.jkx-rate-star');

    clickedStar = e.srcElement;      

    for( var i = 0; i < rateStars.length; i++) {
      if(rateStars[i].className.indexOf('selected')){
        rateStars[i].className = rateStars[i].className.replace('selected','').trim();
      }
      rateStarElements.push(rateStars[i]);
    }
    
    clickedStarIndex  = rateStarElements.indexOf(clickedStar);
    document.getElementById('idClickedStarIndex').value = clickedStarIndex;

    for( var i = 0; i < (clickedStarIndex+1); i++) { 
      ratingElement.querySelector('.jkx-rate-star:nth-child(' + (i+1) + ')')['className'] += ' selected';
    }
}