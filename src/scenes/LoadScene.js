import { CST } from "../CST";

export class LoadScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.LOAD
		});
	}

	init() {

	}

	loadImages() {
		this.load.setPath("./assets/image");

		for (let prop in CST.IMAGE) {
			this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
		}
	}

	loadAudio() {
		this.load.setPath("./assets/audio");

		for (let prop in CST.AUDIO) {
			this.load.audio(CST.AUDIO[prop], CST.AUDIO[prop]);
		}
	}

	loadSprites() {
		this.load.setPath("./assets/sprite");

		this.load.spritesheet(CST.SPRITE.PLAYER, CST.SPRITE.PLAYER, {
			frameHeight: 78,
			frameWidth: 65
		});

		this.load.spritesheet(CST.SPRITE.HEART, CST.SPRITE.HEART, {
			frameHeight: 27,
			frameWidth: 27
		});

		this.load.spritesheet(CST.SPRITE.ENEMY01, CST.SPRITE.ENEMY01, {
			frameHeight: 54,
			frameWidth: 58
		});

		this.load.spritesheet(CST.SPRITE.ENEMY02, CST.SPRITE.ENEMY02, {
			frameHeight: 49,
			frameWidth: 100
		});
	}

	preload() {

		this.loadImages();
		this.loadAudio();
		this.loadSprites();

		//Create Loading Bar
		let loadingBar = this.add.graphics({
			fillStyle: {
				color: 0xffffff
			}
		});

		this.load.on("progress", (percent)=>{
			loadingBar.fillRect(
				0,
				this.game.renderer.height / 2,
				this.game.renderer.width * percent, 50);
		});
	}

	//Mandatory
	create() {
		this.scene.start(CST.SCENES.MENU);
	}
}