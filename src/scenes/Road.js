class Road extends Phaser.Scene{
    constructor() {
        super('RoadScene')
        this.VEL = 300  
    }

    preload(){
        //this.load.audio('sfx_grav', './assets/PowerUp1.wav'); 

    }

    create(){

        this.anims.create({
            key: 'suck',
            frames: this.anims.generateFrameNames('gravity', {
                prefix: 'gravity (',
                start: 1,
                end: 2,
                suffix: ')'
            }),
            frameRate: 15,
            repeat: 1
        });

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
        

        this.sun1 = this.physics.add.sprite(game.config.width/5, game.config.height/4, 'ball').setScale(1);
        this.sun1.body.allowGravity = false;
        this.sun1.body.immovable = false;
        this.sun1.body.isCircle = true;
        this.sun1.setDepth(3)
        //this.ball02.body.setBounce(1,1)
        this.sun1.setCollideWorldBounds(true,1,1);
        this.sun1.setDrag(75)

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
        this.hero1.setDepth(1)

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
       /* this.anims.create({
            key: 'heroCape',
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3, first: 0}),
            frameRate: 10
        })*/

        this.anims.create({
            key: 'heroCape',
            frames: this.anims.generateFrameNames('hero', {
                prefix: 'heroCape (',
                start: 1,
                end: 4,
                suffix: ')'
            }),
            frameRate: 10,
            repeat: -1
        });
        
        // Create Clouds
        this.cloud1 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud2 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud3 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud4 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud5 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);
        this.cloud6 = new Cloud(this, game.config.width * Math.random(), game.config.height * Math.random() * 0.7, 'cloud', 0).setOrigin(0, 0);

        // Create Lunar Arrows
        //this.arrow1 = new Arrow(this, game.config.width + this.arrow1.width, game.config.height*Math.random(), 'arrow', 0).setOrigin(0.5, 0.5);
        //this.arrow2 = new Arrow(this, game.config.width + this.arrow1.width*3, game.config.height*Math.random(), 'arrow', 0).setOrigin(0.5, 0.5);
        //this.arrow3 = new Arrow(this, game.config.width + this.arrow1.width*5, game.config.height*Math.random(), 'arrow', 0).setOrigin(0.5, 0.5);

        this.arrow1 = this.physics.add.sprite(game.config.width + this.arrow1.width, game.config.height*Math.random(), 'arrow').setOrigin(0.5, 0.5)
        this.arrow2 = this.physics.add.sprite(game.config.width + this.arrow1.width*3.5, game.config.height*Math.random(), 'arrow').setOrigin(0.5, 0.5)
        this.arrow3 = this.physics.add.sprite(game.config.width + this.arrow1.width*5.5, game.config.height*Math.random(), 'arrow').setOrigin(0.5, 0.5)
        this.darkArrow1 = this.physics.add.sprite(game.config.width + this.arrow1.width*7.5, game.config.height*Math.random(), 'darkArrow').setOrigin(0.5, 0.5)

        this.arrow1.body.allowGravity = false;
        this.arrow1.body.immovable = false;
        this.arrow1.setDepth(2)
        this.arrow2.body.allowGravity = false;
        this.arrow2.body.immovable = false;
        this.arrow2.setDepth(2)
        this.arrow3.body.allowGravity = false;
        this.arrow3.body.immovable = false;
        this.arrow3.setDepth(2)
        this.darkArrow1.body.allowGravity = false;
        this.darkArrow1.body.immovable = false;
        this.darkArrow1.setDepth(2)

        this.warning1 = this.add.sprite(game.config.width - 25 , game.config.height*Math.random(), 'warning').setOrigin(0.5, 0.5)
        this.warning1.alpha = 0


        this.gameOver = false

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);


        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 19, first: 0}),
            frameRate: 30
        });

        // animation config
        /*this.anims.create({
            key: 'suck2',
            frames: this.anims.generateFrameNumbers('gravity2', { start: 0, end: 2, first: 0}),
            frameRate: 15
        });*/

        this.endTextShown = false

        /*this.physics.add.collider(this.sun1, this.arrow1, this.sunDeath())
        this.physics.add.collider(this.sun1, this.arrow2, this.sunDeath())
        this.physics.add.collider(this.sun1, this.arrow3, this.sunDeath())
        */

        // add robot
        //this.gravity = this.add.sprite(config.width/2, config.height/2, 'suck');

        this.testPull = this.add.sprite(this.hero1.x,this.hero1.y,'gravity').setOrigin(0.5,0.5).setScale(1.5)
        this.testPull.alpha = 0

        // display score
        this.mainText = {
            fontFamily: 'font1',
            fontSize: '48px',
            color: '#313638',
            align: 1
        }

        //clock
        this.mainText.fontSize = 40
        this.mainText.color = '#4D5558'
        this.clockTime = 0 //amt of seconds on the clock
        this.clockRightCounter = Math.floor(this.clockTime);
        this.addedTime = 0;
        this.scoreRight = this.add.text(896 - 150, 20, 'SCORE: ' + this.clockRightCounter, this.mainText).setOrigin(0.5,0.5);
        //this.scoreRight.fixedWidth = 0;
        //this.scoreRight.align = 'right';
        this.initTime = this.time.now;
        this.clockRightCounter = 0

        

        this.arrowSpeed = 2
        this.darkArrowSpeed = 2

        this.backgroundMusic = this.sound.add('sfx_background').setVolume(0.35)
        if(!this.backgroundMusic.isPlaying){
            this.backgroundMusic.play();
        }

        this.explosionSound = this.sound.add('sfx_explosion').setVolume(0.5)

        this.gravitySound = this.sound.add('sfx_grav').setVolume(0.5)

        this.arrowSound = this.sound.add('sfx_arrow').setVolume(0.4)


        this.arrowSound.play()

        this.clock = this.time.delayedCall(1000, () => {
            this.arrowSound.play()
        }, null, this);

        this.clock = this.time.delayedCall(2000, () => {
            this.arrowSound.play()
        }, null, this);

        this.clock = this.time.delayedCall(3000, () => {
            this.arrowSound.play()
        }, null, this);

        this.gameStart = true
        
    }

    update(){

        
        if(this.gameStart){
            this.clockRightCounter = 0
            this.gameStart = false
            this.initTime = this.time.now
        }

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
        this.VELGravity = this.VEL*5/7
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

            //this.attract(this.hero1)

            this.testPull.alpha = 1
            this.testPull.anims.play('suck')

            this.gravitySound.play()

        }

        this.testPull.x = this.hero1.x+1
        this.testPull.y = this.hero1.y-5
        if(!this.testPull.anims.isPlaying){
            this.testPull.alpha = 0
        }


        if(!this.gameOver){

            if(!this.gameStart){
                //clock
                if(!this.gameOver && !this.tutorial){
                    this.clockRightCounter = Math.floor(this.clockTime) + Math.floor((this.time.now-this.initTime)/1000);
                    this.scoreRight.text = 'SCORE: ' + this.clockRightCounter
                }
            }

            this.cloud1.update()
            this.cloud2.update()
            this.cloud3.update()
            this.cloud4.update()
            this.cloud5.update()
            this.cloud6.update()

            //this.arrow1.update()
            //this.arrow2.update()
            //this.arrow3.update()

            this.arrowUpdate(this.arrow1,this.sun1)
            this.arrowUpdate(this.arrow2,this.sun1)
            this.arrowUpdate(this.arrow3,this.sun1)
            this.darkArrowUpdate(this.darkArrow1,this.sun1)
        }

        if(this.checkCollision(this.sun1, this.arrow1)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true

            if(highScore<this.clockRightCounter){
                highScore = this.clockRightCounter
            }
        }  
        if(this.checkCollision(this.sun1, this.arrow2)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true
            
            if(highScore<this.clockRightCounter){
                highScore = this.clockRightCounter
            }
            
        }  
        if(this.checkCollision(this.sun1, this.arrow3)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true

            if(highScore<this.clockRightCounter){
                highScore = this.clockRightCounter
            }
            
        } 
        if(this.checkCollision(this.sun1, this.darkArrow1)){
            if(!this.gameOver){
                this.sunExplode(this.sun1)
            }
            this.gameOver = true
            if(this.gameOver){
                if(highScore<this.clockRightCounter){
                    highScore = this.clockRightCounter
                }
            }
        } 
        
        
        //this.hero1.anims.play('heroCape')

        //if(!hero1.anims.isPlaying()){
        //    hero1.anims.play('hero');
        //}

        //check key input for restart

        if(!this.backgroundMusic.isPlaying){
            this.backgroundMusic.play();
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            this.backgroundMusic.stop();
            //this.backgroundMusic.stop();
            this.scene.restart();
            //this.backgroundMusic.play();
            this.initTime = this.time.now;
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyM)){
            this.scene.start('menuScene');
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyC)){
            this.scene.start('creditsScene');
        }

        // End Text
        this.endText = {
            fontFamily: 'font1',
            fontSize: '48px',
            color: '#313638',
            align: 1
        }

        
        if(this.gameOver && !this.endTextShown){
            this.add.text(game.config.width/2, game.config.height/2, "Game Over", this.endText)
            this.endText.fontSize = '30px'
            this.add.text(game.config.width/2, game.config.height/2+50, "Press R to Restart", this.endText)
            this.add.text(game.config.width/2, game.config.height/2+50+30, "or M to Menu", this.endText)
            this.add.text(game.config.width/2, game.config.height/2+50+30+30, "or C to Credits", this.endText)
            //this.endText.fontSize = '25px'
            this.add.text(game.config.width/2, game.config.height/2+50+30+30+30, "Highscore: " + highScore, this.endText)
        }
        
        
        
        
    }

    darkArrowUpdate(arrow,sun){
        //this.scene.physics.add

        if( arrow.x >= 0 - arrow.width && arrow.x <= game.config.width + arrow.width){
            arrow.x -= this.darkArrowSpeed
            this.warning1.alpha = 0
        }
        else if(arrow.x > game.config.width + arrow.width){
            arrow.x -= 1.8
            arrow.y = sun.y
            this.warning1.alpha = 1
            this.warning1.y = arrow.y
        }
        else{
            
            arrow.x = game.config.width + arrow.width*2
            arrow.y = sun.y
            this.darkArrowSpeed += 0.4
            this.arrowSound.play()
            
        }
    }


    //random and increasing challenge
    arrowUpdate(arrow,sun){
        //this.scene.physics.add

        if( arrow.x >= 0 - arrow.width && arrow.x <= game.config.width + arrow.width){
            arrow.x -= this.arrowSpeed
        }
        else if(arrow.x > game.config.width + arrow.width){
            arrow.x -= 1.8
            //arrow.y = sun.y
        }
        else{
            
            arrow.x = game.config.width + arrow.width*2
            arrow.y = game.config.height * Math.random()
            this.arrowSpeed += 0.1 / 2
            this.arrowSound.play()
            
        }
    }

    sunDeath(){
        if(!this.gameOver){
            this.sunExplode(this.sun1)
        }
        this.gameOver = true   
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

    /*attract(hero){
        let pull = this.add.sprite(hero.x,hero.y,'gravity2').setOrigin(0.5,0.5).setScale(1.5)
        pull.anims.play('suck2')
        pull.on('animationcomplete', () => { 
            pull.destroy()
        })


    }*/

    sunExplode(sun) {
        // temporarily hide sun
        sun.alpha = 0;
        //this.scoreConfig.color = '#3BB143';
        // create explosion sprite at ship's position
        let boom = this.add.sprite(sun.x, sun.y, 'explosion').setOrigin(0.5, 0.5);
        boom.angle = sun.angle
        boom.anims.play('explode');  
        this.explosionSound.play()           // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          /*sun.reset();                         // reset sun position
          sun.alpha = 1;*/
          sun.x = -100
                                 // make sun visible again
          boom.destroy();  
                           // remove explosion sprite
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