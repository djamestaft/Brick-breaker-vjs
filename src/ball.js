export default class ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");
    this.speed = { x: 4, y: 4 };
    this.position = { x: 30, y: 30 };
    this.size = 16;
   
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
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

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if(this.position.x > this.gameWidth - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    
    if(this.position.y > this.gameHeight - this.size  || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

  }
}
