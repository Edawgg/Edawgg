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



