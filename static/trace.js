//klasa z rysowaniem sciezki
class Trace{

	constructor(context, color) {
		this.context = context;
        this.color = color;
        this.positions = [[],[]];
		this.temp = 1;
		this.step = 2;
        this.countdown = 0;        
		this.path = [];
	}

	update(x, y) {
        if (x && y) {  
			this.countdown--;
			if (this.countdown < 0) {
                this.countdown = this.step;
                this.positions[0].push(x);
                this.positions[1].push(y);;
				this.path.push(this.temp);
			}
        }
	}

	render() {
        let ctx = this.context;

		if (this.path.length < 2) {
			return;
		}		

		ctx.strokeStyle = this.color;
		ctx.lineWidth = 2;

		for (let i = 1; i < this.path.length; i++) {
			ctx.beginPath();
			ctx.moveTo(this.positions[0][i - 1], this.positions[1][i - 1]);
			ctx.lineTo(this.positions[0][i], this.positions[1][i]);
			ctx.stroke();
		}
	}

}