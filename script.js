const parentDiv = document.querySelector('#parent-div');
var optionsUl = document.querySelector('#options-menu');
var gridColor = "rgb(0,0,0)";


function createDiv(gridSize) {
  console.log(gridColor);
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
      e.target.style.backgroundColor = gridColor;
    } else if (e.target.className === "grid rgb") {
      let randomRed = Math.floor(Math.random() * 256);
      let randomGreen = Math.floor(Math.random() * 256);
      let randomBlue = Math.floor(Math.random() * 256);
      gridColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
      e.target.style.backgroundColor = gridColor
    }
  });
}

function clickEventListeners() {
  optionsUl.addEventListener('click', function(e) {
    let numChildren = parentDiv.children.length;
    if(e.target.id === "reset") {
      for(let i = 0; i < numChildren; i++) {
        parentDiv.children[i].style.backgroundColor = "rgb(255,255,255)";
        parentDiv.children[i].className = "grid";
      }
      gridColor = "rgb(0,0,0)";
    } else if(e.target.id === "custom") {
      for(let i = 0; i < numChildren; i++) {
        parentDiv.removeChild(parentDiv.firstChild);
      }
      let userGrid = Number(prompt("Pick a new grid size. Between 1 and 50 recommended."));
      createDiv(userGrid);
    } else if(e.target.id === "black") {
      gridColor = "rgb(0,0,0)";
      for(let i = 0; i < numChildren; i++) {
        parentDiv.children[i].className = "grid";
      }
    } else if(e.target.id === "grayscale") {
    } else if (e.target.id === "rgb") {
      for(let i = 0; i < numChildren; i++) {
        parentDiv.children[i].classList.add('rgb');
      }
    }
  })
}


createDiv(4);
clickEventListeners();

// add color | shading options