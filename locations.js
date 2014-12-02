

    function Location(name, description, items){
        this.name = name;
        this.description = description;
        this.items = items;

    };

    var firstFloor = new Location('First Floor', 'This floor has two doors.... they appear to be locked', 'keycard');
    var utilitiesRoom = new Location('Utilities Room', 'There seems to be a working keycard encoder', 'Encoded keycard');
    var elevator = new Location('Elevator', 'Building seems to have 4 floors....' );
    var locations = [];
    locations.push(firstFloor, utilitiesRoom, elevator);


    var connections = [
      [0,1,1],
      [1,0,0],
      [1,0,0],
    ];

    var map = {locations: locations, connectionsMatrix: connections};

    function testThis(){
      for ( i in locations){
      if(connections[0][i] === 1){
        console.log(locations[i].name);
        }
      }
    };

    testThis();
