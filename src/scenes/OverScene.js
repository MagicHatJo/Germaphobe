import { CST } from "../CST";

export class OverScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.OVER
		});
	}

	init(data) {
		this.score = data.score;
	}

	preload() {
		//Background
		this.add.image(0, 0, CST.IMAGE.OVER).setOrigin(0).setDepth(0);

		this.time = this.add.text(200, 250, this.score.text, {
			fontFamily: 'Arial',
			fontSize: 60,
			color: "#B8B8B8",
		}).setDepth(1);
		this.time.setX(200 - (this.time.displayWidth / 2));
	}

	create() {
		let retryButton = this.add.image(25, 400, CST.IMAGE.RETRY).setOrigin(0);
		let mainButton = this.add.image(25, 500, CST.IMAGE.MAIN).setOrigin(0);


		//Retry Button
		retryButton.setInteractive();

		retryButton.on("pointerover", ()=>{
			retryButton.x += 5;
			retryButton.y += 5;
		});

		retryButton.on("pointerout", ()=>{
			retryButton.x -= 5;
			retryButton.y -= 5;
		});

		retryButton.on("pointerdown", ()=>{
			retryButton.setScale(0.9);
		});

		retryButton.on("pointerup", ()=>{
			retryButton.setScale(1);
			this.scene.start(CST.SCENES.PLAY);
		});

		//Main Menu Button
		mainButton.setInteractive();

		mainButton.on("pointerover", ()=>{
			mainButton.x += 5;
			mainButton.y += 5;
		});

		mainButton.on("pointerout", ()=>{
			mainButton.x -= 5;
			mainButton.y -= 5;
		});

		mainButton.on("pointerdown", ()=>{
			mainButton.setScale(0.9);
		});

		mainButton.on("pointerup", ()=>{
			mainButton.setScale(1);
			this.scene.start(CST.SCENES.MENU);
		});
	}
}