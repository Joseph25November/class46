const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var game
var gameState = 0;
var playerCount;
var player;
var database;
var form;
var cat;
var catimage;
var catattack;
var catwin;
var mouse;
var mouseattack;
var mousewin;
var mouseimage;
var milk;
var cheese;
var GameOver
function preload (){
    mouseimage = loadImage("Mouse.jpg");
    catimage = loadImage("Cat.jpg");
    mousewin = loadImage("MouseWin.jpg");
    catwin = loadImage("CatWin.jpg");
    mouseattack = loadImage("MouseAttack.jpg");
    catattack = loadImage("CatAttack.jpg");
    cheese = loadImage("Cheese.png");
    milk = loadImage("Milk.jpg");
    GameOver = loadImage("GameOver.webp")
}
function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    database = firebase.database();

    game = new Game()

   
}

function draw(){
    background(255);
    Engine.update(engine);

    game.start();

}