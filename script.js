const parentDiv = document.querySelector('div');

function createDiv(gridSize) {
  let gridRow = (500 / gridSize);
  let gridBox = gridRow - 2;
  console.log(gridBox);
  for(let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = `${gridBox}px`;
    newDiv.style.height = `${gridBox}px`;
    parentDiv.appendChild(newDiv);
  }
}

createDiv(8);