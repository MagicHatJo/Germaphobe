import { CST } from "../CST";

export class OptionScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.OPTION
		});
	}

	init() {

	}

	preload() {

	}

	create() {
		let page = this.add.image(0, 0, CST.IMAGE.OPTION_PAGE).setOrigin(0);

		page.setInteractive();
		page.on("pointerup", ()=>{
			this.scene.stop();
		});
	}

	update() {

	}
}