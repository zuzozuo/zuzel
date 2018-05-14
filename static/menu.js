class Menu {
	constructor(menu, width, height) {
		this.playerNum = null;
		this.playerKeys = [];
		this.colors = ['#cc0000', '#009900', '#002db3', '#ffff00'];
		this.div = null;
		this.select = null;
		this.option = null;
		this.header2 = document.createElement('h2');
		this.menuDiv = menu;
		this.height = height;
		this.width = width;
		this.fn = null;
	}


	showMenu() {
		
		this.header2.innerHTML = "Wybierz ilość graczy";
		this.menuDiv.appendChild(this.header2);
		this.menuDiv.style.display = "block";
		this.menuDiv.style.height = (this.height - 10) + "px";
		this.menuDiv.style.width = (this.width - 10) + "px";

		for (let i = 0; i < 4; i++) {
			this.div = document.createElement('div');
			this.div.className = 'number';
			this.div.dataset.number = i;
			this.menuDiv.appendChild(this.div);
			this.div.style.left = 100 + 150 * i + "px"
			this.div.style.top = 120 + "px"
			this.div.innerHTML = i + 1;
			this.fn = this.getPlayerNum.bind(this)
			this.div.addEventListener("click", this.fn)
		}
	}

	getPlayerNum(event) {
		this.playerNum = parseInt(event.target.dataset.number) + 1
		this.menuDiv.innerHTML = " ";
		this.div.removeEventListener("click", this.fn)
	}

	showKeyChoiceMenu(){
		this.keyAmount = this.playerKeys.length;
		this.header2.innerHTML = "Wybierz klawisz graczu nr " + (this.playerKeys.length + 1);
		this.menuDiv.style.display = "block";
		this.menuDiv.appendChild(this.header2);	
		this.fn = this.getKey.bind(this)		
		document.addEventListener('keyup', this.fn)
		
	}

	getKey(event){		
		for(let i = 0; i < this.playerKeys.length; i++){
			if(this.playerKeys[i] == event.keyCode){
				return;
			}
		} 

		this.playerKeys.push(event.keyCode)
		this.menuDiv.innerHTML = " ";
		document.removeEventListener('keyup', this.fn)
	}

	hideMenu(){
		let bigMenu = document.getElementById("menu");
		bigMenu.style.display = "none";

	}

}

