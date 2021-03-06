//klasa odpowiedzialna za rysowanie mapy , mape kolizji i jej sprawdzanie
class MapGenerator {
	constructor(name, context, width, height) {
		this.name = name;
		this.height = height;
		this.width = width;
		this.context = context;
		this.centerX = width / 2;
		this.centerY = height / 2;
	}

	createMap() {
		let canvasContext = this.context,
			height = this.height,
			width = this.width,
			grass = new Image(),
			sand = new Image();
		
		grass.src = 'img/grass.jpg';
		sand.src = 'img/sand.jpg';
		
		let grassPattern = canvasContext.createPattern(grass,'repeat'),
			sandPattern = canvasContext.createPattern(sand, 'repeat-x');		

		canvasContext.strokeStyle = 'rgba(0,0,0, 0.7)';
		canvasContext.fillStyle = grassPattern; //"#87db34";
		canvasContext.fillRect(0, 0, width, height);
		canvasContext.lineWidth = 3;
		canvasContext.beginPath();
		canvasContext.fillStyle = sandPattern;//"#DBD78A"
		canvasContext.arc(220, height / 2, 200, 0.5 * Math.PI, 1.5 * Math.PI)
		canvasContext.arc(width - 220, height / 2, 200, 1.5 * Math.PI, 0.5 * Math.PI)
		canvasContext.closePath();
		canvasContext.fill();
		canvasContext.stroke();
		
		
		canvasContext.beginPath();
		canvasContext.arc(220, height / 2, 100, 0.5 * Math.PI, 1.5 * Math.PI)
		canvasContext.stroke();
		canvasContext.arc(width - 220, height / 2, 100, 1.5 * Math.PI, 0.5 * Math.PI);
		canvasContext.closePath();
		canvasContext.stroke();
		canvasContext.fillStyle = grassPattern;//"#87db34"
		canvasContext.lineWidth = 2;
		canvasContext.fill();

		canvasContext.beginPath();
		canvasContext.moveTo(width / 2 + 100, 500);
		canvasContext.lineTo(width / 2 + 100, 400);
		canvasContext.stroke();

		canvasContext.strokeStyle = 'rgba(255, 26, 26, 0.6)';
		canvasContext.beginPath();
		canvasContext.moveTo(width / 2 -100, 100);
		canvasContext.lineTo(width / 2 - 100, 200);
		canvasContext.stroke();
		 
	}

	getStartingPosition(amount, num) {
		return ((100 / (amount + 1)) * (num + 1) + 400)
	}

	getCollisions(player) {
		return (
			player.collideWithLine(
				220, this.centerY + 200,
				this.width - 220, this.centerY + 200
			) ||
			player.collideWithLine(
				220, this.centerY - 200,
				this.width - 220, this.centerY - 200
			) ||
			player.collideWithLine(
				220, this.centerY - 100,
				this.width - 220, this.centerY - 100
			) ||
			player.collideWithLine(
				220, this.centerY + 100,
				this.width - 220, this.centerY + 100
			) ||
			player.collideWithArc(
				220, this.centerY, 200, 0.5 * Math.PI, -0.5 * Math.PI
			) ||
			player.collideWithArc(
				(this.width - 220), this.centerY, 200, -0.5 * Math.PI, 0.5 * Math.PI
			) ||
			player.collideWithArc(
				220, this.centerY, 100, 0.5 * Math.PI, -0.5 * Math.PI
			) ||
			player.collideWithArc(
				(this.width - 220), this.centerY, 100, -0.5 * Math.PI, 0.5 * Math.PI
			) 
		)
	}

	crossCheckPoint(player){
		if(player.checkpoint == false){
			return player.collideWithLine((this.width/2) - 100, 100, (this.width/2)-100, 200)
		}else{

			 return player.collideWithLine((this.width/2) + 100, 400, (this.width/2) + 100, 500)
		}

	}

}