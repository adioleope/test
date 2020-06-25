
var grid = document.getElementById("grid");
var testMode = false; //true to check the presence of mine
generateGrid();


//function to generate 10*10 grid
function generateGrid() {
  grid.innerHTML="";
  for (var i=0; i<10; i++) {
    row = grid.insertRow(i);
    for (var j=0; j<10; j++) {
      cell = row.insertCell(j);
      cell.onclick = function() { clickCell(this); };
      var mine = document.createAttribute("data-mine");       
      mine.value = "false";             
      cell.setAttributeNode(mine);
    }
  }
  addMines();
}


function addMines() {
  for (var i=0; i<20; i++) {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    var cell = grid.rows[row].cells[col];
    cell.setAttribute("data-mine","true");
    if (testMode) cell.innerHTML="X";
  }
}


function revealMines() {
    for (var i=0; i<10; i++) {
      for(var j=0; j<10; j++) {
        var cell = grid.rows[i].cells[j];
        if (cell.getAttribute("data-mine")=="true") cell.className="mine";
      }
    }
}

function checkLevelCompletion() {
  var levelComplete = true;
    for (var i=0; i<10; i++) {
      for(var j=0; j<10; j++) {
        if ((grid.rows[i].cells[j].getAttribute("data-mine")=="false") && (grid.rows[i].cells[j].innerHTML=="")) levelComplete=false;
      }
  }
  if (levelComplete) {
    alert("You Win!");
    revealMines();
  }
}





