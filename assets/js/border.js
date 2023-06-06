const borderObject = document.getElementById("border-object");
const resultElement = document.getElementById("result");

const borderTopRightSlider = document.getElementById("border-top-right-radius");
const borderBottomLeftSlider = document.getElementById(
  "border-bottom-left-radius"
);
const borderTopLeftSlider = document.getElementById("border-top-left-radius");
const borderBottomRightSlider = document.getElementById(
  "border-bottom-right-radius"
);

let borderTopRightLogicalValue = "0";
let borderTopRightPhysicalValue = "100";
let borderBottomLeftLogicalValue = "0";
let borderBottomLeftPhysicalValue = "100";
let borderTopLeftLogicalValue = "100";
let borderTopLeftPhysicalValue = "0";
let borderBottomRightLogicalValue = "100";
let borderBottomRightPhysicalValue = "0";

const applyBorderRadius = () => {
  const borderProperties = `${borderTopRightLogicalValue}% ${borderTopRightPhysicalValue}% ${borderBottomLeftLogicalValue}% ${borderBottomLeftPhysicalValue}% / ${borderTopLeftLogicalValue}% ${borderTopLeftPhysicalValue}% ${borderBottomRightLogicalValue}% ${borderBottomRightPhysicalValue}%`;
  borderObject.style.borderRadius = borderProperties;
  updateResult(borderProperties);
};

const calculateBorderModification = (sliderValue) => {
  const firstProperty = sliderValue;
  const secondProperty = 100 - sliderValue;
  return [firstProperty, secondProperty];
};

const updateResult = (borderProperties) => {
  resultElement.innerHTML = borderProperties;
};

const applyBorderModification = (event) => {
  const [firstProperty, secondProperty] = calculateBorderModification(
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
};

borderTopRightSlider.addEventListener("change", applyBorderModification);
borderBottomLeftSlider.addEventListener("change", applyBorderModification);
borderTopLeftSlider.addEventListener("change", applyBorderModification);
borderBottomRightSlider.addEventListener("change", applyBorderModification);

applyBorderRadius();
