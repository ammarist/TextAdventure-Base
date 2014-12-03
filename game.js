var player = {
items: [],
name: '',
gender: '',

};

player.pickup = function(item){
  player.items.push(item);
};

	var interpret = function (input)  {
		console.log("This is working please delete me in your code");
		// var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
        // cmd.action = tokens.shift();
        // cmd.target = tokens.join(" ");
	    // return cmd;

	};

var gameStep = function(input){
	var command; // take the user input and put it through the interpreter
	var result; //run your interpreted command function through execute functionm
	//need some way of displaying the results on the screen report function
	var descrip = document.querySelector('#descrip');
	descrip.innerHTML = "";

	//while (descrip.firstChild) {descrip.remove} goes through a parent and we can remove all children
	
}

var actionBox = document.querySelector('#action')



var gameStart = function() {
	var nameInput = document.querySelector('#name');
	var genderInput = document.querySelector('#gender');
	actionBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			player.name = nameInput.value;
			player.gender = genderInput.value;
			gameStep(this.value);
		
		}
	})
}
window.onload = gameStart;