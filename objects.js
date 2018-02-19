function GameSpace () {
  //set the layout for the game:

  //get the height and width of the viewport
  const gameHeight = $(window).height();
  const gameWidth = $(window).width();

  //set smallestDimension and biggestDimension to portrait view
  var smallestDimension = gameWidth;
  var biggestDimension = gameHeight;

  //switch to landscape if necessarry
  if (gameHeight < gameWidth) {
    smallestDimension = gameHeight;
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

  //create methods to return all of these as needed
  function getSmallestDimension() {
    return smallestDimension;
  }
  function getBiggestDimension() {
    return biggestDimension;
  }
  function isLayoutExpanded() {
    return expandedLayout;
  }
  function getGameHeight() {
    return gameHeight;
  }
  function getGameWidth () {
    return gameWidth;
  }

  //create its own div
  /*  let gs = document.createElement("GameSpace");
  gs.setAttribute("id", "GameSpace");
  gs.style = `width: ${gameWidth}; height: ${gameHeight}; background-color: red`;
  document.body.appendChild(gs);
  */
  $('body').append(`<div id = "GameSpace" style = "width: ${gameWidth}; height: ${gameHeight}; position: absolute; background-color: red"></div>`);
}

function Area (smallestDimension) {

  //create a hexesHigh x hexesWide area based on the smallest dimension - it will be 90% of the smallest dimension and slightly offset, leaving room for little information panels along the top and side.

  //set side length of board
  const boardLength = smallestDimension * 0.9;

  //set side length of hexes
  const hexLength = Math.floor(boardLength / 15);

  function getBoardLength() {
    return boardLength;
  }
  function getHexLength() {
    return hexLength;
  }
  //create the Area div
  $('body').append(`<div id = "Area" style = "width: ${getBoardLength}; height: ${getBoardLength}; background-color: blue; position: absolute; left: 50px; right: 50px"></div>`);


}

function Hex (verticalCoordinate, horizontalCoordinate, sideLength) {

  //create the Hex div
  $('#Area').append(`<div style = "display: absolute; top: ${verticalCoordinate}; left: ${horizontalCoordinate}; height: ${sideLength}; width: ${sideLength}; background-color: yellow"></div>`);


  var terrain;

  this.setTerrain("meadow");

  function setTerrain(terr) {
    terrain = terr;
  }
  function getTerrain() {
    return terrain;
  }
}

function Menu (smallest dimension, biggest dimension, layout) {
//get the layout and smallest dimension from the GameSpace

//if the layout is expanded, make the dash fit beside/below it

//if the layout is contracted, make the dash fit over it.

}
