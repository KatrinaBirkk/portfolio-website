import { openPopup, closePopup, showPicture, hidePicture } from "./utils";

const projectPicture = document.querySelector(".element__image");
const projectTemplate = document.querySelector("#projects").content;
const modal = document.querySelector(".popup");

function createList(projectList, arrayOfData) {
  console.log(arrayOfData);
  arrayOfData.forEach((element) => {
    const projectEl = createProject(element);
    projectList.prepend(projectEl);
  });
}

function createProject({ name, link }) {
  console.log(name);
  const projectElement = projectTemplate
    .querySelector(".project")
    .cloneNode(true);
  const templateProjectTitle = projectElement.querySelector(".project__title");
  const templateProjectImage = document.querySelector(".element__image");
  templateProjectTitle.textContent = name;
  templateProjectTitle.addEventListener("mouseover", function () {
    templateProjectImage.src = link;
    templateProjectImage.classList.add("element__image_active");
  });
  templateProjectTitle.addEventListener("mouseout", function () {
    templateProjectImage.classList.remove("element__image_active");
  });
  templateProjectTitle.addEventListener("click", function () {
    openPopup(modal);
  });
  return projectElement;
}

export { createList, createProject };
