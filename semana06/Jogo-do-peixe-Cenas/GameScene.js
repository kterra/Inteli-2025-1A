export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.peixePosicao = { x: 400, y: 300 }; // Posição inicial do peixe
  }

  init(data) {
    // Se tivermos uma posição salva, usamos ela
    if (data.peixePosicao) {
      this.peixePosicao = data.peixePosicao;
    }
  }

  preload() {
    this.load.image("mar", "assets/bg_azul-claro.png");
    this.load.image("baiacu", "assets/peixes/baiacu.png");
  }

  create() {
    this.add.image(400, 300, "mar");

    // Criamos o peixe na posição salva
    this.peixe = this.add.image(
      this.peixePosicao.x,
      this.peixePosicao.y,
      "baiacu"
    );
    this.peixe.setFlip(true, false);

    // Captura do teclado
    this.cursors = this.input.keyboard.createCursorKeys();

    let menuText = this.add.text(20, 20, "Voltar ao Menu", {
      fontSize: "20px",
      fill: "#0a0a0a",
    });

    menuText.setInteractive();
    menuText.on("pointerdown", () => {
      // Antes de sair, salvar a posição atual do peixe
      this.scene.start("MenuScene", {
        peixePosicao: { x: this.peixe.x, y: this.peixe.y },
      });
    });
  }

  update() {
    // Movimento do peixe pelo teclado
    if (this.cursors.left.isDown) {
      this.peixe.x -= 5;
    }
    if (this.cursors.right.isDown) {
      this.peixe.x += 5;
    }
    if (this.cursors.up.isDown) {
      this.peixe.y -= 5;
    }
    if (this.cursors.down.isDown) {
      this.peixe.y += 5;
    }
  }
}
