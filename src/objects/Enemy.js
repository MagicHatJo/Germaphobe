export class Enemy extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, texture, direction, type, speed, frame) {
		super(scene, 0, 0, texture, frame);

		scene.sys.updateList.add(this);
		scene.sys.displayList.add(this);
		scene.physics.world.enableBody(this);
		this.setOrigin(0, 0);
		this.setImmovable(true);
		this.setSize(40, 40);

		//randomize spawn based on direction
		switch (direction) {
			case "top":		this.x = Math.floor(Math.random() * 800);
							this.y = -50;
							this.vx = 0;
							this.vy = 1;
							break;
			case "bottom":	this.x = Math.floor(Math.random() * 800);
							this.y = 650;
							this.vx = 0;
							this.vy = -1;
							break;
			case "left":	this.x = -50;
							this.y = Math.floor(Math.random() * 600);
							this.vx = 1;
							this.vy = 0;
							break;
			case "right":	this.x = 850;
							this.y = Math.floor(Math.random() * 600);
							this.vx = -1;
							this.vy = 0;
							break;
		}
		this.play("enemy_0" + type + "_" + direction);
		this.setPosition(this.x, this.y);
		this.direction = direction;
		this.speed = speed;
	}

	update() {
		this.x += this.vx * this.speed;
		this.y += this.vy * this.speed;
		this.setPosition(this.x, this.y);

		//Delete if reached other side
		switch (this.direction) {
			case "top": 	if (this.y > 650) {
								this.destroy();
							}
							break;
			case "bottom":	if (this.y < -50) {
								this.destroy();
							}
							break;
			case "left":	if (this.x > 850) {
								this.destroy();
							}
							break;
			case "right":	if (this.x < -50) {
								this.destroy();
							}
							break;
		}
	}
}