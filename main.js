const $arena = document.querySelector(".arenas");
const $buttonRandom = document.querySelector('.button');

const player1 = {
  name: "SCORPIO",
  player: 1, //Task #0
  hp: 100, //Task #0
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["armo", "turbo"],
  attack: function () {
    console.log("<" + this.name + ">" + "Figth...");
  },
};

const player2 = {
  name: "SUB-ZERO",
  player: 2, //Task #0
  hp: 100, //Task #0
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["armo", "turbo"],
  attack: function () {
    console.log("<" + this.name + ">" + "Figth...");
  },
};

function createElement(tagName,className) {
  const $element = document.createElement(tagName);
  if(className) {
    $element.classList.add(className); 
  }  
  return $element;
}


function changeHp(player) {
  const $life = document.querySelector(".player" + player.player + " .life");
  player.hp -= doDamage();//Task #2
  if (player.hp < 0) player.hp = 0; //Task #1
  $life.style.width = player.hp + "%";
  console.log($life.style.width + " " + player.hp);
  if (player.hp === 0) {
    //$arena.appendChild(losePlayer(player.name));
    //Task #3
    $arena.appendChild(winPlayer(player.player === 1 ? player2.name : player1.name));
    $buttonRandom.disabled = true;
  }
}

//Task #2
function doDamage () {
  let strike = Math.ceil(Math.random() * 20);
  console.log(strike);
  return strike;
}

function losePlayer(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + " lose";
  return $loseTitle;
}

//Task #3
function winPlayer(name) {
  const $winTitle = createElement('div', 'loseTitle');
  $winTitle.innerText = name + " wins";
  return $winTitle;
}

$buttonRandom.addEventListener('click',function() {
  changeHp(player1);
  changeHp(player2);
})

function createPlayer(obj) {
  const $player = createElement("div", "player"+obj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  $life.style.width = obj.hp + "%";
  const $name = createElement("div", "name");
  $name.innerText = obj.name;
  const $image = createElement("img");
  $image.src = obj.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($progressbar);
  $character.appendChild($image);
  $player.appendChild($character);
  return $player;
}

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
