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
		this.lapNum = 5;
		this.players = [];		
	}

	setup(){
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

	createPlayers(){
		for(let i = 0; i < this.menu.playerNum; i++){
			let posY = this.map.getStartingPosition(this.menu.playerNum, i);
			let posX = (this.width/2) + 100;
			let player = new Player(i, this.playerColors[i], this.menu.playerKeys[i], posX, posY, this.context);
			this.players.push(player)
		}
	}

	updatePlayers(){
		for(let i = 0; i < this.players.length; i++){
			if(this.players[i].isAlive){
				this.players[i].move();
			}			
		}

		for(let i = 0; i < this.players.length; i++){
			if(this.key.isPressed(this.players[i].key) && this.players[i].isAlive){
				this.players[i].changeAngle();
			}
		}

		for(let i = 0; i < this.players.length; i++){
			if(this.players[i].isAlive && this.map.getCollisions(this.players[i])){
				console.log("Buh")
				this.players[i].dropDead();
			}
		}

	}



	render(){
		
		this.map.createMap();		

		for(let i = 0; i < this.players.length; i++){
			this.players[i].render();
		}
	}
}						