import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "./ball";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        // this.paddle = new Paddle(this);
        // this.ball = new Ball(this);
    }

    update(dt) {
        this.ball.update(dt);
        this.paddle.update(dt);
    }

    draw(ctx) {
        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle);
    }
}