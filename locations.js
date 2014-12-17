

    function Location(name, description, items, enemies, availableActions, row, requirements, remove){
        this.name = name;
        this.description = description;
        this.items = items;
        this.enemies = enemies;
        this.availableActions = availableActions;
        this.row = row;
        this.requirements = requirements;
        this.remove = remove;
    };

    function AvActions() {
      var x = player.location.availableActions;//goes into the location array and selects whatever object the represents the player's location and returns its available actions
      return x;// returns the content
    }




      function itemConstructor(name, description, dam , spDam, quantity, alerInc){
            this.name = name;
            this.description = description;
            this.dam = dam;
            this.spDam = spDam;
            this.quantity = quantity;
            this.alerInc = alerInc;
      }

      var intel = new itemConstructor('intel', 'Target Name: Paul White, Location: should be on second floor');
      var silencedPistol = new itemConstructor('Silenced 9mm Pistol', '', 2, 5, 15, 3 );
      var poison = new itemConstructor('Posion', "Slip into a consumable and watch your desired outcome", 5, 5, 1, 1);
      var knife = new itemConstructor('Knife',"Raptor Claw knife. Perfect for a stealth kill", 1, 5, 10, 1);
      var keycard = new itemConstructor('keycard', 'used for security clearance', 0, 0, 1);
      var encodedKeycard = new itemConstructor('encodedKeycard', 'can be used for all floors', 0, 0, 1);


      var gear = [intel, silencedPistol, poison, knife];

      function SecurityGuard(health, description){
              this.health = health;
              this.description = description;
      }

      var gaurd1 = new SecurityGuard(4, 'The tall muscular gaurd is sitting on his chair');
      var gaurd2 = new SecurityGuard(4, "The target is sitting facing the window ");


    var lobby = new Location('lobby', 'This is the Lobby. There are inate patterns on the wall. This floor has two doors.... the elevator appears to be locked. I see an employees keycard on the ground, but I need a way of encoding it', keycard, '' , ['pickup keycard ',' go utilities room', 'go elevator'], 1, gear, '');
    var utilitiesRoom = new Location('utilities room', 'There seems to be a working keycard encoder. There is a security gaurd what should I do?', encodedKeycard, gaurd1, ['pickup encoded keycard ','shoot gaurd1 ', 'go lobby', 'knife gaurd1'], 2, encodedKeycard, keycard);
    var elevator = new Location('elevator', 'Building seems to have 4 floors....', '' ,'' ,'go first floor', 3 , encodedKeycard, encodedKeycard);
    var home = new Location('home', 'I just got my intel on a new target. The intel should be in my gear. I need to pick up my gear before I go.', gear, '',  'go lobby, pickup gear', 0, gear);
    var firstFloor = new Location('first floor', "The receptionist keeps looking up at me, I should be able to get some information out of her.", "Target is in the 2nd office on the 2nd floor ", '' , ['talk ', 'go second floor'], 3, '');
    var secondFloor = new Location('second floor', "there are two offices which should I go to?", '' , '' , ['go first office'], 4 , '');
    var officeOne = new Location("first office", "This is his office... there is medication on his desk", "Pill container", '' , ["poison pill container ", "go second office"], 5, '');
    var officeTwo = new Location('second office', "He is here", '', gaurd2, [' shoot', ' knife', ' observe'], 6, '');    

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

    function getRowByName(input){
            var x;
            for(i = 0; i < locations.length; i++){//loops through locations array
                    if(input == locations[i].name){// if input is equal to a name in locations
                         x = i;
                        return x;//returns the row on connections
                    }                    
                    else{
                      console.log('this ' + input + " does not exist.... try typing again");
                    }
            }
    }
    

