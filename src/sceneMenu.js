class SceneMenu extends Phaser.Scene{
    constructor(){
        super({key:"SceneMenu"});
    }
    create(){
        console.log("Ready Menu!");
        //Pantalla 1.
        this.add.image(360,640,'backCinematic');
        let computadora = this.add.image(360,1000,'infCinematic');
            computadora.setInteractive();
            computadora.on('pointerdown',()=> this.cinematicTxt.setAlpha(0));
            computadora.on('pointerdown',()=> this.UI.setAlpha(1));
        
        //Music
        /*
        this.music = this.sound.add('music');
        this.music.setVolume(1);
        this.music.play();
        */
        //CINEMATICA FUTURO.
        
        this.proyecion = this.add.image(60,200,'supCinematic');
        this.Animproyecion = this.add.tween({
            targets: this.proyecion,
            x: '+=600',
            ease: 'Linear',
            duration: 15000,
            yoyo: true,
            repeat: -1
        });

        //IMAGENES ANTIGUAS.

        this.almacenR = this.add.image(300, 260, 'ripamonti');
            this.almacenR.setScale(.7);
            this.almacenR.setAlpha(0);
        this.Animalmacen = this.add.tween({
            targets: this.almacenR,
            x: '+=100',
            ease: 'Linear',
            duration: 10000,
            yoyo: true,
            repeat: -1
        });

        this.scocciroli = this.add.image(318,275, 'scocciroli');
            this.scocciroli.setScale(1.35);
            this.scocciroli.setAlpha(0);
        this.AniScocciroli = this.add.tween({
            targets: this.scocciroli,
            x: '+=50',
            ease: 'Linear',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });

        this.hotel = this.add.image(314,278, 'hotelToscano');
            this.hotel.setScale(.47);
            this.hotel.setAlpha(0);
        this.AniHotel = this.add.tween({
            targets: this.hotel,
            x: '+=80',
            ease: 'Linear',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });

        this.jefatura = this.add.image(304, 278, 'jefatura');
            this.jefatura.setScale(.48);
            this.jefatura.setAlpha(0);
        this.AniJefatura = this.add.tween({
            targets: this.jefatura,
            x: '+=80',
            ease: 'Linear',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });

        this.mercado = this.add.image(290, 276, 'mercado');
            this.mercado.setScale(.50);
            this.mercado.setAlpha(0);
        this.AniMercado = this.add.tween({
            targets: this.mercado,
            x: '+=80',
            ease: 'Linear',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });
        
        this.teatro = this.add.image(289,278,'teatroAvenida');
            this.teatro.setScale(.5);
            this.teatro.setAlpha(0);
        this.AniTeatro = this.add.tween({
            targets: this.teatro,
            x:'+=100',
            ease: 'Linear',
            duration: 8000,
            yoyo: true,
            repeat: -1
        });

        this.correo = this.add.image(289, 279, 'correo');
            this.correo.setScale(.5);
            this.correo.setAlpha(0);

         //Pantalla 2.
    let btnPlay = this.add.image(360,700, 'btnPlay').setInteractive();
        btnPlay.on('pointerdown',()=> this.mt2881.setAlpha(1)); 
        btnPlay.on('pointerdown',()=> this.baseMaquina.setAlpha(1));  
        btnPlay.on('pointerdown',()=> this.UI.setAlpha(0)); 
        btnPlay.on('pointerdown',()=> this.textp2.setAlpha(1));
        btnPlay.on('pointerdown',()=> this.proyecion.setAlpha(0));
        btnPlay.on('pointerdown',()=> this.viGlich.setAlpha(1));
        btnPlay.on('pointerdown',()=> this.viGlich.play());
        btnPlay.on('pointerdown',()=> this.btnDecadas.setAlpha(1));
        btnPlay.on('pointerdown',()=> this.lehmann.setAlpha(.9));

    let btnCamera = this.add.image(100, 1000, 'btnCamera');
    let btnOptions = this.add.image(360, 1000, 'btnOptions');
    let btnComunity = this.add.image(620, 1000, 'btnComunity');

    this.UI = this.add.container(0,0,[btnPlay, btnCamera, btnOptions, btnComunity]).setAlpha(0);

        let textTitulos = [
            "Rafaela, 24 de Octubre 2881",
            "CENTRO DE ESCANEO MUNICIPAL"
        ];

        let textparrafo = [
            "Los avances tecnologicos permitieron activar mentes humanas",
            "rescatando su ADN, Rafaela cumple 1000 años por este motivo",
            "nos atrevimos a revivir la mente de su FORMADOR.",
            "Nos llevamos una gran sorpresa, el nos mostro puertas",
            "secretas que nos llevan a traves de los años...Sumate a esta",
            "AVENTURA."
        ];
        
        let textparrafo2 = [
            "La maquina se gasto con el paso de los años y esta dañada",
            "pero aun podemos viajar a los siguientes años.",
            "TOCA PARA CONTINUAR"
        ];

        let textparraf2_1 = [
            "Selecciona el año al que quieres ir"
        ];

        let textparrafo3 = [
            "Vas a poder conocer mis tiempos de dos formas",
            "Puedes ver la representacion desde la tranquilidad",
            "de tu casa presionando el boton de la izquierda",
            "Puedes ver el modelo antiguo en el lugar actual y repesentarlo",
            "en la calle presionando el boton de la derecha"
        ];

        let textContinuar = [
            "TOCA PARA CONTINUAR..."
        ];

        this.textCont = this.add.text(170, 1150, textContinuar,{font:'30px nasalization-rg'});
        this.textCont.setTintFill(0x09ecff, 0x09ecff, 0x09ecff, 0x09ecff);
        this.textCont.setInteractive();
        this.textCont.on('pointerdown',()=> this.cinematicTxt.setAlpha(0));
        this.textCont.on('pointerdown',()=> this.UI.setAlpha(1));
        this.textCont.on('pointerdown',()=> this.textCont.destroy());

        let textT = this.add.text(90, 580, textTitulos, {font:'30px nasalization-rg'});
            textT.setTintFill(0x09ecff, 0x09ecff, 0x09ecff, 0x09ecff);
            textT.setAlign('center');
            textT.setLineSpacing(10);

        let textp = this.add.text(20, 670, textparrafo, {font: '20px nasalization-rg'});
            textp.setTintFill(0x09ecff, 0x09ecff, 0x09ecff, 0x09ecff);
            textp.setAlign('center');
            textp.setLineSpacing(7);
        
        this.textp2 = this.add.text(40,620, textparrafo2, {font: '20px nasalization-rg'});
        this.textp2.setTintFill(0x09ecff, 0x09ecff, 0x09ecff, 0x09ecff);
        this.textp2.setAlign('center');
        this.textp2.setLineSpacing(7);
        this.textp2.setAlpha(0);
        this.textp2.setInteractive();
        this.textp2.on('pointerdown',()=>this.textp2_1.setAlpha(1));
        this.textp2.on('pointerdown',()=>this.textp2.destroy());
        
        this.textp2_1 = this.add.text(160, 620, textparraf2_1, {font: '20px nasalization-rg'});
        this.textp2_1.setTintFill(0x09ecff, 0x09ecff, 0x09ecff, 0x09ecff);
        this.textp2_1.setAlpha(0);
        
        this.textp3 = this.add.text(20,580, textparrafo3, {font: '20px nasalization-rg'});
        this.textp3.setTintFill(0x09ecff, 0x09ecff, 0x09ecff, 0x09ecff);
        this.textp3.setAlign('center');
        this.textp3.setLineSpacing(7);
        this.textp3.setInteractive();
        this.textp3.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.textp3.setAlpha(0);

        this.cinematicTxt = this.add.container(0,0, [textT, textp, computadora]);
        
        this.piePagina = this.add.text(170, 1230, 'Desarrollado por Cosmo Games S.A.S',{font:'18px nasalization-rg'});
        
        //Año 1899
        //slot1
        let imgNumber1_1899 = this.add.image(155, 1055, '1');
            imgNumber1_1899.setScale(.4);
        //slot2
        let imgNumber8_1899 = this.add.image(295, 1055, '8');
            imgNumber8_1899.setScale(.4);
        //slot3
        let imgNumber9_1899 = this.add.image(425, 1055, '9');
            imgNumber9_1899.setScale(.4);
        //slot4
        let imgNumber9_4_1899 = this.add.image(560, 1055, '9');
            imgNumber9_4_1899.setScale(.4);

        this.mt1899 = this.add.container(0,0, [imgNumber1_1899, imgNumber8_1899, imgNumber9_1899,imgNumber9_4_1899]);
        this.mt1899.setAlpha(0);

        //Año 1923
        //slot1
        let imgNumber1_1923 = this.add.image(155, 1055, '1');
            imgNumber1_1923.setScale(.4);
        //slot2
        let imgNumber9_1923 = this.add.image(295, 1055, '9');
            imgNumber9_1923.setScale(.4);
        //slot3
        let imgNumber2_1923 = this.add.image(425, 1055, '2');
            imgNumber2_1923.setScale(.4);
        //slot4
        let imgNumber3_1923 = this.add.image(560, 1055, '3');
            imgNumber3_1923.setScale(.4);

        this.mt1923 = this.add.container(0,0, [imgNumber1_1923, imgNumber9_1923, imgNumber2_1923, imgNumber3_1923]);
        this.mt1923.setAlpha(0);

        //Año 1931
        //slot1
        let imgNumber1_1931 = this.add.image(155, 1055, '1');
            imgNumber1_1931.setScale(.4);
        //slot2
        let imgNumber9_1931 = this.add.image(295, 1055, '9');
            imgNumber9_1931.setScale(.4);
        //slot3
        let imgNumber3_1931 = this.add.image(425, 1055, '3');
            imgNumber3_1931.setScale(.4);
        //slot4
        let imgNumber1_4_1931 = this.add.image(560, 1055, '1');
            imgNumber1_4_1931.setScale(.4);

        this.mt1931 = this.add.container(0,0, [imgNumber1_1931, imgNumber9_1931, imgNumber3_1931, imgNumber1_4_1931]);
        this.mt1931.setAlpha(0);

        //Año 1942
        //slot1
        let imgNumber1_1942 = this.add.image(155, 1055, '1');
            imgNumber1_1942.setScale(.4);
        //slot2
        let imgNumber9_1942 = this.add.image(295, 1055, '9');
            imgNumber9_1942.setScale(.4);
        //slot3
        let imgNumber4_1942 = this.add.image(425, 1055, '4');
            imgNumber4_1942.setScale(.4);
        //slot4
        let imgNumber2_1942 = this.add.image(560, 1055, '2');
            imgNumber2_1942.setScale(.4);

        this.mt1942 = this.add.container(0,0, [imgNumber1_1942, imgNumber9_1942, imgNumber4_1942, imgNumber2_1942]);
        this.mt1942.setAlpha(0);

        //Año 1953
        //slot1
        let imgNumber1_1953 = this.add.image(155, 1055, '1');
            imgNumber1_1953.setScale(.4);
        //slot2
        let imgNumber9_1953 = this.add.image(295, 1055, '9');
            imgNumber9_1953.setScale(.4);
        //slot3
        let imgNumber5_1953 = this.add.image(425, 1055, '5');
            imgNumber5_1953.setScale(.4);
        //slot4
        let imgNumber3_1953 = this.add.image(560, 1055, '3');
            imgNumber3_1953.setScale(.4);

        this.mt1953 = this.add.container(0,0, [imgNumber1_1953, imgNumber9_1953, imgNumber5_1953, imgNumber3_1953]);
        this.mt1953.setAlpha(0);
        
        //Año 1962
         //slot1
        let imgNumber1_1962 = this.add.image(155, 1055, '1');
             imgNumber1_1962.setScale(.4);
        //slot2
        let imgNumber9_1962 = this.add.image(295, 1055, '9');
            imgNumber9_1962.setScale(.4);
        //slot3
        let imgNumber6_1962 = this.add.image(425, 1055, '6');
            imgNumber6_1962.setScale(.4);
        //slot4
        let imgNumber2_1962 = this.add.image(560, 1055, '2');
            imgNumber2_1962.setScale(.4);

        this.mt1962 = this.add.container(0,0, [imgNumber1_1962, imgNumber9_1962, imgNumber6_1962, imgNumber2_1962]);
        this.mt1962.setAlpha(0);
        
        //Año 2881
        //slot1
        let imgNumber2_2881 = this.add.image(155, 1055, '2');
            imgNumber2_2881.setScale(.4);
        //slot2
        let imgNumber8_2881 = this.add.image(295, 1055, '8');
            imgNumber8_2881.setScale(.4);
        //slot3
        let imgNumber8_2_2881 = this.add.image(425, 1055, '8');
            imgNumber8_2_2881.setScale(.4);
        //slot4
        let imgNumber1_2881 = this.add.image(560, 1055, '1');
            imgNumber1_2881.setScale(.4);

        this.mt2881 = this.add.container(0,0, [imgNumber2_2881, imgNumber8_2881, imgNumber8_2_2881, imgNumber1_2881]);
        this.mt2881.setAlpha(0);
        
        //Base maquina
        let imgBase = this.add.image(360, 1195, 'base');
            imgBase.setScale(.53);
            imgBase.setInteractive();
            imgBase.on('pointerdown', () => this.viGlich.setAlpha(1));
            imgBase.on('pointerdown',()=> this.textp2.setAlpha(0));
            imgBase.on('pointerdown',()=> this.textp3.setAlpha(1));

        this.baseMaquina = this.add.container(0,0, [imgBase]).setAlpha(0);
        
       //Botonoes Años.
       //Boton 1899.
        this.btnA1 = this.add.text(50, 1190, '1899', {font: '30px nasalization-rg'});
        this.btnA1.setInteractive();
        this.btnA1.on('pointerdown',()=>this.textp3.setAlpha(1));
        this.btnA1.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.btnA1.on('pointerdown',()=>this.textp2_1.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.viGlich.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.viGlich.stop());
        this.btnA1.on('pointerdown',()=> this.almacenR.setAlpha(1));
        //
        this.btnA1.on('pointerdown',()=> this.mt1899.setAlpha(1));
        this.btnA1.on('pointerdown',()=> this.mt2881.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.mt1923.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.mt1931.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.mt1942.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.mt1953.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.mt1962.setAlpha(0));
        this.btnA1.on('pointerdown',()=> this.scocciroli.setAlpha(0));
        this.btnA1.on('pointerdown',()=>this.hotel.setAlpha(0));
        this.btnA1.on('pointerdown',()=>this.jefatura.setAlpha(0));
        this.btnA1.on('pointerdown',()=>this.mercado.setAlpha(0));
        this.btnA1.on('pointerdown',()=>this.teatro.setAlpha(0));

        //Boton 1923
        this.btnA2 = this.add.text(160, 1190, '1923', {font: '30px nasalization-rg'});
        this.btnA2.setInteractive();
        this.btnA2.on('pointerdown',()=>this.textp3.setAlpha(1));
        this.btnA2.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.btnA2.on('pointerdown',()=>this.textp2_1.setAlpha(0));
        this.btnA2.on('pointerdown',()=> this.viGlich.setAlpha(0));
        this.btnA2.on('pointerdown',()=> this.viGlich.stop());
        this.btnA2.on('pointerdown',()=> this.scocciroli.setAlpha(1));
        //
        this.btnA2.on('pointerdown', ()=> this.mt1931.setAlpha(0));
        this.btnA2.on('pointerdown', ()=> this.mt1923.setAlpha(1));
        this.btnA2.on('pointerdown', ()=> this.mt1899.setAlpha(0));
        this.btnA2.on('pointerdown', ()=> this.mt2881.setAlpha(0));
        this.btnA2.on('pointerdown',() => this.mt1942.setAlpha(0));
        this.btnA2.on('pointerdown',() => this.mt1953.setAlpha(0));
        this.btnA2.on('pointerdown',() => this.mt1962.setAlpha(0));
        this.btnA2.on('pointerdown',()=> this.almacenR.setAlpha(0));
        this.btnA2.on('pointerdown',()=>this.hotel.setAlpha(0));
        this.btnA2.on('pointerdown',()=>this.jefatura.setAlpha(0));
        this.btnA2.on('pointerdown',()=>this.mercado.setAlpha(0));
        this.btnA2.on('pointerdown',()=>this.teatro.setAlpha(0));

        //Boton 1931
        this.btnA3 = this.add.text(270, 1190, '1931', {font: '30px nasalization-rg'});
        this.btnA3.setInteractive();
        this.btnA3.on('pointerdown',()=>this.textp3.setAlpha(1));
        this.btnA3.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.btnA3.on('pointerdown',()=>this.textp2_1.setAlpha(0));
        this.btnA3.on('pointerdown',()=> this.viGlich.setAlpha(0));
        this.btnA3.on('pointerdown',()=> this.viGlich.stop());
        this.btnA3.on('pointerdown',()=> this.hotel.setAlpha(1));
        //
        this.btnA3.on('pointerdown',()=>this.mt1931.setAlpha(1));
        this.btnA3.on('pointerdown',()=>this.mt1923.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.mt1899.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.mt2881.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.mt1942.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.mt1953.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.mt1962.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.almacenR.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.scocciroli.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.jefatura.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.mercado.setAlpha(0));
        this.btnA3.on('pointerdown',()=>this.teatro.setAlpha(0));

        this.btnA4 = this.add.text(380, 1190, '1942', {font: '30px nasalization-rg'});
        this.btnA4.setInteractive();
        this.btnA4.on('pointerdown',()=>this.textp3.setAlpha(1));
        this.btnA4.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.btnA4.on('pointerdown',()=>this.textp2_1.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.viGlich.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.viGlich.stop());
        this.btnA4.on('pointerdown',()=>this.jefatura.setAlpha(1));
        //
        this.btnA4.on('pointerdown',()=>this.mt1942.setAlpha(1));
        this.btnA4.on('pointerdown',()=>this.mt1931.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.mt1923.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.mt1899.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.mt2881.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.mt1953.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.mt1962.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.almacenR.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.hotel.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.scocciroli.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.mercado.setAlpha(0));
        this.btnA4.on('pointerdown',()=>this.teatro.setAlpha(0));   

        this.btnA5 = this.add.text(490, 1190, '1953', {font: '30px nasalization-rg'});
        this.btnA5.setInteractive();
        this.btnA5.on('pointerdown',()=>this.textp3.setAlpha(1));
        this.btnA5.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.btnA5.on('pointerdown',()=>this.textp2_1.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.viGlich.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.viGlich.stop());
        this.btnA5.on('pointerdown',()=>this.mercado.setAlpha(1));
        //
        this.btnA5.on('pointerdown',()=>this.mt1953.setAlpha(1));
        this.btnA5.on('pointerdown',()=>this.mt1942.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.mt1931.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.mt1923.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.mt1899.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.mt2881.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.mt1962.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.almacenR.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.hotel.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.jefatura.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.scocciroli.setAlpha(0));
        this.btnA5.on('pointerdown',()=>this.teatro.setAlpha(0)); 

        this.btnA6 = this.add.text(600, 1190, '1962', {font: '30px nasalization-rg'});
        this.btnA6.setInteractive();
        this.btnA6.on('pointerdown',()=>this.textp3.setAlpha(1));
        this.btnA6.on('pointerdown',()=>this.uiar.setAlpha(1));
        this.btnA6.on('pointerdown',()=>this.textp2_1.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.viGlich.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.viGlich.stop());
        this.btnA6.on('pointerdown',()=>this.teatro.setAlpha(1));
        //
        this.btnA6.on('pointerdown',()=>this.mt1899.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mt2881.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mt1923.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mt1931.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mt1942.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mt1953.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mt1962.setAlpha(1));
        this.btnA6.on('pointerdown',()=>this.almacenR.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.hotel.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.jefatura.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.mercado.setAlpha(0));
        this.btnA6.on('pointerdown',()=>this.scocciroli.setAlpha(0));
        
        this.btnDecadas = this.add.container(0,0,[this.btnA1, this.btnA2, this.btnA3, this.btnA4, this.btnA5, this.btnA6]);
        this.btnDecadas.setAlpha(0);

        this.lehmann = this.add.image(150,384, 'lehmann');
            this.lehmann.setScale(.7);
            this.lehmann.setAlpha(0);

        this.btnMarker = this.add.image(150, 830, 'btnMarker');
        this.btnMarker.setInteractive();
        //this.btnMarker.on('pointerdown',()=>this.music.stop());
        this.btnMarker.on('pointerdown',()=>this.scene.start("SceneCinematic"));

        this.btnGps = this.add.image(550, 830, 'btnGps');
        this.btnGps.setInteractive();

        this.uiar = this.add.container(0,0,[this.btnMarker, this.btnGps]);
        this.uiar.setAlpha(0);

        //VIDEO CON GLICH.
        this.viGlich = this.add.video(360, 280, 'glich');
            this.viGlich.setScale(1.15);
            this.viGlich.setMute(true);
            this.viGlich.setLoop(true);
            this.viGlich.setAlpha(0);
            //viGlich.stop();
            //viGlich.setPaused();  
    }
}
export {SceneMenu};