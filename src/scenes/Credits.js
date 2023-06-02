class Credits extends Phaser.Scene{
    constructor(){
        super('creditsScene')
    }

    preload(){

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
        //this.add.text(game.config.width/2, game.config.height/3, 'SAVE THE SUN!', menuConfig).setOrigin(0.5);
        

        menuConfig.color = '#1AA7EC'
        menuConfig.fontSize = '40px'
    
        //his.add.text(game.config.width/2, game.config.height/3 + 50, 'By Dylan Louie', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#A50B5E';
        //menuConfig.color = '#000';

        //this.add.text(game.config.width/2, game.config.height/3 + 100, 'Click "G" to Activate Your Gravity Power', menuConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height/7 , 'Credits for Sound:', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/7*2 , 'I made gravity, explosion sfx in https://sfxr.me/', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '15px'
        this.add.text(game.config.width/2, game.config.height/7*3 , 'Piano Background by Nick_Simon-Adams https://freesound.org/people/Nick_Simon-Adams/sounds/647614/', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '18px'
        this.add.text(game.config.width/2, game.config.height/7*4 , 'Regular Arrow Shot by brendan89 https://freesound.org/people/brendan89/sounds/321552/', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '40px'
        this.add.text(game.config.width/2, game.config.height/7*5 , 'Help the Sun Escape the arrows!', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/7*6, 'Press the → Button to Play', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/7*8, 'Press the M Button to Menu', menuConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        

        
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.start('RoadScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene');    
        }
    }
}