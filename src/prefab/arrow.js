// Rocket prefab
class Arrow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)

        this.speed = 2
    }
    update(){
        if( this.x >= 0 - this.width ){
            this.x -= this.speed
        }
        else{
            this.reset()
            this.y = this.scene.ball02.y
        }
    }
    reset(){
        this.x = game.config.width + this.width
    }
}