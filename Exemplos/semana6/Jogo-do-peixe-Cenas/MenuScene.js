export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  preload() {
    this.load.image("mar", "assets/bg_azul-claro.png");
  }

  create() {
    this.add.image(400, 300, "mar");

    let startText = this.add.text(250, 300, "Clique para voltar ao jogo!", {
      fontSize: "24px",
      fill: "#0a0a0a",
    });

    startText.setInteractive();
    startText.on("pointerdown", () => {
      // Passa a posição salva para a GameScene ao iniciar novamente
      this.scene.start("GameScene", this.scene.settings.data);
    });
  }
}
