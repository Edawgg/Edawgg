//CSS styling
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexDirection = 'column';

const navBar = document.getElementById('fixed');
navBar.style.display = 'inline-flex';
navBar.style.flexDirection = 'row';
navBar.style.justifyContent = 'space-between';

const score = document.getElementById('view-scores');
score.style.backgroundColor = '#9a0a00';

const cntDwn = document.getElementById('countdown');
cntDwn.style.textAlign = 'center';

const timer = document.getElementById('timer');
timer.style.fontSize = '24px';
timer.style.border = 'solid';

//1 minute timer 
    document.getElementById('timer').innerHTML =
  01 + ":" + 00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
};

function change() {
    const homepage = document.getElementById('homepage');
    const questions = document.getElementById('questions');
    homepage.style.display = 'none';
    questions.style.display = 'block';
    }

document.getElementById('start').addEventListener('click' , startTimer() , change());


