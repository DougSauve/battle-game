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

        //set the page margin and padding to 0
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.boxSizing = "border-box";

        //these all need to be positioned with css
        const gs = new GameSpace();
        const m = new Menu();
        const a = new Area(gs.getSmallestDimension(), gs.getGameHeight(), gs.getGameWidth(), gs.isLandscape(), hexesHigh, hexesWide);

        //create an array to hold all of the hexes
        var hex = [];

        //create the hexes, and insert them into (dynamically created) nested arrays within 'hexes'.
        for (let z = 0; z < hexesHigh; z++){

          hex[z] = [];

          for (let y = 0; y < hexesWide; y++){
            hex[z][y] = new Hex(y, z, z * a.getHexLength(), y * a.getHexLength(), a.getHexLength()); // for these arguments, get the location and size from a.)
          }
        }

        const t1 = new Teammate();

        //set Teammate into its starting position
        t1.setStartPosition(hex[0][5]);

        //listener for arrow keys.
        document.onkeydown = getKeyPressed;
        function getKeyPressed(e) {
          e = e || window.event;

          if (e.keyCode == '37') t1.move(hex, "left");
          if (e.keyCode == '38') t1.move(hex, "up");
          if (e.keyCode == '39') t1.move(hex, "right");
          if (e.keyCode == '40') t1.move(hex, "down");
        }






      }
    </script>
  </body>
</html>
