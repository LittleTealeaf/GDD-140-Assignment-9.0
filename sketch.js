/// <reference path="./node_modules/@types/p5/global.d.ts" />

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
    background(220);
    drawSprites();
}

function mousePressed() {
    //Creates a sprite
    const s = createSprite(mouseX,mouseY,30,30);
    //Sets the sprites velocity based on mouse location
    s.velocity.y = mouseY > height / 2 ? -5 : 5;
}
