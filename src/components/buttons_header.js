const buttonsTemplate = document.querySelector("#buttons_header").content;

function scrollToSection(buttonList, buttonDataList) {
  buttonDataList.forEach((element) => {
    const buttonEl = createHeaderButton(element);
    buttonList.append(buttonEl);
  });
}

function createHeaderButton({ label, targetName }) {
  console.log(label, targetName);
  const buttonElement = buttonsTemplate
    .querySelector(".button_header")
    .cloneNode(true);
  const templateButtonLabel = buttonElement.querySelector(".button__label");
  const targetLabel = document.querySelector(`#${targetName}`);
  templateButtonLabel.textContent = label;
  templateButtonLabel.addEventListener("click", function () {
    targetLabel.scrollIntoView({ behavior: "smooth" });
  });
  return buttonElement;
}

export { scrollToSection };
