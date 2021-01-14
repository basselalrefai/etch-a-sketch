//UI variables
const divContainer = document.getElementById("grid-container");

//Create Divs
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("sketch-square");
  divContainer.appendChild(div);
}
//Event handlers
