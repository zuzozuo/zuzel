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
		this.speed = 1.75;
		this.alpha = 0;
		this.laps = 0;
		this.checkpoint = false;
		this.isWinner = false;
	}

	render() {
		let ctx = this.context;
		ctx.fillStyle = this.color;
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false)
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(this.posX, this.posY);
		ctx.lineTo(this.posX + Math.cos(this.alpha) * this.radius * 2, this.posY + Math.sin(this.alpha) * this.radius * 2)
		ctx.stroke();
	}


	move() {
		this.posX += Math.cos(this.alpha) * this.speed;
		this.posY += Math.sin(this.alpha) * this.speed;
	}

	changeAngle() {
		this.alpha -= 3 * Math.PI / 180;
	}

	collideWithPoint(x, y) {
		let dx = this.posX - x;
		let dy = this.posY - y;

		return (dx * dx + dy * dy <= this.radius * this.radius)
	}


	collideWithLine(x1, y1, x2, y2) {
		/*let ctx = this.context;
		ctx.strokeStyle = 'blue';
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();*/

		if (this.collideWithPoint(x1, y1) || this.collideWithPoint(x2, y2)) {
			return true;
		}

		let dx = x2 - x1;
		let dy = y2 - y1;

		let lcx = this.posX - x1;
		let lcy = this.posY - y1;

		let dlen = dx * dx + dy * dy;
		let px = dx;
		let py = dy;

		if (dlen > 0) {
			let dp = (lcx * dx + lcy * dy) / dlen;
			px *= dp;
			py *= dp;
		}

		let plen = px * px + py * py;

		return (this.collideWithPoint(x1 + px, y1 + py) &&
			plen <= dlen &&
			(px * dx + py * dy) >= 0);

	}

	collideWithArc(x, y, radius, start, end) {
		/*let ctx = this.context;
		ctx.strokeStyle = 'blue';
		ctx.beginPath();
		ctx.arc(x, y, radius, start, end)
		ctx.stroke();*/

		let dx = this.posX - x;
		let dy = this.posY - y;
		let angle = Math.atan2(dy, dx);

		if (start < end) {
			if (angle < start || angle > end) {
				return false;
			}
		} else {
			if (angle < start && angle > end) {
				return false;
			}
		}

		return this.collideWithPoint(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
	}

	dropDead() {
		this.isAlive = false;
	}

	crossCheckPoint(allLaps){
		this.checkpoint = !this.checkpoint;
		this.laps += 0.5;

		if(this.laps == allLaps){
			this.isWinner = true;
		}

	}






}