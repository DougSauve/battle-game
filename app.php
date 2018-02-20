<!DOCTYPE html>
<html>
  <head>
    <script src = "../jQuery.js"></script>
    <script src = "./HandyStuff.js"></script>
    <script src = "./objects.js"></script>
  <!--  <link rel = "stylesheet" type = "text/css" href = "test.css">-->
  </head>
  <body>
    <script>
      initializeGame(10, 10);

      //initialize everything
      function initializeGame(hexesWide, hexesHigh) {

        //these all need to be positioned with css
        const gs = new GameSpace();
        const m = new Menu();
        const a = new Area(gs.getSmallestDimension(), gs.getGameHeight(), gs.getGameWidth(), gs.isLandscape(), hexesHigh, hexesWide);

        //create an array to hold all of the hexes
        var hexes = [];

        //create the hexes, and insert them into (dynamically created) nested arrays within 'hexes'.
        for (let z = 0; z < hexesHigh; z++){

          hexes[z] = [];

          for (let y = 0; y < hexesWide; y++){
            hexes[z][y] = new Hex(z, y, z * a.getHexLength(), y * a.getHexLength(), a.getHexLength()); // for these arguments, get the location and size from a.)
          }
        }
        let grab = document.getElementById("Hex0by7");
        grab.style.backgroundColor = "";
        grab.style.backgroundImage = "url('Sky.jpg')";
        grab.style.backgroundSize = "cover";
      }
    </script>
  </body>
</html>
