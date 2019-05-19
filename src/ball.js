export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");
    this.speed = { x: 4, y: 4 };
    this.position = { x: 30, y: 30 };
    this.size = 16;
   
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(dt) {
    console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall on left or right
    if(this.position.x > this.gameWidth - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // wall on top or bottom
    if(this.position.y > this.gameHeight - this.size  || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // collision with paddle
    let  bottomOfBall = this.position.y + this.size;
    let  topOfPaddle = this.game.paddle.position.y;
    
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    if(
      bottomOfBall >= topOfPaddle
      && this.position.x >= leftSideOfPaddle 
      && this.position.x + this.size <= rightSideOfPaddle) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }

  }
}
