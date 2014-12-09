		
var player = {
		items: [],
		name: '',
		gender: '',
}

player.pickup = function(item){
  		player.items.push(item);
}

player.shoot = function(){
	if (silencedPistol.quantity > 0){
		alert('Bam!!');	
		silencedPistol.quantity -= 1;
	}
}

function gameStep(input) {
    console.log("check");
    var cmd = interpret(input); // parse the user input
    var result = execute(cmd); // run the desired command
    report(result); // display the results on the screen
    var descrip = document.querySelector('#descrip');
	clearContent(descrip);	
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

function gameStart() {
	
    var inputBox = document.querySelector("input");
    inputBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            
			gameStep(this.value);
        }
    });
}

function item (name, numUses, power){
		this.name = name;
		this.uses = numUses;
		this.power = power;
}



var gameIntro = function() {
	var nameInput = document.querySelector('#name');
	var genderInput = document.querySelector('#gender');
	var actionBox = document.querySelector('#action')
		actionBox.addEventListener('keyup', listener = function(event){
		if (event.keyCode === 13) {
			event.target.removeEventListener('keyup', listener)
			player.name = nameInput.value;
			player.gender = genderInput.value;
			gameStep();	
		}
		
	});
}

window.onload = gameIntro;