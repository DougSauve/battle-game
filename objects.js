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
//create methods to return all of these as needed

function Area (smallestDimension, gameHeight, gameWidth, isLandscape, hexesHigh, hexesWide) {

  //create a hexesHigh x hexesWide area based on the smallest dimension - it will be 90% of the smallest dimension and slightly offset, leaving room for little information panels along the top and side.

  var hexLength, boardWidth, boardHeight;

    if (hexesHigh > hexesWide) {
      boardHeight = smallestDimension * 0.9;
      hexLength = boardHeight / hexesHigh;
      boardWidth = hexLength * hexesWide;
    } else {
      boardWidth = smallestDimension * 0.9;
      hexLength = boardWidth / hexesWide;
      boardHeight = hexLength * hexesHigh;
    }


  //create the Area div
  $('body').append(`<div id = "Area" style = "width: ${boardWidth}px; height: ${boardHeight}px; background-color: #553344; position: absolute; left: 0; right: 0; margin: ${gameHeight/20}px auto;"></div>`);

  this.getBoardLength = function() {
    return boardLength;
  }
  this.getHexLength = function() {
    return hexLength;
  }

}

function Hex (verticalPosition, horizontalPosition,  verticalCoordinate, horizontalCoordinate, sideLength) {

  var terrain = getRandomTerrain();

  var backgroundColor = setBackgroundColor(terrain);

  //create the Hex div
  $('#Area').append(`<div id = "Hex${horizontalPosition}by${verticalPosition}"; style = "position: absolute; top: ${verticalCoordinate}px; left: ${horizontalCoordinate}px; height: ${sideLength}px; width: ${sideLength}px; background-color: ${backgroundColor}; border-radius: 8px 3px 8px 3px"></div>`);

  this.setTerrain = function(terr) {
    terrain = terr;
  }
  this.getTerrain = function() {
    return terrain;
  }
  //generates a random terrain
  function getRandomTerrain() {
    let num = getRand(1,5);

    if (num === 1) return "forest";
    else if (num === 2) return "meadow";
    else if (num === 3) return "swamp";
    else if (num === 4) return "water";
    else if (num === 5) return "mountain";
  }
  //assign the appropriate background color to the terrain
  function setBackgroundColor(terr) {
    if (terr === "forest") {
      return "#33dd33";
    } else if (terr === "meadow") {
      return "#99dd55";
    } else if (terr === "swamp") {
      return "#335533";
    } else if (terr === "water") {
      return "#1144ee";
    } else if (terr === "mountain") {
      return "#553322";
    }
  }
}

function Menu (smallestDimension, biggestimension, layout) {
//get the layout and smallest dimension from the GameSpace

//if the layout is expanded, make the dash fit beside/below it

//if the layout is contracted, make the dash fit over it.

}
