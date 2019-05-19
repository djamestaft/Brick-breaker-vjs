import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "./ball";
import Brick from "/src/brick";

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

        let bricks = [];
        
        for(let i = 0; i < 23; i++) {
            bricks.push(new Brick(this, {x: i * 52, y: 30}));
        }
        
        new Brick(this, {x: 20, y: 20});

        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]
        new InputHandler(this.paddle);
    }
}