/// <reference path="./node_modules/@types/p5/global.d.ts" />

function setup() {
    createCanvas(600, 400);
    var mysprite = createSprite(width / 2, 0, 20, 20);
    mysprite.shapeColor = color(0, 0, 255);
    mysprite.velocity.y = 2;

}

function draw() {
    background(220);
    drawSprites();
}
