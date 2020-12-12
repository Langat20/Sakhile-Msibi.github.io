import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood, SNAKE_SPEED } from './food.js';
import { outsideGrid } from './grid.js';

let lastRnderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) {
        if (confirm("you lose. Press ok to restart")) {
            window.location = '/snakeGame/';
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRnderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return ;

    
    lastRnderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}