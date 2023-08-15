import { openPopup, closePopup, showPicture, hidePicture } from "./utils";

const projectTemplate = document.querySelector("#projects").content;
const modal = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__title");
const popupText = document.querySelector(".popup__text");
const linkToWeb = document.querySelector(".link_popup");
const popupIcon1 = document.querySelector(".popup__icon_1");
const popupIcon2 = document.querySelector(".popup__icon_2");
const popupIcon3 = document.querySelector(".popup__icon_3");


function createList(projectList, arrayOfData, classname) {
  arrayOfData.forEach((element) => {
    const projectEl = createProject(element, classname);
    projectList.append(projectEl);
  });
}

function createProject({ name, link, imagesrc, text, linkhref, icon_1, icon_2, icon_3 }, classname) {
  console.log(name);
  const projectElement = projectTemplate
    .querySelector(".project")
    .cloneNode(true);
  const templateProjectTitle = projectElement.querySelector(".project__title");
  const templateProjectImage = document.querySelector(`.${classname}`);
  templateProjectTitle.textContent = name;
  templateProjectTitle.addEventListener("mouseover", function () {
    templateProjectImage.src = link;
    templateProjectImage.classList.add("element__image_active");
  });

  templateProjectTitle.addEventListener("click", function () {
    openPopup(modal);
    popupTitle.textContent = name;
    popupImage.src = imagesrc;
    popupText.textContent = text;
    linkToWeb.href = linkhref;
    popupIcon1.style.backgroundImage = "url('" + icon_1 + "')";
    popupIcon2.style.backgroundImage = "url('" + icon_2 + "')";
    popupIcon3.style.backgroundImage = "url('" + icon_3 + "')";
  });
  return projectElement;
}

export { createList, createProject, modal };
