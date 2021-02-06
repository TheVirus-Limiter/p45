var gameState = BEGIN;
var PLAY = 2
var BEGIN = 1
var WIN = 0
var man
var manAnimation
var bird
var birdImg
var birdpoop
var birdpoopImg
var bus
var busImg
var office
var bckd 
var ground1
var ground2
var ground3
var bground, bgroundImage, trafficone,trafficoneImg;


function preload(){
    manAnimation = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man9.png");
    bgroundImage = loadImage("road_bground.png");
    busImg = loadImage("bus.png")
    trafficoneImg = loadImage("trafficone.png")


}

function setup(){
    createCanvas(windowWidth-400, 400);
    console.log(width)
}

function draw(){
    background(0);

}