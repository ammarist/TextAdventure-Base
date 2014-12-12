

    function Location(name, description, items, enemies, availableActions, row){
        this.name = name;
        this.description = description;
        this.items = items;
        this.enemies = enemies;
        this.availableActions = availableActions;
    };

    function AvActions(action1, action2, action3) {
      var x = [];
      x.push(action1,action2,action3);
      return x;
    }

    function pushToP(x){
      player.actions.push(x);

    }


      function itemConstructor(name, description, dam , spDam, quantity){
            this.name = name;
            this.description = description;
            this.dam = dam;
            this.spDam = spDam;
            this.quantity = quantity;

      }

      var intel = new itemConstructor('intel', 'Target Name: Paul White, Location: should be on second floor');
      var silencedPistol = new itemConstructor('Silenced 9mm Pistol', '', 2, 5, 15 );
      var poison = new itemConstructor('Posion', "Slip into a consumable and watch your desired outcome", 5, 5, 1);
      var knife = new itemConstructor('Knife',"Raptor Claw knife. Perfect for a stealth kill", 1, 5, 10);

      var gear = [intel, silencedPistol, poison, knife]



    var lobby = new Location('Lobby', 'This floor has two doors.... they appear to be locked.', 'keycard', 0 , AvActions('pickup','go'), 1);
    var utilitiesRoom = new Location('Utilities Room', 'There seems to be a working keycard encoder', 'Encoded keycard', 2, AvActions('pickup','shoot'), 2);
    var elevator = new Location('Elevator', 'Building seems to have 4 floors....', '' ,0 ,AvActions('go'), 3 );
    var home = new Location('Home', 'I need to pick up my gear before I go.', gear, 0 , AvActions('pickup', 'go'), 0);
    var firstFloor = new Location('First Floor', "You only have Security clearance for this floor! The receptionist keeps looking up at me, I should be able to get some information out of her.", "Target is in the 2nd office on the 2nd floor ", 0 , AvActions('talk', 'go'), 3);
    var secondFloor = new Location('Second Floor', "there are two offices which should I go to?", '' , 0 , AvActions('go'), 4 );
    var officeOne = new Location("First Office", "This is his office... there is medication on his desk", "Pill container", 0 , AvActions("poison", "go"), 5);
    var officeTwo = new Location('Second Office', "He is here", '', 1, AvActions('shoot', 'knife', 'observe'), 6);    

    var locations = [];
    locations.push(home, lobby, utilitiesRoom, elevator,  firstFloor, secondFloor, officeOne, officeTwo);


    var connections = [
      [0,1,0,0,0,0,0,0],
      [1,0,1,1,0,0,0,0],
      [0,1,0,0,0,0,0,0],
      [0,1,0,0,1,0,0,0],
      [0,0,0,1,0,1,0,0],
      [0,0,0,0,1,0,1,0],
      [0,0,0,0,0,1,0,1],
      [0,0,0,0,0,0,1,0]
    ];

    var map = {locations: locations, connectionsMatrix: connections};

   
    function navigate(input){
        var x = getConnectedLocations(player.currentLocationRow.value); //takes the number of the current location row which starts off as 0 runs it through get connected locations and gets available places and stores it
        for(var i = 0; i < locations.length; i++){// loops through location array
          if(locations[i].name == for (var i = 0; i < x.length; i++) {x[i]} // if the location[i] name is equal to any of the names in x then
            if(input == location[i].name) // checks to see if users input is the same name
              player.location = location[i]; //puts the locations object into player.location
              player.currentLocationRow = location[i].value; //updates the value of the row to the player object
          }
        }

    }

    function getConnectedLocations(row){
            var connectedL = [];
                        for(column = 0; column < connections[row].length; column++){
                                        if(connections[row][column] == 1){
                                connectedL.push(locations[column].name);  
                    }
                }
        return connectedL;
    }
   
    function getDescripByName(input){
            var x;
            for(i = 0; i < locations.length; i++){
                    if(input == locations[i]){
                         x = locations[i].description;
                        return x;
                    }
                    else{
                        x = 'This is not a Location';
                        return x;
                    }
            }
    }

    

