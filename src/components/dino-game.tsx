'use client'

import React, { useEffect, useRef, useState } from 'react';

const STATUS = {
  STOP: 'STOP',
  START: 'START',
  PAUSE: 'PAUSE',
  OVER: 'OVER'
} as const;

const JUMP_DELTA = 1.5;
const JUMP_MAX_HEIGHT = 60;

export default function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<typeof STATUS[keyof typeof STATUS]>(STATUS.STOP);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [score, setScore] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [highScore, setHighScore] = useState(0);

  const gameState = useRef({
    jumpHeight: 0,
    jumpDelta: 0,
    obstaclesBase: 1,
    obstacles: [] as { distance: number }[],
    currentDistance: 0,
    playerStatus: 0,
    score: 0,
    highScore: 0,
    isJumping: false,
    lastObstacleDistance: 0,
    options: {
      fps: 60,
      skySpeed: 40,
      groundSpeed: 200,
      skyOffset: 0,
      groundOffset: 0,
      skyImage: null as HTMLImageElement | null,
      groundImage: null as HTMLImageElement | null,
      playerImage: [] as HTMLImageElement[],
      obstacleImage: null as HTMLImageElement | null,
    },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = Math.min(680, window.innerWidth);
    canvas.height = 160;

    const images = {
      sky: '/img/cloud.png',
      ground: '/img/ground.png',
      player: [
        '/img/dinosaur.png',
        '/img/dinosaur_left.png',
        '/img/dinosaur_right.png',
        '/img/dinosaur_die.png'
      ],
      obstacle: '/img/obstacle.png'
    };

    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = (e) => {
          console.error(`Failed to load image: ${src}`, e);
          reject(e);
        };
        img.src = src;
      });
    };

    Promise.all([
      loadImage(images.sky),
      loadImage(images.ground),
      ...images.player.map(loadImage),
      loadImage(images.obstacle)
    ]).then(([sky, ground, ...playerAndObstacle]) => {
      const [player1, player2, player3, player4, obstacle] = playerAndObstacle;
      gameState.current.options.skyImage = sky;
      gameState.current.options.groundImage = ground;
      gameState.current.options.playerImage = [player1, player2, player3, player4];
      gameState.current.options.obstacleImage = obstacle;
      draw();
    }).catch(error => {
      console.error('Error loading game assets:', error);
    });

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        onSpacePress();
      }
    };

    const onSpacePress = () => {
      switch (status) {
        case STATUS.STOP:
          start();
          break;
        case STATUS.START:
          jump();
          break;
        case STATUS.OVER:
          restart();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    canvas.addEventListener('click', onSpacePress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      canvas.removeEventListener('click', onSpacePress);
    };
  }, [status]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const { options } = gameState.current;

    ctx.clearRect(0, 0, width, height);

    if (options.skyImage) {
      options.skyOffset = (options.skyOffset + options.skySpeed / options.fps) % width;
      ctx.drawImage(options.skyImage, -options.skyOffset, 20);
      ctx.drawImage(options.skyImage, width - options.skyOffset, 20);
    }

    if (options.groundImage) {
      options.groundOffset = (options.groundOffset + options.groundSpeed / options.fps) % width;
      ctx.drawImage(options.groundImage, -options.groundOffset, height - options.groundImage.height);
      ctx.drawImage(options.groundImage, width - options.groundOffset, height - options.groundImage.height);
    }

    if (options.playerImage[gameState.current.playerStatus]) {
      const playerY = height - options.groundImage!.height - options.playerImage[gameState.current.playerStatus].height + 5 - gameState.current.jumpHeight;
      ctx.drawImage(
        options.playerImage[gameState.current.playerStatus],
        80,
        playerY
      );
    }

    if (options.obstacleImage) {
      gameState.current.obstacles = gameState.current.obstacles.filter(obstacle => {
        const obstacleX = width - (gameState.current.currentDistance - obstacle.distance + options.groundSpeed / options.fps);
        if (obstacleX > -options.obstacleImage!.width) {
          const obstacleY = height - options.groundImage!.height - options.obstacleImage!.height + 5;
          ctx.drawImage(options.obstacleImage!, obstacleX, obstacleY);
          return true;
        }
        return false;
      });
    }

    if (gameState.current.isJumping) {
      if (gameState.current.jumpDelta > 0) {
        gameState.current.jumpHeight = Math.min(JUMP_MAX_HEIGHT, gameState.current.jumpHeight + gameState.current.jumpDelta);
        if (gameState.current.jumpHeight >= JUMP_MAX_HEIGHT) {
          gameState.current.jumpDelta = -JUMP_DELTA / 2;
        }
      } else {
        gameState.current.jumpHeight = Math.max(0, gameState.current.jumpHeight + gameState.current.jumpDelta);
        if (gameState.current.jumpHeight <= 0) {
          gameState.current.jumpHeight = 0;
          gameState.current.jumpDelta = 0;
          gameState.current.isJumping = false;
        }
      }
    }

    ctx.font = "16px 'Press Start 2P'";
    ctx.fillStyle = "#595959";
    ctx.textAlign = "right";
    ctx.fillText(`Score: ${Math.floor(gameState.current.score)}`, width - 10, 25);
    ctx.textAlign = "left";
    ctx.fillText(`High Score: ${Math.floor(gameState.current.highScore)}`, 10, 25);

    if (status === STATUS.START) {
      gameState.current.score += 0.1;
      if (gameState.current.score > gameState.current.highScore) {
        gameState.current.highScore = gameState.current.score;
      }
      setScore(Math.floor(gameState.current.score));
      setHighScore(Math.floor(gameState.current.highScore));

      gameState.current.currentDistance += options.groundSpeed / options.fps;

      // Generate new obstacles one at a time
      if (gameState.current.obstacles.length === 0 || 
          (gameState.current.currentDistance - gameState.current.lastObstacleDistance > 600 && Math.random() < 0.02)) {
        gameState.current.obstacles.push({
          distance: gameState.current.currentDistance + width
        });
        gameState.current.lastObstacleDistance = gameState.current.currentDistance;
      }

      const playerRect = {
        x: 80,
        y: height - options.groundImage!.height - options.playerImage[gameState.current.playerStatus].height + 5 - gameState.current.jumpHeight,
        width: options.playerImage[0]?.width || 0,
        height: options.playerImage[0]?.height || 0
      };

      for (const obstacle of gameState.current.obstacles) {
        const obstacleX = width - (gameState.current.currentDistance - obstacle.distance + options.groundSpeed / options.fps);
        const obstacleRect = {
          x: obstacleX,
          y: height - options.groundImage!.height - options.obstacleImage!.height + 5,
          width: options.obstacleImage?.width || 0,
          height: options.obstacleImage?.height || 0
        };

        if (
          playerRect.x < obstacleRect.x + obstacleRect.width &&
          playerRect.x + playerRect.width > obstacleRect.x &&
          playerRect.y < obstacleRect.y + obstacleRect.height &&
          playerRect.y + playerRect.height > obstacleRect.y
        ) {
          stop();
          return;
        }
      }

      if (gameState.current.jumpHeight === 0) {
        gameState.current.playerStatus = (gameState.current.playerStatus + 1) % 3;
      }
    }

    requestAnimationFrame(draw);
  };

  const start = () => {
    if (status === STATUS.START) return;
    setStatus(STATUS.START);
    gameState.current.obstacles = [];
    gameState.current.score = 0;
    gameState.current.currentDistance = 0;
    gameState.current.lastObstacleDistance = 0;
    draw();
  };

  const stop = () => {
    if (status === STATUS.OVER) return;
    setStatus(STATUS.OVER);
    gameState.current.playerStatus = 3; // Die sprite
  };

  const restart = () => {
    gameState.current = {
      ...gameState.current,
      jumpHeight: 0,
      jumpDelta: 0,
      obstaclesBase: 1,
      obstacles: [],
      currentDistance: 0,
      lastObstacleDistance: 0,
      playerStatus: 0,
      score: 0,
      isJumping: false,
    };
    start();
  };

  const jump = () => {
    if (gameState.current.jumpHeight === 0 && !gameState.current.isJumping) {
      gameState.current.isJumping = true;
      gameState.current.jumpDelta = JUMP_DELTA;
    }
  };

  return (
    <div className="relative w-full max-w-[680px] mx-auto" tabIndex={0}>
      <canvas 
        ref={canvasRef}
        className="border border-gray-300 bg-white w-full"
      />
      {status === STATUS.STOP && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <p className="font-pixel">Click or press Space to start</p>
        </div>
      )}
      {status === STATUS.OVER && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <p className="font-pixel">Game Over - Click or press Space to restart</p>
        </div>
      )}
    </div>
  );
}

