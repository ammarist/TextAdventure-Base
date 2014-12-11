

    function Location(name, description, items, enemies){
        this.name = name;
        this.description = description;
        this.items = items;
        this.enemies = enemies;
    };


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



    var lobby = new Location('Lobby', 'This floor has two doors.... they appear to be locked.', 'keycard');
    var utilitiesRoom = new Location('Utilities Room', 'There seems to be a working keycard encoder', 'Encoded keycard', 2);
    var elevator = new Location('Elevator', 'Building seems to have 4 floors....' );
    var home = new Location('Home', 'I need to pick up my gear before I go.', gear)
    var firstFloor = new Location('First Floor', "You only have Security clearance for this floor! The receptionist keeps looking up at me, I should be able to get some information out of her.", "Target is in the 2nd office on the 2nd floor ")
    var secondFloor = new Location('Second Floor', "there are two offices which should I go to?" )
    var officeOne = new Location("First Office", "This is his office... there is medication on his desk", "Pill container")
    var officeTwo = new Location('Second Office', "He is here", '', 1)    

    var locations = [];
    locations.push(lobby, utilitiesRoom, elevator, home, firstFloor, secondFloor, officeOne, officeTwo);


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

   
    function navigate(matrix){

    }

    function dataToRowTranslator(data){
          for(var i = 0; i < locations.length; i++){ //loops the length of the locations array
              if(locations[i] === data){ //if locations[i] is equal to the location
                var rowTranslator = i; //stores the corresponding row number 
              }
          }
          return rowTranslator;
    }

    function getConnectedLocations(row){
            var connectedL = [];
                        for(column = 0; column < connections[row].length; column++){
                                        if(connections[row][column] == 1){
                                connectedL.push(locations[column].name);  
                    }
                }
            console.log(connectedL);
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


