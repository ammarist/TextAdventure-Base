var actionBox = document.querySelector('#action');

var player = {
		items: [],
		name: '',
		gender: '',
        currentLocation: locations[0].name,
}


function avActions(input){
    var x = document.querySelector('#help');
    
}

function execute(command) {
    player[command.action](command.target);

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



function appendDescrip(input){ //gets description of current location and puts it on the webpage
	//node.appendChild(textnode);
	var node = document.createElement('h1');
	var textnode = document.createTextNode( getDescripByName(input)); 
	document.getElementById('scene').appendChild(node);
   
}

function gameStep(input) {
     var descrip = document.getElementById('scene');
	while (descrip.firstChild) {
		descrip.removeChild(descrip.firstChild);
	}
    var cmd = interpret(input); // parse the user input
    // if user types "move lobby"
    // then cmd.action will be "move" and cmd.target will be "lobby"
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
		var actionBox = document.querySelector('#action');
		actionBox.addEventListener('keyup', listener = function(event){
		if (event.keyCode === 13) {
			player.name = nameInput.value;
			player.gender = genderInput.value;
			gameStep();	
		}
		
	});
}

window.onload = gameIntro;