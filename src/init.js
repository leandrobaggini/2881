import {Bootloader} from './bootloader.js';
import {SceneInicio} from './sceneInicio.js';
import {SceneMenu} from './sceneMenu.js';
import {SceneCinematic} from './sceneCinematic.js';

const config ={
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    parent: "container",
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    resolution: 1,
    scene:[
        Bootloader,
        SceneInicio,
        SceneMenu,
        SceneCinematic
    ],
}

var game = new Phaser.Game (config);