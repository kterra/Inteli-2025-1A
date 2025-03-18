class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  preload() {
    this.load.image("mar", "assets/bg_azul-claro.png");
  }

  create() {
    this.add.image(400, 300, "mar");

    let startText = this.add.text(250, 300, "Clique para começar!", {
      fontSize: "24px",
      fill: "#0a0a0a",
    });
    startText.setInteractive();

    startText.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("mar", "assets/bg_azul-claro.png");
    this.load.image("baiacu", "assets/peixes/baiacu.png");
  }

  create() {
    this.add.image(400, 300, "mar");
    this.peixe = this.add.image(400, 300, "baiacu");
    this.peixe.setFlip(true, false);

    let menuText = this.add.text(20, 20, "Voltar ao Menu", {
      fontSize: "20px",
      fill: "#0a0a0a",
    });
    menuText.setInteractive();
    menuText.on("pointerdown", () => {
      this.scene.start("MenuScene");
    });
  }

  update() {
    if (this.input.activePointer.isDown) {
      this.peixe.x = this.input.x;
      this.peixe.y = this.input.y;
    }
  }
}

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MenuScene, GameScene],
};

var game = new Phaser.Game(config);
