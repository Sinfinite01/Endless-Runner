class Road extends Phaser.Scene{
    constructor() {
        super('RoadScene')
        this.VEL = 300  
    }

    preload(){
        this.load.image('car','./assets/orangeTruck.png')
        this.load.image('road','./assets/road.png')
        this.load.image('ball','./assets/ball.png')
        this.load.image('bar','./assets/bar.png')
    }

    create(){

        // variables and settings
        this.JUMP_VELOCITY = -600;    // pixels/second
        this.physics.world.gravity.y = 800; 
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
        this.car01 = this.physics.add.image(game.config.width/5, game.config.height/1.5, 'car').setScale(1);
        this.car01.body.allowGravity = true;
        this.car01.body.immovable = false;
        this.car01.setCollideWorldBounds(true);

        //create Ball
        this.ball01 = this.physics.add.image(game.config.width/5, game.config.height/2, 'ball').setScale(1);
        this.ball01.body.allowGravity = false;
        this.ball01.body.immovable = false;
        this.ball01.setCollideWorldBounds(true);
        this.ball01.setDrag(100)
        this.ball01.body.isCircle = true;

        //create Bar
        this.bar01 = this.physics.add.image(game.config.width/3, game.config.height/2, 'bar').setScale(2);
        this.bar01.body.allowGravity = false;
        this.bar01.body.immovable = false;
        this.bar01.setCollideWorldBounds(true);
        this.bar01.angle = 45
        this.bar01.body.angle = 45
        

        this.ball02 = this.physics.add.image(game.config.width/3, game.config.height/2, 'ball').setScale(1);
        this.ball02.body.allowGravity = false;
        this.ball02.body.immovable = false;
        this.ball02.body.isCircle = true;
        this.ball03 = this.physics.add.image(game.config.width/3 - this.ball02.width/2, game.config.height/2 + this.ball02.height/2, 'ball').setScale(1);
        this.ball03.body.allowGravity = false;
        this.ball03.body.immovable = false;
        this.ball03.body.isCircle = true;
        this.ball04 = this.physics.add.image(game.config.width/3 + this.ball02.width/2, game.config.height/2 - this.ball02.height/2, 'ball').setScale(1);
        this.ball04.body.allowGravity = false;
        this.ball04.body.immovable = false;
        this.ball04.body.isCircle = true;
        this.ball05 = this.physics.add.image(game.config.width/3 - this.ball02.width, game.config.height/2 + this.ball02.height, 'ball').setScale(1);
        this.ball05.body.allowGravity = false;
        this.ball05.body.immovable = false;
        this.ball05.body.isCircle = true;
        this.ball06 = this.physics.add.image(game.config.width/3 + this.ball02.width, game.config.height/2 - this.ball02.height, 'ball').setScale(1);
        this.ball06.body.allowGravity = false;
        this.ball06.body.immovable = false;
        this.ball06.body.isCircle = true;

        // add physics collider
        this.physics.add.collider(this.car01, this.ground);
        this.physics.add.collider(this.bar01, this.ball01);
        this.physics.add.collider(this.ball01, this.ball02);
        this.physics.add.collider(this.ball01, this.ball03);
        this.physics.add.collider(this.ball01, this.ball04);
        this.physics.add.collider(this.ball01, this.ball05);
        this.physics.add.collider(this.ball01, this.ball06);

        // input
        this.cursors = this.input.keyboard.createCursorKeys()

        // Pair Input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(){
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;
    
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.car01.setVelocityY(this.JUMP_VELOCITY);
            //this.car01.setDragY(-1000);
            //this.car01.y -= 5;


        }

        this.direction = new Phaser.Math.Vector2(0)
        if(this.cursors.left.isDown){
            this.direction.x = -1
        } else if(this.cursors.right.isDown){
            this.direction.x = 1
        }
        if(this.cursors.up.isDown){
            this.direction.y = -1
        } else if(this.cursors.down.isDown){
            this.direction.y = 1
        }
        this.direction.normalize()
        this.bar01.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        /*this.ball02.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball03.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball04.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball05.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball06.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        */
    }
}