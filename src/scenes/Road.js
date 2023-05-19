class Road extends Phaser.Scene{
    constructor() {
        super('RoadScene')  
    }

    preload(){
        this.load.image('car','./assets/orangeTruck.png');
        this.load.image('road','./assets/road.png');
    }

    create(){

        // variables and settings
        this.MAX_VELOCITY = 100;    // pixels/second
        this.physics.world.gravity.y = 700; 
        this.SCROLL_SPEED = 2;

        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'road').setScale(1).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            groundTile.body.setSize(tileSize,tileSize/2,false)
            groundTile.body.setOffset(0,tileSize/2)
            this.ground.add(groundTile);
        }
        for(let i = tileSize*14; i < game.config.width-tileSize*5; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize*5, 'road').setScale(1).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            groundTile.body.setSize(tileSize,tileSize/2,false)
            groundTile.body.setOffset(0,tileSize/2)
            this.ground.add(groundTile);
        }
        for(let i = tileSize*2; i < game.config.width-tileSize*18; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize*9, 'road').setScale(1).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            groundTile.body.setSize(tileSize,tileSize/2,false)
            groundTile.body.setOffset(0,tileSize/2)
            this.ground.add(groundTile);
        }

        // put another tile sprite above the ground tiles
        this.groundScroll = this.add.tileSprite(0, game.config.height-tileSize, game.config.width, tileSize, 'road').setOrigin(0);


        //create Car
        this.car01 = this.physics.add.image(game.config.width/5, game.config.height/2, 'car').setScale(1);
        this.car01.body.allowGravity = true;
        this.car01.body.immovable = false;

        this.car01.setCollideWorldBounds(true);

        // add physics collider
        this.physics.add.collider(this.car01, this.ground);

    }

    update(){
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;
    }
}