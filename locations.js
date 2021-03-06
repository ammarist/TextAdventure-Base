

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
      var silencedPistol = new itemConstructor('Silenced 9mm Pistol', ' polymer-framed, short recoil operated, locked breech semi-automatic pistol', 2, 5, 15, 50 );
      var poison = new itemConstructor('Posion', "Slip into a consumable and watch your desired outcome", 10, 5, 1, 10);
      var knife = new itemConstructor('Knife',"Raptor Claw knife. Perfect for a stealth kill", 10, 5, 10, 10);
      var keycard = new itemConstructor('keycard', 'used for security clearance', 0, 0, 1);
      var encodedKeycard = new itemConstructor('encodedKeycard', 'can be used for all floors', 0, 0, 1);

      var pillContainer = 0;
      var gear = [intel, silencedPistol, poison, knife];

      function SecurityGuard(health, description, name){
              this.health = health;
              this.description = description;
              this.name = name;
      }

      var gaurd = new SecurityGuard(4, 'The tall muscular gaurd is sitting on his chair', 'gaurd');
      var paul = new SecurityGuard(4, "The target is sitting facing the window ", 'paul');

    var gameOver = new Location('gameOver', "GAME OVER THANKS FOR PLAYING!!!!", keycard, '' , [], 7, 'gear', '');
    var lobby = new Location('lobby', 'This is the Lobby. There are inate patterns on the wall. This floor has two doors.... the elevator appears to be locked. I see an employees keycard on the ground, but I need a way of encoding it', keycard, '' , ['pickup keycard ',' go utilities room', 'go elevator'], 1, 'gear', '');
    var utilitiesRoom = new Location('utilities room', 'There seems to be a working keycard encoder. There is a security gaurd what should I do?', encodedKeycard, gaurd, ['shoot gaurd ', 'knife gaurd','pickup encodedKeycard ', 'go lobby'], 2, 'keycard', keycard);
    var elevator = new Location('elevator', 'Building seems to have 2 floors.... The first floor is already selected, lets see what I can find out.', '' ,'' ,'go first floor', 3 , 'encodedkeycard', encodedKeycard);
    var home = new Location('home', 'I just got my intel on a new target. The intel should be in my gear. I need to pick up my gear before I go.', gear, '',  'go lobby, pickup gear, check gear', 0, gear);
    var firstFloor = new Location('first floor', "The receptionist keeps looking up at me, I should be able to get some information out of her.", "Target is in the 2nd office on the 2nd floor ", '' , ['talk ', 'go second floor'], 3, 'encodedkeycard', '');
    var secondFloor = new Location('second floor', "This is the second floor. He should be in the second office", '' , '' , ['go first office'], 4 , 'encodedkeycard');
    var officeOne = new Location("first office", "This is his office... there is medication on his desk", pillContainer, '' , ["poison pillContainer ", "go second office"], 5, 'encodedkeycard');
    var officeTwo = new Location('second office', "Hi my name is Paul White! How can I help you?", '', paul, [' shoot paul', ' knife paul', ' observe paul'], 6, 'encodedkeycard');    

    var locations = [];
    locations.push(home, lobby, utilitiesRoom, elevator,  firstFloor, secondFloor, officeOne, officeTwo,gameOver);


    var connections = [
      [0,1,0,0,0,0,0,0,0],
      [1,0,1,1,0,0,0,0,0],
      [0,1,0,0,0,0,0,0,0],
      [0,1,0,0,1,0,0,0,0],
      [0,0,0,1,0,1,0,0,0],
      [0,0,0,0,1,0,1,0,0],
      [0,0,0,0,0,1,0,1,0],
      [0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,1,0]
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
    

