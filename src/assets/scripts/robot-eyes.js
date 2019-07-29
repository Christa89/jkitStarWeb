
function setEyeStyle(){
    setTimeout(repeatingFunc, duration);
}

var shiftX = 0;
var shiftY = 0;
var duration = 0;
var eyeballDeviation = 30;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function transformEyeball(x,y) {
    if(x > 0 ){ var deviationX = x + this.getRandomArbitrary(0,eyeballDeviation); }
    if(y > 0 ){ var deviationY = y + this.getRandomArbitrary(0,eyeballDeviation); }
    if( x < 0 ){ var deviationX = x - this.getRandomArbitrary(0,eyeballDeviation); }
    if( y < 0 ){ var deviationY = y - this.getRandomArbitrary(0,eyeballDeviation); }
    

    document.getElementsByClassName('circle2')[0]['style']['transform'] = 'translate( ' + x + 'px , ' + y + 'px )';
    document.getElementsByClassName('circle2')[1]['style']['transform'] = 'translate( ' + x + 'px , ' + y + 'px )';
    document.getElementsByClassName('circle2')[0]['style']['transition'] = 'transform ' + duration/1000 + 's';
    document.getElementsByClassName('circle2')[1]['style']['transition'] = 'transform ' + duration/1000 + 's';
    document.getElementsByClassName('circle3')[0]['style']['transform'] = 'translate( ' + deviationX + 'px , ' + deviationY + 'px )';
    document.getElementsByClassName('circle3')[1]['style']['transform'] = 'translate( ' + deviationX + 'px , ' + deviationY + 'px )';
    document.getElementsByClassName('circle3')[0]['style']['transition'] = 'transform ' + duration/1000 + 's';
    document.getElementsByClassName('circle3')[1]['style']['transition'] = 'transform ' + duration/1000 + 's';
}    

function repeatingFunc() {
    this.shiftX = this.getRandomArbitrary(-50,50);
    this.shiftY = this.getRandomArbitrary(-50,50);
    this.duration = this.getRandomArbitrary(100,2000);
    this.transformEyeball(this.shiftX,this.shiftY);
    setTimeout(this.repeatingFunc, this.duration);
}




