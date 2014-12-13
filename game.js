var actionBox = document.querySelector('#action');

var player = {
		items: [],
		name: '',
		gender: '',
        currentLocationName: locations[0].name,
        currentLocationRow: locations[0].row,
        actions: [],
        location: locations[0],
}


function help(){
var i, item, inventory;
    	inventory = document.querySelector("#inventory > ul");
    	clearContent(inventory);
    		for (var i = 0; i < player.items.length; i++) {
        		item = document.createElement ("li");
        		item.textContent = player.items[i];
        		inventory.appendChild(item);
    		}		
}


function execute(command) {
	if(command === ''){
		return false
	}
	else{
    player[command.action](command.target);
}
}
player.go =function(input){
	

}

player.check = function(input){
        var x = getConnectedLocations(player.currentLocationRow);
       	//takes the number of the current location row which starts off as 0 runs it through get connected locations and gets available places and stores it
        

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



function appendDescrip(input){ 
	var p = document.createElement('p');
	var node = document.createElement('h1');
	var textnode = document.createTextNode(input); 
	node.appendChild(textnode);
	p.appendChild(node);
	document.getElementById('scene').appendChild(p);
	
}

function appendAvActions(input){
	var ul = document.createElement('ul');
	var textnode = document.createTextNode(input);
	ul.appendChild(textnode);
	document.getElementById('avA').appendChild(ul);
}

function appendInventory(input){
	var ul = document.createElement('ul');
	var textnode = document.createTextNode(input);
	ul.appendChild(textnode);
	document.getElementById('inventory').appendChild(ul);
}


function gameStep(action) {
	clearContent();
	clearActions();
    var cmd = interpret(action); 
    var result = execute(cmd);
    
}
function clearActions(){
	var a = document.getElementById('avA');
	while (a.firstChild) {
		a.removeChild(a.firstChild);
	}
}

function clearContent(node) {
    var descrip = document.getElementById('scene');
	while (descrip.firstChild) {
		descrip.removeChild(descrip.firstChild);
	}
}

function itemList() {
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
	clearContent();
	appendDescrip(player.location.description);
	appendAvActions(player.location.availableActions);
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

function pushToP(x){
      player.items.push(x);
    }

var gameIntro = function() {
	var nameInput = document.querySelector('#name');
	var genderInput = document.querySelector('#gender');
		var actionBox = document.querySelector('#action');
		actionBox.addEventListener('keyup', listener = function(event){
		if (event.keyCode === 13) {
			x = document.getElementById('action').value
			player.name = nameInput.value;
			player.gender = genderInput.value;
			gameStart();

		}
		actionBox.removeEventListener('keyup',listener);
	});
}

window.onload = gameIntro;