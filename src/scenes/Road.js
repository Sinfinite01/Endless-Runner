class Road extends Phaser.Scene{
    constructor() {
        super({key:'RoadScene'})
        
    }

    preload(){
        this.load.image('car','./assets/orangeTruck.png');
        this.load.image('road','./assets/road.png');
    }

    create(){

        // make ground tiles group
        
        /*this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'road').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
        for(let i = tileSize*14; i < game.config.width-tileSize*5; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize*5, 'road').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
        for(let i = tileSize*2; i < game.config.width-tileSize*18; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize*9, 'road').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }*/

        //create Car
        this.car01 = this.physics.add.sprite(game.config.width/5, game.config.height/2, 'car').setScale(1);
        this.car01.body.allowGravity = true;
        this.car01.body.immovable = false;



        this.car01.setCollideWorldBounds(true);

        // add physics collider
        //this.physics.add.collider(this.car, this.ground);

    }

    update(){
        
    }
}