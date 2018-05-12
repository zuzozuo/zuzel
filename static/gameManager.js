const STATE_WAIT_FOR_PLAYER_NUM = 1;
const STATE_WAIT_FOR_KEYS = 2;
const STATE_INIT_GAME = 3;
const STATE_GAME = 4;

class GameManager {
	constructor(menu, context, width, height) {
		this.context = context;
		this.height = height;
		this.width = width;
		this.key = new Key();
		this.map = new MapGenerator('map', context, width, height);
		this.menu = new Menu(menu, width, height);
		this.playerColors = ['#cc0000', '#009900', '#002db3', '#ffff00'];
		this.state = null;
		this.lapNum = 2;
		this.players = [];
		this.endGame = false;
		this.winner = null;
	}

	setup() {
		let menu = this.menu;
		this.state = STATE_WAIT_FOR_PLAYER_NUM;
		menu.showMenu();
	}

	update() {
		switch (this.state) {
			case STATE_WAIT_FOR_PLAYER_NUM:
				if (this.menu.playerNum != null) {
					this.state = STATE_WAIT_FOR_KEYS;
					this.menu.showKeyChoiceMenu()
				}
				break;

			case STATE_WAIT_FOR_KEYS:
				if (this.menu.playerKeys.length != this.menu.keyAmount) {
					if (this.menu.playerKeys.length == this.menu.playerNum) {
						this.menu.hideMenu();
						this.state = STATE_INIT_GAME;
					} else {
						this.menu.showKeyChoiceMenu();
					}
				}
				break;

			case STATE_INIT_GAME:
				this.createPlayers();
				this.state = STATE_GAME;
				break;

			case STATE_GAME:
				this.updatePlayers();
				break;

		}
	}

	createPlayers() {
		for (let i = 0; i < this.menu.playerNum; i++) {
			let posY = this.map.getStartingPosition(this.menu.playerNum, i);
			let posX = (this.width / 2) + 100;
			let player = new Player(i, this.playerColors[i], this.menu.playerKeys[i], posX, posY, this.context);
			this.players.push(player)
		}
	}

	updatePlayers() {
		for (let i = 0; i < this.players.length; i++) {
			if (this.players[i].isAlive && this.endGame == false) {
				this.players[i].move();
			}
		}

		for (let i = 0; i < this.players.length; i++) {
			if (this.key.isPressed(this.players[i].key) && this.players[i].isAlive && this.endGame == false) {
				this.players[i].changeAngle();
			}
		}

		for (let i = 0; i < this.players.length; i++) {
			if (this.players[i].isAlive && this.map.getCollisions(this.players[i])) {
				this.players[i].dropDead();
			}
		}

		for (let i = 0; i < this.players.length; i++) {
			if (this.players[i].isAlive && this.map.crossCheckPoint(this.players[i])) {
				this.players[i].crossCheckPoint(this.lapNum);
				console.log(this.players[i].uid + " " + this.players[i].laps)
			}
		}

		
		if(this.menu.playerNum != 1){
			let left = 0;
			for(let i = 0; i < this.players.length; i++){
				if(this.players[i].isAlive){
					this.winner = i;
					left +=1;
				}		
			}

			if(left == 1){
				this.endGame = true;
			}
		}else{
			if(this.players[0].laps == this.lapNum){
				this.players[0].isWinner = true;
				this.winner = this.players[0].uid;
			}
		}

		for (let i = 0; i < this.players.length; i++) {
			if (this.players[i].isWinner) {
				this.endGame = true;
			}
		}
	}

	/*endGame(){

	}*/


	render() {

		this.map.createMap();
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].render();
		}

		if (this.endGame) {
			let ctx = this.context;
			ctx.font = "30px Tahoma";
			ctx.fillStyle = this.players[this.winner].color;
			ctx.textAlign = "center";
			ctx.fillText("Brawo wygrales gre fajnie: plejer " + parseInt(this.players[this.winner].uid+1), this.width / 2,  this.height / 2);
		}else{
			let ctx = this.context;
			ctx.font = "20px Tahoma";
			ctx.textAlign = "center";
			for(let i = 0; i < this.players.length; i++){
				ctx.fillStyle = this.players[i].color;
				ctx.fillText("Player " + i + ": " + Math.floor(this.players[i].laps) + "/" + this.lapNum, this.width / 2 - 100 , (this.height / 2 - 50) + 25 * i);
			}
		}
	}
}						