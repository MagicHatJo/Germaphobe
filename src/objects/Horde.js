import { CST } from "../CST";
import { Enemy } from "../objects/Enemy";

export class Horde {
	constructor(scene) {
		this.scene = scene;
		this.enemies = scene.physics.add.group({immovable: true});
		
		//Spawning
		this.enemyDiff = 0;		//key for selecting random enemy
		this.enemyLoc = 0;		//key for selecting random spawn point
		this.enemySpeed = 1;	//key for selecting max speed
		this.enemyLimit = 2;	//key for selecting max spawn count
		this.lastCounter = 0;

		this.spriteArr = [
			CST.SPRITE.ENEMY01,
			CST.SPRITE.ENEMY02
		];

		this.dirArr = [
			"top",
			"bottom",
			"left",
			"right"
		];

		this.prev_time = 0;
		this.delay = 0;
		this.delayMax = 2500;
		this.delayMin = 500;
	}

	update(time, counter) {
		for (let i = 0; i < this.enemies.getChildren().length; i++) {
			this.enemies.getChildren()[i].update();
		}
	}

	spawner(time) {
		//regularly spawns enemies at randomized intervals
		if (time - this.prev_time > this.delay) {
			let toSpawn = Math.floor(Math.random() * this.enemyLimit + 1);
			for (let i = 0; i < toSpawn; i++) {
				this.spawn();
			}
			this.prev_time = time;
			this.delay = Math.random() * this.delayMax + this.delayMin;
		}
	}

	spawn() {
		let randSprite = Math.floor(Math.random() * this.enemyDiff);
		let randLoc = Math.floor(Math.random() * this.enemyLoc);
		let randSpeed = Math.floor(Math.random() * this.enemySpeed) + 1;
		if (randSprite === 1) {
			randSpeed += 2;
		} 
		this.enemies.add(new Enemy(
			this.scene,
			this.spriteArr[randSprite],
			this.dirArr[randLoc],
			randSprite + 1,
			randSpeed));
	}
}
