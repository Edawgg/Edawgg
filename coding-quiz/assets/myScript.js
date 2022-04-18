//CSS styling

var start = document.getElementById('start');
var home = document.getElementById('home');
var qna = document.getElementById('qna');
var question = document.getElementById('question');
var chaoiceA = document.getElementById('A')
var chaoiceB = document.getElementById('B')
var chaoiceC = document.getElementById('C')
//1 minute timer 
const element = document.querySelector('#start');
element.addEventListener('click', function startTimer(){

document.getElementById('timer').innerHTML =
  01 + ":" + 00;
startTimer();

const home = document.getElementById('home');

home.addEventListener('click' , toggleDisplay(),

function toggleDisplay(){
    home.innerHTML = onclick.call questions;
});


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
}

});

let questions = [{
    
        question : 'What is the correct relative path to myScript.js file located in the current folder?',
        choiceA : 'https://www.username.github.io/project-name/assets/myScript.js',
        choiceB : 'myScript.js',
        choiceC : 'assets/myScript.js',
        correct : 'C'
    },
    {
        question : 'What comparison Operator represents equal to?',
        choiceA : '=',
        choiceB : '==',
        choiceC : '===',
        correct : 'B'
    },
    {
        question : 'What comparison Operator represents equal value and equal type?',
        choiceA : '=',
        choiceB : '==',
        choiceC : '===',
        correct : 'C'
    },
    {
        question : 'What functions displays a window with a message and a user input feild?',
        choiceA : 'window.alert()',
        choiceB : 'text()',
        choiceC : 'prompt()',
        correct : 'C'
    },
    {
        question : '',
        choiceA : '',
        choiceB : '',
        choiceC : '',
        correct : ''
    },
    {
        question : '',
        choiceA : '',
        choiceB : '',
        choiceC : '',
        correct : ''
    },
    {
        question : '',
        choiceA : '',
        choiceB : '',
        choiceC : '',
        correct : ''
    },
    {
        question : '',
        choiceA : '',
        choiceB : '',
        choiceC : '',
        correct : ''
    },
    {
        question : '',
        choiceA : '',
        choiceB : '',
        choiceC : '',
        correct : ''
    },
    {
        question : '',
        choiceA : '',
        choiceB : '',
        choiceC : '',
        correct : ''
    }
]



