document.addEventListener("DOMContentLoaded", function(event) {

	let canvas = document.getElementById('canvas');
	let canvasContext = canvas.getContext('2d');
	let menu = document.getElementById('menu')

	let width = canvas.width;
	let height = canvas.height;
	let game = new GameManager(menu, canvasContext, width, height);
	game.setup();
	game.render();
});