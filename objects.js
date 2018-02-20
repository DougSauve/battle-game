//provides information and dimensions to other classes and contains the whole game.
function GameSpace () {
  //set the layout for the game:

  //get the height and width of the viewport
  const gameHeight = $(window).height();
  const gameWidth = $(window).width();

  //set smallestDimension and biggestDimension to portrait view
  var smallestDimension = gameWidth;
  var isLandscape = false;
  var biggestDimension = gameHeight;

  //switch to landscape if necessarry
  if (gameHeight < gameWidth) {
    smallestDimension = gameHeight;
    isLandscape = true;
    biggestDimension = gameWidth;
  }

  //set layout for a small screen. If the screen's smallest dimension is smaller than 400px(?), expanded layout is false.
  var expandedLayout = false;

  //if it's between 400px and 600px and the bigger dimension is at least 133% of the smaller one, it's expanded.
  if ((smallestDimension >= 400)&&(smallestDimension < 600)) {
    if (biggestDimension * 3 >= smallestDimension * 4) {
      expandedLayout = true;
    }
  }
  //If it's bigger than 600px(?) it will be expanded.
  else if (smallestDimension >= 600) {
    expandedLayout = true;
  }

  $('body').append(`<div id = "GameSpace" style = "width: ${gameWidth}px; height: ${gameHeight}px; position: absolute; background-color: grey"></div>`);

  //methods to return all of these as needed
  this.getSmallestDimension = function() {
    return smallestDimension;
  };
  this.getBiggestDimension = function() {
    return biggestDimension;
  };
  this.isLayoutExpanded = function() {
    return expandedLayout;
  }
  this.getGameHeight = function() {
    return gameHeight;
  }
  this.getGameWidth = function () {
    return gameWidth;
  }
  this.isLandscape = function () {
    return isLandscape;
  }

}

//this is the play area where the actual game happens.
function Area (smallestDimension, gameHeight, gameWidth, isLandscape, hexesHigh, hexesWide) {

  //create a hexesHigh x hexesWide area based on the smallest dimension - it will be 90% of the smallest dimension and slightly offset, leaving room for little information panels along the top and side.
  var hexLength, boardWidth, boardHeight;


    if (hexesHigh > hexesWide) {
      //the longest dimension of Area will always be 90% of the smallest dimension.
      boardHeight = smallestDimension * 0.9;
      hexLength = boardHeight / hexesHigh;
      //determine the other dimension relative to the number of hexes going that way
      boardWidth = hexLength * hexesWide;
    } else {
      boardWidth = smallestDimension * 0.9;
      hexLength = boardWidth / hexesWide;
      boardHeight = hexLength * hexesHigh;
    }


  //create the Area div
  $('body').append(`<div id = "Area" style = "width: ${boardWidth}px; height: ${boardHeight}px; background-color: #553344; position: absolute; left: 0; right: 0; margin: ${gameHeight/20}px auto;"></div>`);

  this.getBoardWidth = function() {
    return boardWidth;
  }
  this.getBoardHeight = function() {
    return boardHeight;
  }
  this.getHexLength = function() {
    return hexLength;
  }

}

//this is one hex on the board (there will be many instances of this.)
function Hex (verticalPosition, horizontalPosition,  horizontalCoordinate, verticalCoordinate, sideLength) {

  var terrain = getRandomTerrain();
  var image = "";

  const divId = `Hex${horizontalPosition}x${verticalPosition}`;

  //create the Hex div
  $('#Area').append(`<div id = "${divId}"; style = "position: absolute; top: ${verticalCoordinate}px; left: ${horizontalCoordinate}px; height: ${sideLength}px; width: ${sideLength}px; background: url('./Photos/${terrain}'); background-size: cover; border: solid black .2vw; border-radius: 8px 3px 8px 3px"></div>`);


  const div = document.getElementById(divId);

  this.getDivId = function() {
    return divId;
  }
  this.setTerrain = function(terr) {
    terrain = terr;
  }
  this.getTerrain = function() {
    return terrain;
  }

  //sets image to the given argument and updates the hex's corresponding div with the argument. If img is undefined, sets the image to "" and removes the image from the div.
  this.setImage = function(img) {
    if (img == undefined)
    {
        image = "";
        div.innerHTML = "";
    } else {
      image = img;

      div.innerHTML = '<img src = "' + image + '" height = "' + sideLength + '" width = "' + sideLength + '">';
    }
  }
  this.getImage = function() {
    return image;
  }

  //generates a random terrain
  function getRandomTerrain() {
    let num = getRand(1,5);

    if (num === 1) return "Forest";
    else if (num === 2) return "Plains";
    else if (num === 3) return "Swamp";
    else if (num === 4) return "Water";
    else if (num === 5) return "Mountain";
  }
}

//this is the information area, if needed.
function Menu (smallestDimension, biggestimension, layout) {

  //get the layout and smallest dimension from the GameSpace

  //if the layout is expanded, make the dash fit beside/below it

  //if the layout is contracted, make the dash fit over it.

}

function Pawn() {

  this.Move = function() {
    //make this one's image disappear, and make the corresponding one's image reappear.
  }
  //what do they all need?
  //race (from DB)
  //current position
  //image
  //stats (race), attack, defence, HP, speed, etc.

  //Methods: move, attack
}
function Teammate() {

  var currentHex;
  var image = "./Photos/Horse.png";


  this.setImage = function(img) {
    image = img;
  }
  this.getImage = function() {
    return image;
  }

  //sets the starting position by calling the appropriate hex and giving it the Teammate's picture
  this.setStartPosition = function(hex) {

    currentHex = hex;

    currentHex.setImage(image);
  }

  //moves the Teammate by calling the current hex and removing its picture, then calling the new hex and giving it the Teammate's picture.
  this.move = function(hexArray, direction) {
    //set the image in the new hex
    var temp = currentHex.getDivId().split("x");

    if (direction === "up") {
      temp[2]--;
    }
    else if (direction === "down") {
      temp[2]++;
    }
    else if (direction === "left") {
      temp[1]--;
    }
    else if (direction === "right") {
      temp[1]++;
    }

    //if the user is trying to go somewhere that doesn't exist, don't move anything and fire an alert.
    if (hexArray[temp[1]]) {
      if (hexArray[temp[1]][temp[2]]) {

        toHex = hexArray[temp[1]][temp[2]];
        //send no parameter to remove the image
        currentHex.setImage();
        toHex.setImage(image);

        currentHex = toHex;
      }else{
        alert("you can't go there.");
      }
    }else{
      alert("you can't go there.");
    }

  }


  //the good guys
  //race chosen from good guys
  //good guy marker
}
function Enemy() {
  //the bad guys
  //race chosen from bad guys
  //bad guy marker
}
