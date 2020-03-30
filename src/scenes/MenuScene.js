import { CST } from "../CST";

export class MenuScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.MENU
		});
	}

	init() {

	}

	preload() {
		//Animations
		this.anims.create({
			key: "walk",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.PLAYER, {
				frames: [1, 2]
			})
		});

		//Background
		this.add.image(0, 0, CST.IMAGE.TITLE).setOrigin(0).setDepth(0);

		//Title
		this.add.image(400, 75, CST.IMAGE.LOGO);
	}

	create() {
		
		//Options
		let playButton = this.add.image(50, 300, CST.IMAGE.PLAY).setOrigin(0);
		let optionButton = this.add.image(50, 400, CST.IMAGE.OPTIONS).setOrigin(0);
		let creditButton = this.add.image(50, 500, CST.IMAGE.CREDITS).setOrigin(0);
	
		//Sprite
		let player = this.add.sprite(600, 400, CST.SPRITE.PLAYER);

		//Audio
		let bg_music = this.sound.add(CST.AUDIO.MAIN, {
			loop: true
		});
		bg_music.setVolume(0.1);
		bg_music.play();

		player.play("walk");

		//Play Button
		playButton.setInteractive();

		playButton.on("pointerover", ()=>{
			playButton.x += 5;
			playButton.y += 5;
		});

		playButton.on("pointerout", ()=>{
			playButton.x -= 5;
			playButton.y -= 5;
		});

		playButton.on("pointerdown", ()=>{
			playButton.setScale(0.9);
		});

		playButton.on("pointerup", ()=>{
			playButton.setScale(1);
			bg_music.stop();
			this.scene.start(CST.SCENES.PLAY);
		});

		//Options Button
		optionButton.setInteractive();

		optionButton.on("pointerover", ()=>{
			optionButton.x += 5;
			optionButton.y += 5;
		});

		optionButton.on("pointerout", ()=>{
			optionButton.x -= 5;
			optionButton.y -= 5;
		});

		optionButton.on("pointerdown", ()=>{
			optionButton.setScale(0.9);
		});

		optionButton.on("pointerup", ()=>{
			optionButton.setScale(1);
			this.scene.launch(CST.SCENES.OPTION);
		});

		//Credits Button
		creditButton.setInteractive();

		creditButton.on("pointerover", ()=>{
			creditButton.x += 5;
			creditButton.y += 5;
		});

		creditButton.on("pointerout", ()=>{
			creditButton.x -= 5;
			creditButton.y -= 5;
		});

		creditButton.on("pointerdown", ()=>{
			creditButton.setScale(0.9);
		});

		creditButton.on("pointerup", ()=>{
			creditButton.setScale(1);
			this.scene.launch(CST.SCENES.CREDIT);
		});
	}

	update() {

	}
}