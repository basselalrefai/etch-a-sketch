//UI variables
const divContainer = document.getElementById("grid-container");
const resetBtn = document.querySelector(".reset-btn");
const submitBtn = document.querySelector(".btn");

//Create Divs
function createDivs(numberOfDivs, numberOfColumns, numberOfRows) {
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch-square");
    divContainer.appendChild(div);
    divToColor.push(div);
  }
  divContainer.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
  divToColor.forEach((div) => {
    div.addEventListener("mouseover", handleHover);
  });
}

const divToColor = [];

//Event handlers
function handleHover(e) {
  let color = `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;
  e.target.style.backgroundColor = `rgb(${color})`;
}

function handleSubmit(e) {
  e.preventDefault();
  let numberOfColumns = document.querySelector("#cols").value;
  let numberOfRows = document.querySelector("#rows").value;
  if (numberOfColumns > 100 || numberOfRows > 100) {
    return;
  }
  const divToCreate = parseInt(numberOfRows) * parseInt(numberOfColumns);
  divToColor.forEach((div) => (div.style.backgroundColor = "#fff"));
  createDivs(divToCreate, numberOfRows, numberOfColumns);
}

function resetDivs() {
  divToColor.forEach((div) => (div.style.backgroundColor = "#fff"));
  window.location.reload();
}

//Event Listener

resetBtn.addEventListener("click", resetDivs);
submitBtn.addEventListener("click", handleSubmit);
