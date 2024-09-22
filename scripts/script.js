grid();

function grid() {
  let input = prompt('Number of Rows and Columns (maximum = 100)', 16);
  input = parseInt(input);

  while (true) {
    if (input > 100) {
      input = prompt('Please Input Values Lesser Than or Equal to 100');
    } else {
      break;
    }
  }
  number = input;
  etchASketch(number);
}

function etchASketch(number) {

  const container = document.querySelector('.grid-container');

  for (let i = 0; i < number; i++) {
    const gridRow = document.createElement('div');

    gridRow.classList.add('grid-row')
    gridRow.style.cssText = 'flex: 1; display: flex;';

    for (let i = 0; i < number; i++) {
      const gridColumn = document.createElement('div');

      gridColumn.classList.add('grid-box');

      gridColumn.style.cssText = 'flex: 1; border-style: solid; border-width: 1px;';

      gridRow.append(gridColumn);
    }

    container.appendChild(gridRow);
  }
}

function clearGrid() {
  const square = document.querySelectorAll('.grid-row');
  square.forEach(function(box) {
    box.remove();
  })

  grid();
}



function toggleButtons(selector) {
  buttonElement = document.querySelector(selector);

  if (selector === '.black') {
    buttonElement.addEventListener('click', function() {
      document.querySelectorAll('.grid-box').forEach(function(box) {
        box.addEventListener('mouseover', function() {
          box.style.backgroundColor = 'black';
        })
      })
    })
  } else if (selector === '.eraser') {
    buttonElement.addEventListener('click', function() {
      document.querySelectorAll('.grid-box').forEach(function(box) {
        box.addEventListener('mouseover', function() {
          box.style.backgroundColor = 'white';
        })
      })
    })
  } else if (selector === '.random') {
    buttonElement.addEventListener('click', function() {
      document.querySelectorAll('.grid-box').forEach(function(box) {
        box.addEventListener('mouseover', function() {
          box.style.backgroundColor = getRandomColor();
        })
      })
    })
  }
} 

function getRandomColor() {
  const randomColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  const random = Math.floor(Math.random() * randomColor.length);

  return randomColor[random];
  
}

// getRandomColor();