/// <reference path="./node_modules/@types/p5/global.d.ts" />

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);

}

function draw() {
    background(220);
    drawSprites();
}

function mousePressed() {
    var s = createSprite(mouseX,mouseY,30,30);
    s.velocity.y = mouseY > height / 2 ? -5 : 5;
}
