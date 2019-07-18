const parentDiv = document.querySelector('#parent-div');

function createDiv(gridSize) {
  let gridRow = (800 / gridSize);
  let gridBox = gridRow - 2;
  for(let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = `${gridBox}px`;
    parentDiv.appendChild(newDiv);
  }

  let square = parentDiv.querySelectorAll('div');

  document.addEventListener('mouseover', function(e) {
    if(e.target.tagName === "DIV" && e.target.id != "#parent-div") {
      e.target.classList.toggle('square');
    }
  });
}

createDiv(16);

