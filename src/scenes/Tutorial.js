class Tutorial extends Phaser.Scene{
    constructor(){
        super('tutorialScene')
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
        menuConfig.fontSize = '30px'
    
        //his.add.text(game.config.width/2, game.config.height/3 + 50, 'By Dylan Louie', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#A50B5E';
        //menuConfig.color = '#000';

        //this.add.text(game.config.width/2, game.config.height/3 + 100, 'Click "G" to Activate Your Gravity Power', menuConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height/3 , 'Hou Yi the archer is trying to shoot down the final Sun!', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '50px'
        this.add.text(game.config.width/2, game.config.height/3 + 100, 'Help the Sun Escape the arrows!', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 100 + 100, 'Press the → Button to Continue', menuConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.start('RoadScene');    
        }
    }
}