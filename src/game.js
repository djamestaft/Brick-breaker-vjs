import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "./ball";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    update(dt) {
        this.gameObjects.forEach((gameItem) => gameItem.update(dt));
    }

    draw(ctx) {
        this.gameObjects.forEach((gameItem) => gameItem.draw(ctx));
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.gameObjects = [
            this.ball,
            this.paddle,
        ]
        new InputHandler(this.paddle);
    }
}