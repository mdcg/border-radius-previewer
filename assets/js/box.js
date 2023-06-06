const borderObjectWidth = document.getElementById("border-size-width");
const borderObjectHeight = document.getElementById("border-size-height");

let applyBorderObjectSize = (event) => {
  let value = `${event.target.value}px`;
  switch (event.target.id) {
    case "border-size-width":
      borderObject.style.width = value;
      break;
    case "border-size-height":
      borderObject.style.height = value;
      break;
  }
};

borderObjectWidth.addEventListener("change", applyBorderObjectSize);
borderObjectHeight.addEventListener("change", applyBorderObjectSize);
