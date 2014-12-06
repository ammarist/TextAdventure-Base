		
var player = {
		items: [],
		name: '',
		gender: '',
}

player.pickup = function(item){
  		player.items.push(item);
}

function clearContent(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

function itemList(items) {
		var i, item, inventory;
    	inventory = document.querySelector("#inventory > ul");
    	clearContent(inventory);
    		for (i in player.items) {
        		item = document.createElement ("li");
        		item.textContent = player.items[i];
        		inventory.appendChild(item);
    		}		
}

function interpret(input) {
    	var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
    	cmd.action = tokens.shift();
    	cmd.target = tokens.join(" ");
    	return cmd;
}

var gameStep = function(input){
	var command; // take the user input and put it through the interpreter
	var result; //run your interpreted command function through execute functionm
		//need some way of displaying the results on the screen report function
	var descrip = document.querySelector('#descrip');
	clearContent(descrip);	
}

function item (name, numUses, power){
		this.name = name;
		this.uses = numUses;
		this.power = power;
}

var actionBox = document.querySelector("#action")

var gameIntro = function() {
	var nameInput = document.querySelector('#name');
	var genderInput = document.querySelector('#gender');
	actionBox.addEventListener('keyup', listener)
	var listener = function(event){
		if (event.keyCode === 13) {
			event.target.removeEventListener('keyup', listener)
			player.name = nameInput.value;
			player.gender = genderInput.value;
			gameStep();	
		}
	}
}

window.onload = gameIntro();