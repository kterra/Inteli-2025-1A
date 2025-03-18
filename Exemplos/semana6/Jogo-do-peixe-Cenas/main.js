import { MenuScene } from "./MenuScene.js";
import { GameScene } from "./GameScene.js";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MenuScene, GameScene],
};

var game = new Phaser.Game(config);
