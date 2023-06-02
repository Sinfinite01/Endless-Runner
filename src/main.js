/*#################################
#   Dylan Louie
#   Save the Sun!
#   Estimated Time: 20-30 hours
#   Creative Tilt:
#       - I implemented a unique mechanic which I call "gravity", as an extention to that instead of running the player character flies enhancing the 
#       - usability of the gravity mechanic. Also instead of the player avatar being the one dodging, instead the player is manipulating another 
#       - sprite, the Sun, and saving that instead.
#
#################################*/

let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    backgroundColor: '#ADD8E6',
    autoCenter: true,
    width: 840,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
    scene: [ Menu, Tutorial, Road, Credits ]
}

let game = new Phaser.Game(config)

let tileSize = 50;

// Reserve keyboard vars
let keySPACE;
let keyK, keyQ, keyW, keyE, keyR, keyG, keyLEFT, keyRIGHT, keyM, keyC;
let highScore = 0