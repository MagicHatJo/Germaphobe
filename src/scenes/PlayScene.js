import { CST } from "../CST";
import { Player } from "../objects/Player";
import { Horde } from "../objects/Horde";
import { UI } from "../objects/UI";

export class PlayScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.PLAY
		});
	}

	preload() {
		//Animations
		//Player
		this.anims.create({
			key: "stand",
			frameRate: 1,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.PLAYER, {
				frames: [0]
			})
		});

		this.anims.create({
			key: "walk",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.PLAYER, {
				frames: [1, 2]
			})
		});

		//Enemies
		this.anims.create({
			key: "enemy_01_top",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY01, {
				frames: [0, 1, 0, 2]
			})
		});

		this.anims.create({
			key: "enemy_01_bottom",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY01, {
				frames: [4, 5, 4, 6]
			})
		});

		this.anims.create({
			key: "enemy_01_left",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY01, {
				frames: [3, 7, 3, 11]
			})
		});

		this.anims.create({
			key: "enemy_01_right",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY01, {
				frames: [8, 9, 8, 10]
			})
		});

		this.anims.create({
			key: "enemy_02_top",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY02, {
				frames: [1, 0, 1, 3]
			})
		});

		this.anims.create({
			key: "enemy_02_bottom",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY02, {
				frames: [6, 4, 6, 7]
			})
		});

		this.anims.create({
			key: "enemy_02_left",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY02, {
				frames: [8, 11, 8, 5]
			})
		});

		this.anims.create({
			key: "enemy_02_right",
			frameRate: 4,
			repeat: -1,
			frames: this.anims.generateFrameNumbers(CST.SPRITE.ENEMY02, {
				frames: [10, 9, 10, 2]
			})
		});

		//Background
		this.add.image(0, 0, CST.IMAGE.FLOOR).setOrigin(0).setDepth(0);
		this.add.image(0, 0, CST.IMAGE.FOG).setOrigin(0).setDepth(5);
	}

	create() {
		//Creating Objects
		this.player = new Player(this, 570, 360, CST.SPRITE.PLAYER);
		this.ui = new UI(this, this.player.hp);
		this.horde = new Horde(this);

		//Input Handling
		this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

		//Audio
		let bg_music = this.sound.add(CST.AUDIO.PLAY, {
			loop: true
		});
		bg_music.setVolume(0.1);
		bg_music.play();

		//Colliders
		this.physics.world.addCollider(this.player, this.horde.enemies, (player, enemy)=>{
			player.hp--;
			this.ui.damage();
			if (player.hp <= 0) {
				player.destroy();
				for (let i = this.horde.enemies.getChildren().length - 1; i >= 0; i--) {
					this.horde.enemies.getChildren()[i].destroy();
				}
				bg_music.stop();
				this.scene.start(CST.SCENES.OVER, {score: this.ui.score});
			}
			enemy.destroy();
		});
	}

	update(time, delta) { //delta 16.666 @ 60 fps
		//UI
		this.ui.update();

		//Enemy
		this.horde.spawner(time, this.ui.score.text);
		this.horde.update(time);

		//Spawn Modifiers
		let toCheck = Math.floor(this.ui.counter);
		if (toCheck === 30) {
			this.horde.enemyLoc = 1.9;
		}
		if (toCheck === 60) {
			this.horde.enemyDiff = 1.9;
			this.horde.enemyLoc = 2.9;
			this.delayMin -= 100;
		}
		if (toCheck === 90) {
			this.horde.enemyLoc = 3.9;
			this.delayMin -= 100;
		}

		if (toCheck === 120) {
			this.delayMin -= 100;
		}

		if (toCheck % 15 === 0 && toCheck != this.horde.lastCounter) {
			this.horde.enemySpeed++;
			this.horde.enemyLimit++;
			this.horde.lastCounter = toCheck;
		}

		//Player
		if (this.player.active) {
			//Input Handling
			if (this.keyboard.W.isDown) {
				this.player.setVelocityY(-250);
			}

			if (this.keyboard.A.isDown) {
				this.player.setVelocityX(-250);
			}

			if (this.keyboard.S.isDown) {
				this.player.setVelocityY(250);
			}

			if (this.keyboard.D.isDown) {
				this.player.setVelocityX(250);
			}

			if (this.keyboard.A.isUp &&
				this.keyboard.D.isUp) {
				this.player.setVelocityX(0);
			}

			if (this.keyboard.W.isUp &&
				this.keyboard.S.isUp) {
				this.player.setVelocityY(0);
			}

			//Animation
			if (this.player.body.velocity.x != 0 ||
				this.player.body.velocity.y != 0) {
				this.player.play("walk", true);
			}
			else {
				this.player.play("stand", true);
			}
		}
	}
}