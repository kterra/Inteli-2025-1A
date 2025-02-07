var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

// Variáveis para contar a quantidade de peixes de cada tipo
let peixesVerde = 0;
let peixesLaranja = 0;

function preload() {
    // Carrega as imagens dos peixes azul e vermelho
    this.load.image('mar-escuro', 'assets/bg_azul-escuro.png')
    this.load.image('peixe_verde', 'assets/peixes/peixe_verde.png');
    this.load.image('peixe_laranja', 'assets/peixes/peixinho_laranja.png');
}

function create() {
    this.add.image(400, 300, 'mar-escuro')

    // Loop para criar 5 peixes em posições aleatórias
    for (let i = 0; i < 5; i++) {
        let x = Phaser.Math.Between(100, 700);
        let y = Phaser.Math.Between(100, 500);
        
        // Alterna entre peixe azul e vermelho com base no índice
        if (i % 2 === 0) {
            this.add.image(x, y, 'peixe_verde');
            peixesVerde = peixesVerde + 1;
        } else {
            this.add.image(x, y, 'peixe_laranja');
            peixesLaranja = peixesLaranja + 1;
        }
    }
}

function update() {
    


}