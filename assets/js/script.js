let borderObject = document.getElementById("border-object");

// Horizontal
let borderTopRightLogicalValue = "0";
let borderTopRightPhysicalValue = "100";
let borderBottomLeftLogicalValue = "0";
let borderBottomLeftPhysicalValue = "100";

// Vertical
let borderTopLeftLogicalValue = "100";
let borderTopLeftPhysicalValue = "0";
let borderBottomRightLogicalValue = "100";
let borderBottomRightPhysicalValue = "0";

let applyBorderRadius = () => {
  borderObject.style.borderRadius = `${borderTopRightLogicalValue}% ${borderTopRightPhysicalValue}% ${borderBottomLeftLogicalValue}% ${borderBottomLeftPhysicalValue}% / ${borderTopLeftLogicalValue}% ${borderTopLeftPhysicalValue}% ${borderBottomRightLogicalValue}% ${borderBottomRightPhysicalValue}%`;
};

applyBorderRadius();

let borderTopRightSlider = document.getElementById("border-top-right-radius");
let borderBottomLeftSlider = document.getElementById(
  "border-bottom-left-radius"
);
let borderTopLeftSlider = document.getElementById("border-top-left-radius");
let borderBottomRightSlider = document.getElementById(
  "border-bottom-right-radius"
);

let calculateBorderModification = (sliderValue) => {
  let firstProperty = sliderValue;
  let secondProperty = 100 - sliderValue;
  return [firstProperty, secondProperty];
};

let applyBorderModification = (event) => {
  let [firstProperty, secondProperty] = calculateBorderModification(
    event.target.value
  );

  switch (event.target.id) {
    case "border-top-right-radius":
      borderTopRightLogicalValue = firstProperty;
      borderTopRightPhysicalValue = secondProperty;
      break;
    case "border-bottom-left-radius":
      borderBottomLeftLogicalValue = firstProperty;
      borderBottomLeftPhysicalValue = secondProperty;
      break;
    case "border-top-left-radius":
      borderBottomRightPhysicalValue = firstProperty;
      borderTopLeftLogicalValue = secondProperty;
      break;
    case "border-bottom-right-radius":
      borderTopLeftPhysicalValue = firstProperty;
      borderBottomRightLogicalValue = secondProperty;
      break;
  }
  applyBorderRadius();
  let result = document.getElementById("result");
  result.innerHTML = `${borderTopRightLogicalValue}% ${borderTopRightPhysicalValue}% ${borderBottomLeftLogicalValue}% ${borderBottomLeftPhysicalValue}% / ${borderTopLeftLogicalValue}% ${borderTopLeftPhysicalValue}% ${borderBottomRightLogicalValue}% ${borderBottomRightPhysicalValue}%`;
};

borderTopRightSlider.addEventListener("change", applyBorderModification);
borderBottomLeftSlider.addEventListener("change", applyBorderModification);
borderTopLeftSlider.addEventListener("change", applyBorderModification);
borderBottomRightSlider.addEventListener("change", applyBorderModification);
