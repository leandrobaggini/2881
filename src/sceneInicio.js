class SceneInicio extends Phaser.Scene{
    constructor(){
        super({key:"SceneInicio"});
    }
    create(){
        this.add.image(360, 640, 'bgInicio');
        let btnIngresar = this.add.image(360, 800, 'btnIngresar');
            btnIngresar.setInteractive();
            btnIngresar.on('pointerdown',()=>this.scene.start("SceneMenu")); 
    }
}
export {SceneInicio};