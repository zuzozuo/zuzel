class MapGenerator {
	constructor(name, context, width, height) {
		this.name = name;
		this.height = height;
		this.width = width;
		this.context = context;
	}

	createMap() {
		let canvasContext = this.context,
			//startLine = this.canvas.getContext("2d"),
			height = this.height,
			width = this.width;

		canvasContext.fillStyle = "#87db34";
		canvasContext.fillRect(0, 0, width, height);
		canvasContext.lineWidth = 2;
		canvasContext.beginPath();
		canvasContext.fillStyle = "#DBD78A"
		canvasContext.arc(220, height / 2, 200, 0.5 * Math.PI, 1.5 * Math.PI)
		canvasContext.stroke();
		canvasContext.arc(width - 220, height / 2, 200, 1.5 * Math.PI, 0.5 * Math.PI)
		canvasContext.closePath();
		canvasContext.fill();
		canvasContext.stroke();

		canvasContext.beginPath();
		canvasContext.arc(220, height / 2, 100, 0.5 * Math.PI, 1.5 * Math.PI)
		canvasContext.stroke();
		canvasContext.arc(width - 220, height / 2, 100, 1.5 * Math.PI, 0.5 * Math.PI)
		canvasContext.closePath();
		canvasContext.stroke();
		canvasContext.fillStyle = "#87db34"
		canvasContext.fill();

		/*startLine.beginPath();
		startLine.moveTo(width / 2 + 100, 500);
		startLine.lineTo(width / 2 + 100, 400);
		startLine.stroke();*/
	}
}