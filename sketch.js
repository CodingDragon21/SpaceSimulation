var sleep, sleeping
var drink, drinking
var brush, brushing
var gym, exercise
var bath, bathing
var move, moving
var eat, eating
var iss, home
var exercise2

var edges

function preload() {
  home = loadImage("iss.png")
  sleeping = loadAnimation("sleep.png")
  drinking = loadAnimation("drink1.png", "drink2.png")
  brushing = loadAnimation("brush.png")
  exercise = loadAnimation("gym1.png", "gym2.png")
  exercise2 = loadAnimation( "gym11.png", "gym12.png")
  bathing = loadAnimation("bath1.png", "bath2.png")
  moving = loadAnimation( "move1.png")
  eating = loadAnimation("eat1.png", "eat2.png")

}

function setup() {
  createCanvas(800, 500);
  //createSprite(400, 200, 50, 50);
  iss = createSprite(400, 200)
  iss.addImage("space", home)
  iss.scale = 0.15

  sleep = createSprite(300, 310)
  sleep.addAnimation("tired", sleeping)

  sleep.scale = 0.06


}

function draw() {
  background(255,255,255);
  edges = createEdgeSprites()
  drawSprites();
console.log(sleepy.y)
  if (keyDown("down")) {
    brush();
  }
  if (keyDown("left")) {
    drink();
  }
  if (keyDown("right")) {
    eat();
  }
  if (keyDown("l")) {
    cardio();
  }
  if(keyDown("a")){
    cardio2()
  }
  if (keyDown("m")) {
    move();
  }
  if (keyDown("b")) {
    bath()
  }
  if (keyDown("up")) {
    sleepy()
  }
  sleep.bounceOff(edges)
  fill("orange")
  textSize(12)
  text("Welcome To The ISS, Here are the Instructions:", 50, 30)
  text("Sleeping: upArrow", 50, 50)
  text("Brushing: downArrow", 50, 70)
  text("Drinking: leftArrow", 50, 90)
  text("Eating: rightArrow", 50, 110)
  text("Leg Workout: 'l'", 50, 130)
  text("Arm Workout: 'a" , 50 , 150)
  text("Bathing: 'b'", 50, 170)
  text("Moving: 'm'", 50, 190)

  text("Today you can learn how astronauts live up in space" , 450,30)
  text("You can sleep,eat,brush,exercise and do many more things" , 450 ,50)
  text ("GOOD LUCK, HAVE FUN, AND KEEP HEALTHY!" , 450 , 70)
}

function sleepy() {
  sleep.addAnimation("tired", sleeping)
  sleep.x = 300
  sleep.y = 310
  sleep.setVelocity(0, 0)
}
function brush() {
  sleep.addAnimation("tired", brushing)
  sleep.x = 400
  sleep.y = 310
  sleep.setVelocity(0, 0)
}
function drink() {
  sleep.addAnimation("tired", drinking)
  sleep.x = 260
  sleep.y = 310
  sleep.setVelocity(0, 0)
}
function eat() {
  sleep.addAnimation("tired", eating)
  sleep.x = 260
  sleep.y = 310
  sleep.setVelocity(0, 0)
}
function cardio() {
  sleep.addAnimation("tired", exercise)
  sleep.x = 390
  sleep.y = 310
  sleep.setVelocity(0, 0)
}
function cardio2(){
  sleep.addAnimation("tired" , exercise2)
  sleep.x = 390
  sleep.y = 310
  sleep.setVelocity(0,0)
}
function move() {

  sleep.addAnimation("tired", moving)
  sleep.velocityX = 2
  sleep.velocityY = 3

}
function bath() {
  sleep.addAnimation("tired", bathing)
  sleep.setVelocity(0, 0)
  sleep.x = 440
  sleep.y = 310
}

