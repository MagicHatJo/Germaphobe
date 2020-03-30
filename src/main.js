/** @type {import("../typings/phaser")} */

import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import {CreditScene} from "./scenes/CreditScene";
import {OptionScene} from "./scenes/OptionScene";
import {PlayScene} from "./scenes/PlayScene";
import {OverScene} from "./scenes/OverScene";

let game = new Phaser.Game({
	width: 800,
	height: 600,
	parent: "gameContainer",
	scene: [
		LoadScene,
		MenuScene,
		CreditScene,
		OptionScene,
		PlayScene,
		OverScene
	],
	render: {
		pixelArt: true
	},
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
});