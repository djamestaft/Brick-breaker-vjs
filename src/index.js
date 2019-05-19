import Game from "./game";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 800;
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 1200, 800);
  
  game.update(dt);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
