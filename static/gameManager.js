class GameManager {
	constructor(menu, context, width, height) {
		this.context = context;
		this.height = height;
		this.width = width;
		this.map = new MapGenerator('map', context, width, height);
		this.menu = new Menu(menu, width, height);
	}

	setup() {
		let menu = this.menu;
		menu.showMenu();
	}

	render() {
		this.map.createMap();
	}
}