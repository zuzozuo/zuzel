document.addEventListener("DOMContentLoaded", function (event) {

	const FOREVER = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { return setTimeout(callback, 1000 / 60); };

	let canvas = document.getElementById('canvas');
	let canvasContext = canvas.getContext('2d');
	let menu = document.getElementById('miniMenu');
	let width = canvas.width;
	let height = canvas.height;

	let game = new GameManager(menu, canvasContext, width, height);

	game.setup();

	function mainLoop(){
		game.update();
		game.render();
		FOREVER(mainLoop)
	}

	mainLoop();
	
});