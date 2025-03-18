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
var peixes = [];

function preload() {
    this.load.image('mar-escuro', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixe_rosa.png');
    this.load.image('peixe-serio', 'assets/peixes/peixe_serio.png');
    this.load.image('peixe-amarelo', 'assets/peixes/peixe_amarelo.png');
}

function create() {
    this.add.image(400, 300, 'mar-escuro');
    this.add.image(400, 525, 'logo').setScale(0.5);
    
    criarPeixe(this, 300, 0, 'peixe');
    criarPeixe(this, 300, 150, 'peixe-serio');
    criarPeixe(this, 300, 300, 'peixe-amarelo');
    criarPeixe(this, 300, 450, 'peixe-amarelo');
}

function criarPeixe(scene, x, y, textura) {
    let peixe = scene.add.image(x, y, textura);
    peixe.ida = false;
    peixes.push(peixe);
}

function update() {
    for(let i=0; i< peixes.length; i++){
        moverPeixe(peixes[i]);
    }

    //peixes.forEach(moverPeixe);
}

function moverPeixe(peixe) {
    if (peixe.x === 400) {
        peixe.ida = false;
        peixe.setFlip(false, false);
    }
    if (peixe.x <= 400 && !peixe.ida) {
        peixe.x -= 10;
    }
    if (peixe.x === 10 && !peixe.ida) {
        peixe.ida = true;
        peixe.setFlip(true, false);
        console.log('IDA');
    }
    if (peixe.x >= 10 && peixe.ida) {
        console.log('IDA2');
        peixe.x += 5;
    }
}
