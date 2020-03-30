import { CST } from "../CST";

export class Heart extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame);
		scene.sys.updateList.add(this);
		scene.sys.displayList.add(this);
		this.setOrigin(0, 0);
		this.setScale(2);
		this.damaged = false;
	}

	update() {
		if (this.damaged) {
			this.setFrame(1);
		}
	}
}

export class UI {
	constructor(scene, hp) {
		//Setup
		this.scene = scene;
		this.depth = 4;
		this.total_hp = hp;
		this.hp = hp;

		this.counter = 0;

		//HP
		this.hearts = scene.physics.add.group({immovable: true});
		for (let i = 0; i < hp; i++) {
			this.hearts.add(new Heart(this.scene, (i + 1) * 50, 25, CST.SPRITE.HEART, 2));
		}

		//Score
		this.score = this.scene.add.text(750, 20, 0, {
			fontFamily: 'Arial',
			fontSize: 40,
			color: "#000000",
			strokeThickness: 2,
			stroke: "#FFFFFF"
		}).setDepth(this.depth);
	}

	damage() {
		this.hp--;
		this.hearts.getChildren()[this.hp].damaged = true;
	}

	update() {
		this.counter += 0.02;
		for (let i = 0; i < this.total_hp; i++) {
			this.hearts.getChildren()[i].update();
		}
		this.score.text = Math.floor(this.counter);
		this.score.setX(750 - this.score.displayWidth);
	}
}
