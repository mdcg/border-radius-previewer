const copyButton = document.getElementById("copy-button");

let copyToClipboard = (event) => {
  let currentBorderObjectCSS = `
    #border-object {
        border-radius: ${borderObject.style.borderRadius};
        width: ${borderObjectWidth.value}px;
        height: ${borderObjectHeight.value}px;
    }
    `;
  navigator.clipboard.writeText(currentBorderObjectCSS);
};

copyButton.addEventListener("click", copyToClipboard);
