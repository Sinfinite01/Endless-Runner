// Rocket prefab
class Arrow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)

        this.speed = 2
    }
    update(){

        //this.scene.physics.add

        if( this.x >= 0 - this.width ){
            this.x -= this.speed
        }
        else{
            this.reset()
            this.y = this.scene.sun1.y
            this.speed += 0.1
        }
    }
    reset(){
        this.x = game.config.width + this.width
    }
}