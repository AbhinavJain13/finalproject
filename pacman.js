$(document).ready(function(){
  $('div.gameboard').html(drawGameBoard(gameboard));
  $(document).keydown(keyPress);
})


var PAC = 'pacman',
    COI = 'coin',
    EMP = 'empty',
    BRK = 'brick';

var gameboard = [
  [BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK],
  [BRK, PAC, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK],
]

var pacmanLocation = {
  x: 1,
  y: 1
}

function keyPress(keystrokeEvent){

  gameboard[pacmanLocation.y][pacmanLocation.x] = EMP;

  switch (keystrokeEvent.key) {
    case "ArrowDown":
      pacmanLocation.y += 1;
      break;
    case "ArrowUp":
      pacmanLocation.y -= 1;
      break;
    case "ArrowRight":
      pacmanLocation.x += 1;
      break;
    case "ArrowLeft":
      pacmanLocation.x -= 1;
      break;
    default:
      console.log("Non-arrow key pressed...")
  }
  gameboard[pacmanLocation.y][pacmanLocation.x] = PAC;
  $('div.gameboard').html(drawGameBoard(gameboard));
}



function drawGameBoard(grid){
  var outputStr = "";

  for( var rowIdx = 0; rowIdx < grid.length; rowIdx += 1){
    outputStr += "<div class='row'>"
    // Creating the cell
    for ( colIdx = 0; colIdx < grid[rowIdx].length; colIdx += 1) {
      outputStr += `<div class='cell ${grid[rowIdx][colIdx]}'></div>`
    }
    outputStr += "</div>"
  }
  return outputStr;
}