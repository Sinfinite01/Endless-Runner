class Road extends Phaser.Scene{
    constructor() {
        super('RoadScene')
        this.VEL = 300  
    }

    preload(){
        this.load.image('car','./assets/orangeTruck2.png')
        this.load.image('road','./assets/road2.png')
        this.load.image('ball','./assets/sun2.png')
        this.load.image('bar','./assets/bar.png')
        this.load.image('arrow', './assets/arrow.png')
        this.load.image('cloud', './assets/cloud2.png')

        // load spritesheet
        this.load.spritesheet('hero', './assets/hero.png', {frameWidth: 50, frameHeight: 50, startFrame: 0, endFrame: 3});
    
        // load spritesheet
        this.load.spritesheet('explosion', './assets/sunExplosion.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 20});
    }

    create(){

        // variables and settings
        this.JUMP_VELOCITY = -600;    // pixels/second
        this.physics.world.gravity.y = 800; 
        this.SCROLL_SPEED = 1;

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
        this.car01.setBodySize(tileSize, tileSize/2, true)
        this.car01.setCollideWorldBounds(true);

        //create arrows
        this.arrow1 = this.physics.add.image(-500, game.config.height/2, 'arrow')
        this.arrow1.body.allowGravity = false;
        this.arrow1.body.immovable = false;


        //create Ball
        /*this.ball01 = this.physics.add.image(game.config.width/5, game.config.height/2, 'ball').setScale(0.3);
        this.ball01.body.allowGravity = false;
        this.ball01.body.immovable = false;
        this.ball01.setCollideWorldBounds(true,1,1);
        //this.ball01.setDrag(50)
        this.ball01.body.isCircle = true;
        this.ball01.body.setBounce(1,1)
        */




        //create Bar
        /*this.bar01 = this.physics.add.image(game.config.width/3, game.config.height/2, 'bar').setScale(2);
        this.bar01.body.allowGravity = false;
        this.bar01.body.immovable = false;
        this.bar01.setCollideWorldBounds(true);*/
        //this.bar01.angle = 45
        //this.bar01.body.angle = 45
        

        this.sun1 = this.physics.add.sprite(game.config.width/3, game.config.height/2, 'ball').setScale(1);
        this.sun1.body.allowGravity = false;
        this.sun1.body.immovable = false;
        this.sun1.body.isCircle = true;
        this.sun1.setDepth(1)
        //this.ball02.body.setBounce(1,1)
        this.sun1.setCollideWorldBounds(true,1,1);
        this.sun1.setDrag(100)

        /*this.ball03 = this.physics.add.image(game.config.width/3 - this.ball02.width/2, game.config.height/2 + this.ball02.height/2, 'ball').setScale(1);
        this.ball03.body.allowGravity = false;
        this.ball03.body.immovable = false;
        this.ball03.body.isCircle = true;
        this.ball03.body.setBounce(1,1)
        this.ball03.setCollideWorldBounds(true,1,1);
        this.ball04 = this.physics.add.image(game.config.width/3 + this.ball02.width/2, game.config.height/2 - this.ball02.height/2, 'ball').setScale(1);
        this.ball04.body.allowGravity = false;
        this.ball04.body.immovable = false;
        this.ball04.body.isCircle = true;
        this.ball04.body.setBounce(1,1)
        this.ball04.setCollideWorldBounds(true,1,1)
        this.ball05 = this.physics.add.image(game.config.width/3 - this.ball02.width, game.config.height/2 + this.ball02.height, 'ball').setScale(1);
        this.ball05.body.allowGravity = false;
        this.ball05.body.immovable = false;
        this.ball05.body.isCircle = true;
        this.ball05.body.setBounce(1,1)
        this.ball05.setCollideWorldBounds(true,1,1);
        this.ball06 = this.physics.add.image(game.config.width/3 + this.ball02.width, game.config.height/2 - this.ball02.height, 'ball').setScale(1);
        this.ball06.body.allowGravity = false;
        this.ball06.body.immovable = false;
        this.ball06.body.isCircle = true;
        this.ball06.body.setBounce(1,1)
        this.ball06.setCollideWorldBounds(true,1,1);*/
        
        /*this.ball03.setDrag(50)
        this.ball04.setDrag(50)
        this.ball05.setDrag(50)
        this.ball06.setDrag(50)*/

        this.hero1 = this.physics.add.sprite(game.config.width/5, game.config.height/2, 'hero').setOrigin(0.5, 0.5);
        this.hero1.body.height = 40
        this.hero1.body.allowGravity = false;
        this.hero1.body.immovable = false;

        // add physics collider
        this.physics.add.collider(this.car01, this.ground);
        //this.physics.add.collider(this.bar01, this.ball01);
        this.physics.add.collider(this.hero1, this.sun1);
        /*this.physics.add.collider(this.hero1, this.ball03);
        this.physics.add.collider(this.hero1, this.ball04);
        this.physics.add.collider(this.hero1, this.ball05);
        this.physics.add.collider(this.hero1, this.ball06);*/

        // input
        this.cursors = this.input.keyboard.createCursorKeys()

        // Pair Input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.spawnArrow = false;


        


        // animation config
        this.anims.create({
            key: 'heroCape',
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3, first: 0}),
            frameRate: 10
        })
        
        // Create Clouds
        this.cloud1 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud2 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud3 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud4 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud5 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud6 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);

        // Create Lunar Arrows
        this.arrow1 = new Arrow(this, game.config.width + this.arrow1.width, game.config.height*Math.random(), 'arrow', 0).setOrigin(0.5, 0.5);
        this.arrow2 = new Arrow(this, game.config.width + this.arrow1.width*3, game.config.height*Math.random(), 'arrow', 0).setOrigin(0.5, 0.5);
        this.arrow3 = new Arrow(this, game.config.width + this.arrow1.width*5, game.config.height*Math.random(), 'arrow', 0).setOrigin(0.5, 0.5);

        this.gameOver = false

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 19, first: 0}),
            frameRate: 30
        });
    }

    update(){
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;

        this.sun1.angle += 0.5
    
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.car01.setVelocityY(this.JUMP_VELOCITY);
            //this.car01.setDragY(-1000);
            //this.car01.y -= 5;

            //this.hero1.anims.play('heroCape')
        }

        if(!this.hero1.anims.isPlaying){
            this.hero1.anims.play('heroCape')
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
        //this.bar01.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.hero1.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        /*this.ball02.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball03.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball04.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball05.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        this.ball06.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
        */

        //Gravity Power
        this.VELGravity = this.VEL/5*4
        this.direction2 = new Phaser.Math.Vector2(0)
        if(Phaser.Input.Keyboard.JustDown(keyG)){

            this.distX = Math.abs(this.hero1.x - this.sun1.x)
            this.distY = Math.abs(this.hero1.y - this.sun1.y)

            if(this.hero1.x < this.sun1.x){
                this.direction2.x = -1 * ( (this.distX) / (this.distX + this.distY) )
            } else{
                this.direction2.x = 1 * ( (this.distX) / (this.distX + this.distY) )
            }

            if(this.hero1.y < this.sun1.y){
                this.direction2.y = -1 * ( (this.distY) / (this.distX + this.distY) )
            } else{
                this.direction2.y = 1 * ( (this.distY) / (this.distX + this.distY) )
            }

            this.direction2.normalize()
            this.sun1.setVelocity(this.VELGravity * this.direction2.x, this.VELGravity * this.direction2.y)

        }

        if(!this.gameOver){
            this.cloud1.update()
            this.cloud2.update()
            this.cloud3.update()
            this.cloud4.update()
            this.cloud5.update()
            this.cloud6.update()

            this.arrow1.update()
            this.arrow2.update()
            this.arrow3.update()
        }

        if(this.checkCollision(this.sun1, this.arrow1)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true
        }  
        if(this.checkCollision(this.sun1, this.arrow2)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true
        }  
        if(this.checkCollision(this.sun1, this.arrow3)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true
        }       
        
        //this.hero1.anims.play('heroCape')

        //if(!hero1.anims.isPlaying()){
        //    hero1.anims.play('hero');
        //}

        //check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            //this.backgroundMusic.stop();
            this.scene.restart();
            //this.backgroundMusic.play();
            //this.initTime = this.time.now;
        }
        
    }

    checkCollision(sun, arrow) {
        // simple AABB checking
        if (sun.x - sun.width/2 < arrow.x + arrow.width/2 && 
          sun.x + sun.width/2 > arrow.x - arrow.width/2 && 
          sun.y - sun.height/2 < arrow.y + arrow.height/2 &&
          sun.height/2 + sun.y > arrow. y - arrow.height/2) {
          return true;
        } else {
          return false;
        }
    }

    sunExplode(sun) {
        // temporarily hide sun
        sun.alpha = 0;
        //this.scoreConfig.color = '#3BB143';
        // create explosion sprite at ship's position
        let boom = this.add.sprite(sun.x, sun.y, 'explosion').setOrigin(0.5, 0.5);
        boom.angle = sun.angle
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          /*sun.reset();                         // reset sun position
          sun.alpha = 1;*/
          sun.x = -100                       // make sun visible again
          boom.destroy();                       // remove explosion sprite
        });  

        /*this.explosionNum =  Math.floor(Math.random()*4); 
        if(this.explosionNum == 0){
            this.sound.play('sfx_explosion1');
        }
        else if(this.explosionNum == 1){
            this.sound.play('sfx_explosion2');
        }    
        else if(this.explosionNum == 2){
            this.sound.play('sfx_explosion3');
        }
        else if(this.explosionNum == 3){
            this.sound.play('sfx_explosion4');
        }*/

    }
    
}