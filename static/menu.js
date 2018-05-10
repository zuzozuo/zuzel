class Menu {
	constructor(menu, width, height) {
		this.playerNum = null;
		this.lapNum = null;
		this.header = null;
		this.div = null;
		this.select = null;
		this.option = null;
		this.header = document.createElement('h1');
		this.header2 = document.createElement('h2');
		this.header3 = document.createElement('h2');
		this.menuDiv = menu;
		this.height = height;
		this.width = width;		
	}


	showMenu(){
		this.header.innerHTML = "ŻuŻal Gejm";
		this.header2.innerHTML = "Wybierz ilosc graczy";
		this.menuDiv.appendChild(this.header);
		this.menuDiv.appendChild(this.header2);
		this.menuDiv.style.display = "block";
		this.menuDiv.style.height = (this.height - 10) + "px";
		this.menuDiv.style.width = (this.width - 10) + "px";

		for (let i = 0; i < 4; i++){
			this.div = document.createElement('div');			
			this.div.className = 'number';
			this.div.dataset.number = i;
			this.menuDiv.appendChild(this.div);
			this.div.style.left = 100 + 150 * i + "px"
			this.div.style.top = 120 + "px"
			this.div.innerHTML = i + 1;
			this.div.onclick = function(){
				this.playerNum = parseInt(this.dataset.number) + 1;
				console.log(this.playerNum)
				}
			}
		
		/*this.header3.innerHTML = "Wybierz ilosc okrazen"
		this.select = document.createElement('select');
		this.menuDiv.appendChild(this.select);
		for(var i = 2; i < 7; i++){
			this.option = document.createElement('option')
			this.option.innerHTML = i * 5;
			this.option.value = i * 5;
			this.select.appendChild(this.option)
			}*/
		}

	}

