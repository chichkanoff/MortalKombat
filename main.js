//Task #0

const player1 = {
  name: "SCORPIO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["armo", "turbo"],
  attack: function () {
    console.log("<" + this.name + ">" + "Figth...");
  },
};

const player2 = {
  name: "SUB-ZERO",
  hp: 50,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["armo", "turbo"],
  attack: function () {
    console.log("<" + this.name + ">" + "Figth...");
  },
};

//Task #1

function createPlayer(player, name, life) {
  const $player = document.createElement("div");
  $player.classList.add(player); //---parametr
  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  const $character = document.createElement("div");
  $character.classList.add("character");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = life + "%"; //---parametr
  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = name; //---parametr
  const $image = document.createElement("img");
  $image.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($progressbar);
  $character.appendChild($image);
  $player.appendChild($character);

  const $arena = document.querySelector(".arenas");
  $arena.appendChild($player);
}

//Task #2

createPlayer("player1", "SCORPION", 100);
createPlayer("player2", "SUB-ZERO", 50);

//Task #3

function createPlayerStar(player, obj) {
  const $player = document.createElement("div");
  $player.classList.add(player);
  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  const $character = document.createElement("div");
  $character.classList.add("character");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = obj.hp + "%";
  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = obj.name;
  const $image = document.createElement("img");
  $image.src = obj.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($progressbar);
  $character.appendChild($image);
  $player.appendChild($character);

  const $arena = document.querySelector(".arenas");
  $arena.appendChild($player);
}

//createPlayerStar("player1", player1);
//createPlayerStar("player2", player2);
