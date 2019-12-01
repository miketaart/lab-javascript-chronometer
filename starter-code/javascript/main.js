var chronometer = new Chronometer();
console.log(chronometer)
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(s1,s2, m1,m2) {
    printSeconds(s1,s2);
}

function printMinutes(m1,m2) {

}

function printSeconds(s1,s2) {
    document.getElementById("secUni").innerHTML = s2;
    // ..
}
// bonus
function printMilliseconds() {

}

function printSplit() {
    // get latest split from chronometer

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button

var btnLeft = document.getElementById("btnLeft")

function startToStop () {
    let clickLeftButton = document.getElementById("btnLeft")
    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
}

function resetToSplit () {
    let clickRightButton = document.getElementById("btnRight")
    btnRight.innerHTML = "SPLIT";
}

btnLeft.addEventListener('click', startToStop); // click on start and left button with text 'start' will change to 'stop'
btnLeft.addEventListener('click', resetToSplit); // click on start and right button with text 'reset' will change to 'split'

// Reset/Split Button
btnRight.addEventListener('click', function () {

});


/* var btnLeft = document.getElementById("btnLeft")

function stopToStart () {
    let clickLeftButton = document.getElementById("btnLeft")
    btnLeft.innerHTML = "START";
}

function splitToReset () {
    let clickRightButton = document.getElementById("btnRight")
    btnRight.innerHTML = "RESET";
}

btnLeft.addEventListener('click', stopToStart); // click on stop and left button with text 'stop' will change to 'start'
btnLeft.addEventListener('click', splitToReset); // click on stop and right button with text 'split' will change to 'reset'
*/
