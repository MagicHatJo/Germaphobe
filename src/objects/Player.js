export class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame);
		scene.sys.updateList.add(this);
		scene.sys.displayList.add(this);
		scene.physics.world.enableBody(this);
		this.setOrigin(0, 0);
		this.setImmovable(true);
		this.setCollideWorldBounds(true);
		this.setSize(50, 50);

		//Attributes
		this.hp = 3;
	}
}