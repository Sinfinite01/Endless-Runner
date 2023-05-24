// Rocket prefab
class Arrow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)


    }
    update(){

    }
    reset(){
        this.x = game.config.width + this.width
    }
}