class Menu {
	constructor(menu, width, height) {
		this.playerNum = null;
		this.lapNum = null;
		this.header = null;
		this.div = null;
		this.menuDiv = menu;
		this.height = height;
		this.width = width;
		this.header = null;

	}


	showMenu() {
		this.header = document.createElement('h1');
		this.header.innerHTML = "ŻuŻal Gejm";
		this.menuDiv.appendChild(this.header);
		this.menuDiv.style.display = "block";
		this.menuDiv.style.height = this.height + "px";
		this.menuDiv.style.width = this.width + "px";

		for (let i = 0; i < 4; i++) {
			this.div = document.createElement('div');
			this.div.className = 'number';
			this.div.dataset.number = i;
			this.menuDiv.appendChild(this.div);
			this.div.style.left = 100 + 150 * i + "px"
			this.div.style.top = 200 + "px"
			/*if (i % 2 != 0) {
				this.div.style.top = 300 + "px"
				this.div.style.left = 200 + 100 * i + 'px'
			}*/
			this.div.innerHTML = i + 1;
		}

	}

}