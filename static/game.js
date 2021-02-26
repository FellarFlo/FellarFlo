class Board{
	constructor(stringRep=''){
		this.board = [];
		this.WIDTH = 10;
		this.HEIGHT = 20;
		for(let i = 0; i < this.WIDTH; i++){
      this.board.push([]);
			for(let j = 0; j < this.HEIGHT; j++){
				this.board[i].push({isEmpty: () => true});
			}
		}
		if(stringRep !== ''){
			let j = 0;
			stringRep.split('|').forEach(line => {
				let i = 0;
				line.split(',').forEach(spot => {
					if(spot === 'r'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'red'};
					} else if(spot === 'g'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'green'};
					} else if(spot === 'b'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'blue'};
					}
					i++;
				});
				j++;
			});
			
		}
	}
	toString(){
		let out = "";
		for(let i = 0; i < this.WIDTH; i++){
			for(let j = 0; j < this.HEIGHT; j++){
				if(this.board[i][j].isEmpty()){
					out += 'e,';
				} else if(this.board[i][j].color() === 'red'){
					out += 'r,';
				} else if(this.board[i][j].color() === 'green'){
					out += 'g,';
				} else if(this.board[i][j].color() === 'blue'){
					out += 'b,';
				}
			}
			out += '|';
		}
		return out;
	}
}


var socket = io();
b = new Board('');
socket.on('message', function(data) {
  let h1 = document.createElement("H1");
  h1.innerHTML = data;
  document.body.appendChild(h1);
  console.log(b.toString());
});

