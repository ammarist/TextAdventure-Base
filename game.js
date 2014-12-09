var actionBox = document.querySelector('#action');

var player = {
		items: [],
		name: '',
		gender: '',
}

function execute(command) {
    player[command.action](command.target);


player.pickup = function(item){
  		player.items.push(item);
}

player.shoot = function(){
	if (silencedPistol.quantity > 0){
		alert('Bam!!');	
		silencedPistol.quantity -= 1;
	}
}

function displayItemProp(item){

}

function navigate(matrix){

}

function append(){
	var node = document.createElement('h1');
	var textnode = document.createTextNode(locations[][]);
	node.appendChild(textnode);
	document.getElementById('scene').appendChild(node);

}

function gameStep(input) {
     var descrip = document.getElementById('scene');
	while (descrip.firstChild) {
		descrip.removeChild(descrip.firstChild);
	}
    console.log("check");
    console.log(locations[1]);
    var cmd = interpret(input); // parse the user input
    var result = execute(cmd); // run the desired command
    alert(result); // display the results on the screen
   
}


function clearContent(node) {
    var descrip = document.getElementById('scene');
	while (descrip.firstChild) {
		descrip.removeChild(descrip.firstChild);
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
	
    var inputBox = document.querySelector("#action");
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
		actionBox.addEventListener('keyup', listener = function(event){
		if (event.keyCode === 13) {
			player.name = nameInput.value;
			player.gender = genderInput.value;
			gameStep();	
		}
		
	});
}

window.onload = gameIntro;