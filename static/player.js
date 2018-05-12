class Player {
	constructor(uid, color, key, x, y, context) {
		this.uid = uid;
		this.color = color;
		this.key = key;
		this.posX = x;
		this.posY = y;
		this.context = context;
		this.isAlive = true;
		this.radius = 7;
		this.speed = 1;
		this.alpha =   50 * Math.PI/180;
	}

	render(){
		let ctx = this.context;
		ctx.fillStyle = this.color;
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 1;
		
		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false)
		ctx.fill();
		ctx.stroke();
	}


	move() {
		this.posX += Math.cos(this.alpha) * this.speed;
		this.posY += Math.sin(this.alpha) * this.speed;
	}
}