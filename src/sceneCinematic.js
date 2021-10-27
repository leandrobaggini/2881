class SceneCinematic extends Phaser.Scene{
    constructor(){
        super({key:"SceneCinematic"});
    }
    create(){
        console.log("Ready Cinematic");
        const mockup = this.add.image(360, 640, 'bgAR');
        mockup.setAlpha(.9);
        let lehmann = this.add.image(360,650, 'btnIniciar');
        lehmann.setScale(.7);
        lehmann.setInteractive();
        lehmann.on('pointerdown',()=> this.arjsActive());
    }
    arjsActive(){
        console.log("Arjs Active!");
        //FUNCIONA.
        let arjsDiv = document.getElementById('arjsDiv');
        arjsDiv.innerHTML = `
        
        <style>
        .buttons {
            position: absolute;
            bottom: 65px;
            left: -10px;
            /*width: 100%;
            height: 5em;
            display: flex;
            justify-content: center;
            align-items: center;*/
            z-index: 20;
        }

        .buttons2{
            position: absolute;
            bottom: 20px;
            left: 60px;
            z-index: 20;
        }

        .buttons4{
            position: absolute;
            bottom: 20px;
            left: 200px;
            z-index: 20;
        }
        
        .buttons3{
            position: absolute;
            bottom: 65px;
            left: 130px;
            z-index: 20;
        }

        .buttons5{
            position: absolute;
            bottom: -20px;
            left: 130px;
            z-index: 20;
        }

        .zocalo{
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
            z-index: 10;
        }

        .arpress{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .headerAR{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn1{
            width: 163px;
            height: 141px;
            transform: scale(.55);
            display: flex;
            /*imagen*/
            background: url(./Assets/img/btnCharacter.png);
            background-repeat: no-repeat;
            background-size: contain;
            border: transparent;
            z-index: 10;
        }

        .btn2{
            width: 163px;
            height: 141px;
            transform: scale(.55);
            display: flex;
            /*imagen*/
            background: url(./Assets/img/btnCameraAR.png);
            background-repeat: no-repeat;
            background-size: contain;
            border: transparent;
            z-index: 10;
        }

        .btn3{
            width: 163px;
            height: 141px;
            transform: scale(.55);
            display: flex;
            /*imagen*/
            background: url(./Assets/img/btnCompartir.png);
            background-repeat: no-repeat;
            background-size: contain;
            border: transparent;
            z-index: 10; 
        }

        .btn4{
            width: 163px;
            height: 141px;
            transform: scale(.55);
            display: flex;
            /*imagen*/
            background: url(./Assets/img/btnCerrar.png);
            background-repeat: no-repeat;
            background-size: contain;
            border: transparent;
            z-index: 10; 
        }

        .btn5{
            width: 163px;
            height: 141px;
            transform: scale(.55);
            display: flex;
            /*imagen*/
            background: url(./Assets/img/btnBase.png);
            background-repeat: no-repeat;
            background-size: contain;
            border: transparent;
            z-index: 10; 
        }
        </style>
        
        <div class="buttons">
            <!--<button class="say-hi-button">TAP</button>-->
            <input class="btn1" type = "button">
        </div>

        <div class="buttons2">
            <input class="btn2" type = "button">
        </div>

        <div class="buttons3">
            <input class="btn3" type = "button">
        </div>

        <div class="buttons4">
            <input class="btn4" type="button">
        </div>

        <div class="buttons5">
            <input class="btn5" type="button">
        </div>

        
        <div>
            <iframe class="arpress" src="ar.html" width="360px" height="640px"></iframe>
            <img class="zocalo" src="./Assets/img/zocalo.png">
            <img class="headerAR" src="./Assets/img/headerAR.png">
        </div>
        `;
        
        if(document.getElementById){
            var el = document.getElementById('container');
            el.style.display = (el.style.display == 'none')?'block': 'none';
        }
    }
}
export {SceneCinematic};