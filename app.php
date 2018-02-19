<!DOCTYPE html>
<html>
  <head>
    <script src = "../jQuery.js"></script>
    <script src = "./objects.js"></script>
  </head>
  <body>
    <script>

    initializeGame(15,15);

    //initialize everything
    function initializeGame(hexesHigh, hexesWide) {

//these all need to be positioned with css
    const gs = new GameSpace();
    const m = new Menu();
    const a = new Area(gs.getSmallestDimension(), hexesHigh, hexesWide);

    //create an array to hold all of the hexes
    var hexes = [];

    //create the hexes, and insert them into (dynamically created) nested arrays within 'hexes'.
    for (let z = 0; z < hexesHigh; z++){
      for (let y = 0; y < hexesWide; y++){
        hexes[z][y] = new Hex(z * a.getHexLength(), y * a.getHexLength(), a.getHexLength()); // for these arguments, get the location and size from a.)
      }
    }



  }
    </script>
  </body>
</html>
