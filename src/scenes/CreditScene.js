import { CST } from "../CST";

export class CreditScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.CREDIT
		});
	}

	init() {

	}

	preload() {

	}

	create() {
		let page = this.add.image(0, 0, CST.IMAGE.CREDIT_PAGE).setOrigin(0);

		page.setInteractive();
		page.on("pointerup", ()=>{
			this.scene.stop();
		});
	}

	update() {

	}
}