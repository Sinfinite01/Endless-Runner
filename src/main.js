let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    backgroundColor: '#ADD8E6',
    width: 640,
    height: 240,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
    //scene: [ ]
}

const game = new Phaser.Game(config)