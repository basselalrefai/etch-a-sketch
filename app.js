//UI variables
const divContainer = document.getElementById("grid-container");
const resetBtn = document.querySelector(".reset-btn");

//Create Divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("sketch-square");
  divContainer.appendChild(div);
}

const divToColor = document.querySelectorAll(".sketch-square");

//Event handlers
function handleHover(e) {
  console.log(e.target);
  let color = `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;
  e.target.style.backgroundColor = `rgb(${color})`;
}

function resetDivs() {
  divToColor.forEach((div) => (div.style.backgroundColor = "#fff"));
}

//Event Listener
divToColor.forEach((div) => {
  div.addEventListener("mouseover", handleHover);
});
resetBtn.addEventListener("click", resetDivs);
