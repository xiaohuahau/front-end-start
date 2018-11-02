var wrapWidth = 300;
var bugWidth = 30;
var $bug = document.querySelector('#bug');
var $box = document.querySelector('.box');
var $point = document.querySelector('#point');
var $life= document.querySelector('#life');
var point = 0;
var life = 10;
var bugSpeed = 1500;
var timer = 0;


function addPoint(){
  // point = point + 1;
  // point++;
  point += 1;
  $point.innerHTML = point;
  dieBug();
  event.stopPropagation(); 
}

function dieBug(){
  $bug.style.display = 'none';
  start();
}

function move() {

  $bug.style.display = 'block';
  var x = random(wrapWidth - bugWidth);
  var y = random(wrapWidth - bugWidth);
  console.log(x, y);

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';
}
function random(max) {
  return Math.floor(Math.random() * max);
}

function start (){

  clearInterval(timer);
  timer=setInterval(move, bugSpeed);
}
function minusLife(){
  life -= 1;

  $life.innerHTML = life; 

  if(life === 0) {
    gameover();
  }
}
function gameover(){
  clearInterval(timer); 
  alert('gameover');
}

start();
$bug.addEventListener('click', addPoint);
$box.addEventListener('click', minusLife);