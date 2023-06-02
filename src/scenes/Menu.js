class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }

    preload(){
        this.load.image('car','./assets/orangeTruck2.png')
        this.load.image('road','./assets/road2.png')
        this.load.image('ball','./assets/sun2.png')
        this.load.image('bar','./assets/bar.png')
        this.load.image('arrow', './assets/arrow.png')
        this.load.image('cloud', './assets/cloud2.png')
        this.load.image('darkArrow', './assets/darkArrow.png')
        this.load.image('warning', './assets/warning.png')

        // load spritesheet
        //this.load.spritesheet('hero', './assets/hero.png', {frameWidth: 50, frameHeight: 50, startFrame: 0, endFrame: 3});
    
        // load spritesheet
        this.load.spritesheet('explosion', './assets/sunExplosion.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 20});

        this.load.spritesheet('gravity2', './assets/gravity2.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 3});
    
        // load texture atlas
        this.load.atlas('gravity', './assets/gravity.png', './assets/gravity.json')

        this.load.atlas('hero', './assets/heroAtlas.png', './assets/heroAtlas.json')

        this.load.audio('sfx_background', './assets/bgMusic.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_gravity', './assets/PowerUp2.wav')
        //this.load.audio('sfx_gravity4', './assets/synth2.wav');
        //this.load.audio('sfx_gravity3', './assets/PowerUp1.wav');
        
        //his.load.audio('sfx_gravity2', './assets/PowerUp3.wav');
        //this.load.audio('sfx_gravity', './assets/synth.wav');
        this.load.audio('sfx_arrow', './assets/arrow-shot.wav');

    }

    create(){
        // display score
        let menuConfig = {
            fontFamily: 'Sans-serif',
            fontSize: '50px',
            //backgroundColor: '#1AA7EC',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0,
            color: '#2832C2',
            align: 1,
        } 
        
        //show menu text
        this.add.text(game.config.width/2, game.config.height/3, 'SAVE THE SUN!', menuConfig).setOrigin(0.5);
        

        menuConfig.color = '#1AA7EC'
        menuConfig.fontSize = '20px'
    
        this.add.text(game.config.width/2, game.config.height/3 + 50, 'By Dylan Louie', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#A50B5E';
        //menuConfig.color = '#000';

        this.add.text(game.config.width/2, game.config.height/3 + 100, 'Click "G" to Activate Your Gravity Power', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 150, 'Use Arrow Keys to Move and Push', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 200, 'Press the → Button to Continue', menuConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.start('tutorialScene');    
        }
    }
}