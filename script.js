const parentDiv = document.querySelector('#parent-div');
const resetBtn = document.querySelector('#reset-btn');
let userGrid;

function createDiv(gridSize) {
  if(isNaN(gridSize)) {
    while(isNaN(gridSize)) {
      gridSize = Number(prompt("Please choose a number for the grid size. Between 1 and 50 is recommended."));
    };
  }

  let gridRow = (700 / gridSize);
  let gridBox = gridRow - 2;
  for(let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    newDiv.style.width = `${gridBox}px`;
    parentDiv.appendChild(newDiv);
  }

  fillGrid();
}

function fillGrid() {
  document.addEventListener('mouseover', function(e) {
    if(e.target.className === "grid") {
      e.target.classList.add('square');
    }
  });
}

resetBtn.addEventListener('click', function() {
  let numChildren = parentDiv.children.length;
  for(let i = 0; i < numChildren; i++) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  
  userGrid = Number(prompt("Pick a new grid size. Between 1 and 50 recommended."));
  createDiv(userGrid);
});




createDiv(16);
