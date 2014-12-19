var actionBox = document.querySelector('#action');
var gumdrop = 0;


var player = {
		items: [],
		name: '',
		gender: '',
        currentLocationName: locations[0].name,
        currentLocationRow: locations[0].row,
        actions: [],
        location: locations[0],//object in an array
}

player.use = function(item){
	for(var i = 0; i < player.items.length; i++){
		if(item == player.items[i]){
		var x = player.items[i]
	}
		if(x.quantity == 1){
		x = '';
		alert('Proceed');
	}
}
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
    player[command.action](command.target);
}

function removeFromInv(item){
	for(var i = 0; i < locations.length; i++){
		if(item == player.items[i]){
			player.items[i] = '';
		}
	}

}

player.check = function(input){
	console.log(input);
	console.log(player.items[0]);
		if(player.items[0] == 'gear'){
			for(i = 0; i < gear.length; i++){
				alert(gear[i].name);
				alert(gear[i].description);
			}
		}
}

player.go =function(input){
	console.log(player.gender);
	for(var i = 0; i < locations.length; i++){
		if(input == locations[i].name){
			if(checkReq(locations[i].requirements)){
				clearContent();
				appendDescrip(player.location.description);
				console.log('THANK GOD!!!');
				player.currentLocationRow = locations[i].row;
				player.currentLocationName = locations[i].name;
				player.location = locations[i];
			}
		}
	}
}

player.talk = function(){
		if(player.gender == 'M'){
			 var x = "Mr."
		}
		else{
			 x = "Mrs."
		}
		alert('Hi ' + x + player.name + ' He should be in his office on the second floor');
}



player.pickup = function(item){
		clearItems();

		if(player.location.items = item){
			player.items.push(item);
		}
  		else{
  			console.log('not for you');
  		}
  		appendInventory(player.items);
}

function checkAlert(){
	if(document.querySelector('#bar').style.width == "200px"){
		alert('DONT JUST USE THE GUN! GAMEOVER');
		player.location = locations[0];
		player.currentLocationName = locations[0].name;
        player.currentLocationRow = locations[0].row;
        clearContent();
        appendDescrip(player.location.description);
	}

}

player.shoot = function(){
	if(player.location.enemies !== ''){
		var x = player.location.enemies;
		var v = 0;
		var gearBag = gear;
		
		
		if(Math.random > .6){
			if (x.health > 0) {

			x.health = x.health - gearBag[1].spDam;
			v = v + gearBag[1].alerInc;
			gumdrop = gumdrop + v;
			var l = gumdrop.toString();
			document.querySelector('#bar').style.width = l;
			alert('One in the head');
		}
		}
			if (x.health > 0) {
			x.health = x.health - gearBag[1].dam;
			 v = v + gearBag[1].alerInc;
			 gumdrop = gumdrop + v;
			var l = gumdrop.toString();
			document.querySelector('#bar').style.width = l;
			alert('Bam!')
		}
		if(x.health <= 0){
		 alert(x.name + ' is dead');
		 console.log(paul.health);
		 
		}
		} 
		gameOver();
}
function gameOver(){
	console.log('we out here');
	console.log(paul.health);
	if (paul.health <= 0){
		console.log('now im really confused')
		player.go(gameOver);
	} 
}

player.knife = function(){
	
	if(player.location.enemies !== ''){
		var x = player.location.enemies;
		var gearBag = gear;
		var v = 0;
		 document.querySelector('#bar').style.width;
		
		
		if(Math.random > .6){
			if (x.health > 0) {

			x.health = x.health - gearBag[3].spDam;
			v = v + gearBag[1].alerInc;
			gumdrop = gumdrop + v;
			var l = gumdrop.toString();
			document.querySelector('#bar').style.width = l;
			alert('Decapitation');
		}
		}
			if (x.health > 0) {
			x.health = x.health - gearBag[3].dam;
			v = v + gearBag[1].alerInc;
			gumdrop = gumdrop + v;
			var l = gumdrop.toString();
			document.querySelector('#bar').style.width = l;
			alert('You watch as the ' + x.name + ' bleeds out')
		}
		if(x.health <= 0){
		 alert(x.name + ' is dead');
		 
		}
		} 
gameOver();
}

player.poison = function(input){
	
	var v = 0;
	if(player.location.items == pillContainer){
		var gearBag = gear;
		pillContainer = 1;	
		v = v + gearBag[1].alerInc;
		gumdrop = gumdrop + v;
		var l = gumdrop.toString();
		document.querySelector('#bar').style.width = l;
		}
	}

player.observe = function(){
	var gearBag = gear;
	var y = player.location.enemies;
	if(pillContainer === 1){
		if(player.gender == 'M'){
			 var x = "Mr."
		}
		if(player.gender == 'F'){
			 x = "Mrs."
		}
		y.health = x.health - gearBag[2].dam;
		appendDescrip(x + player.name + " How can I help you..... gahhhhhhh.")
		

	}
	gameOver();
}

function appendBar(x){
	var progBar = document.querySelector('#bar').style.width = x +'px';
}

function checkReq(input){
	console.log(input);
	
	for(i = 0; i < player.items.length; i++){
		console.log(player.items[i]);
		if(player.items[i] == input){
			return true;
		}
		
	}
	
	return false;
}

function appendDescrip(input){ 
	clearContent();
	var p = document.createElement('p');//creates paragraph 
	var node = document.createElement('h1');//creates a heading
	var textnode = document.createTextNode(input);//creates a text node with whatever the program passes through the parameter
	node.appendChild(textnode);//appends the textnode to the heading
	p.appendChild(node);//appends the heading to the paragraph
	document.getElementById('scene').appendChild(p);//appends the paragraph to the scene
	
}

function appendAvActions(){
	clearActions();
	var ul = document.createElement('ul');// creates ul
	var textnode = document.createTextNode(AvActions());// creates the text node containing available actions
	ul.appendChild(textnode);
	document.getElementById('avA').appendChild(ul);
}

function appendInventory(input){
	var ul = document.createElement('ul');
	var textnode = document.createTextNode(input);
	ul.appendChild(textnode);
	document.getElementById('inv').appendChild(ul);
}


function gameStep(action) {
	appendAvActions();
    appendDescrip(player.location.description);
    var cmd = interpret(action);
    var result = execute(cmd);
    
    
    
   
}
function clearActions(){
	var a = document.getElementById('avA');
	while (a.firstChild) {
		a.removeChild(a.firstChild);
	}
}
function clearItems(){
	var a = document.getElementById('inv');
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
function returnGameStepLocation(action) {
   			 var cmd = interpret(action);
				var x = cmd.target
					return x;
				}		

function gameStart() {
	
	clearActions();
	appendDescrip(player.location.description);// appends the Home description to the page
	appendAvActions();//
    var inputBox = document.querySelector("#action");
    inputBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            gameStep(inputBox.value);
            clearContent();
            clearActions();
            appendDescrip(player.location.description);
            appendAvActions();

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
	var nameInput = document.querySelector('#name');//selects input box by id
	var genderInput = document.querySelector('#gender');//selects inpu box by id
		var actionBox = document.querySelector('#action');//selections action box by id
		actionBox.addEventListener('keyup', listener = function(event){//adds an event listener for 13
		if (event.keyCode === 13) {
			x = document.getElementById('action').value//gets the value of action
			player.name = nameInput.value;//stores the users name on the key up of 13
			player.gender = genderInput.value;//stores the users gener on the key up of 13
			clearActions();//clears my actions
			clearContent();
			gameStart();//calls gameStart
			
		}
		actionBox.removeEventListener('keyup', listener);
	});
}

window.onload = gameIntro;