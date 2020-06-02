var canvas, backgroundImage;
var car1, car2, car3, car4, cars = [];
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white")
  if(playerCount == 4){
    game.update(1);
  }
  if(gameState == 1){
    game.play();
  }
}
