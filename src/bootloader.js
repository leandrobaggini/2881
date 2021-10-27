class Bootloader extends Phaser.Scene{
    constructor(){
        super({key:"Bootloader"});
    }
    preload(){
        console.log("Ready Bootloader!");
        //Completo.
        this.load.on("complete",()=>{
            this.scene.start("SceneInicio");
            console.log("Load Assets!");
        });
        //Carga archivos.
        //Incio
        this.load.image('btnIngresar', './Assets/img/btnIngresar.png');
        this.load.image('bgInicio','./Assets/img/bgInicio.png');
        this.load.image('bgAR','./Assets/img/bgAR.png');
        this.load.image('btnIniciar','./Assets/img/btniniciar.png');
        //Pantalla 1
        this.load.image('lehmann', './Assets/img/hologramLehmann.png');
        this.load.image('mPuerta','Assets/img/mockupPuertas.png');
        this.load.image('backCinematic','Assets/img/inicioCinematic.png');
        this.load.image('infCinematic', 'Assets/img/infCinematic.png'); 
        this.load.image('supCinematic', 'Assets/img/SupCinematic.png');
        //Imagenes antiguas. 
        this.load.image('ripamonti','Assets/img/almacen.jpg');
        this.load.image('hotelToscano','Assets/img/hotelToscano.jpg');
        this.load.image('jefatura','Assets/img/jefatura.jpg');
        this.load.image('mercado','Assets/img/mercado.jpg');
        this.load.image('teatroAvenida','Assets/img/teatroAvenida.jpg');
        this.load.image('correo','Assets/img/correo.jpg');
        this.load.image('scocciroli','Assets/img/scocciroli.png');
        //Pantalla 1.2
        this.load.image('1','./Assets/img/1.png');
        this.load.image('2','./Assets/img/2.png');
        this.load.image('3','./Assets/img/3.png');
        this.load.image('4','./Assets/img/4.png');
        this.load.image('5','./Assets/img/5.png');
        this.load.image('6','./Assets/img/6.png');
        this.load.image('7','./Assets/img/7.png');
        this.load.image('8','./Assets/img/8.png');
        this.load.image('9','./Assets/img/9.png');
        this.load.image('base','./Assets/img/baseNumber.png');
        //Botones.
        this.load.image('btnCamera','./Assets/img/btnCamera.png');
        this.load.image('btnComunity','./Assets/img/btnComunity.png');
        this.load.image('btnOptions','./Assets/img/btnOptions.png');
        this.load.image('btnPlay','./Assets/img/btnPlay.png');
        this.load.image('btnGps','./Assets/img/btnGps.png');
        this.load.image('btnMarker','./Assets/img/btnMarker.png');
        //Video.
        this.load.video('glich', './Assets/video/VHSRETRO.mp4');
        //UI 
        this.load.image('zocalo','./Assets/img/zocalo.png');
        //Music.
        //this.load.audio('music','./Assets/music/Azimuth.mp3');
    }
}
export {Bootloader};