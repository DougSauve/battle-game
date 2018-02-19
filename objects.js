function CreateGameSpace () {
  //set the layout for the game.

  //if the screen's smallest dimension is smaller than 400px(?), the layout has to be contracted.

  //If it's bigger than 600px(?) it will be expanded.

  //if it's in between, if the bigger dimension is at least 133% of the smaller one, it's expanded; otherwise it's contracted.

  //get the smallest dimension

  //set smallestDimension

  //set biggestDimension

  //Set layout according to the screen size and ratio.

}

function CreateArea (smallest dimension) {
  //get the smallest dimension from the GameSpace

  //create a 15x15 area based on the smallest dimension - it will be 90% of the smallest dimension, leaving room for little information panels along the top and side.

  //define the positions and size for the hexes and store these in nested arrays.

}

function CreateHex (vertical coordinate, horizontal coordinate, height, width) {
  //for each Hex space that CreateArea defines, create a Hex there. A Hex needs a terrain type, somewhat randomly assigned.
}

function CreateDash (smallest dimension, biggest dimension, layout) {
//get the layout and smallest dimension from the GameSpace

//if the layout is expanded, make the dash fit beside/below it

//if the layout is contracted, make the dash fit over it.

}
