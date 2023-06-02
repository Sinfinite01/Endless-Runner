let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    backgroundColor: '#ADD8E6',
    width: 840,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Tutorial, Road ]
}

let game = new Phaser.Game(config)

let tileSize = 50;

// Reserve keyboard vars
let keySPACE;
let keyK, keyQ, keyW, keyE, keyR, keyG, keyLEFT, keyRIGHT, keyM;
let highScore = 0