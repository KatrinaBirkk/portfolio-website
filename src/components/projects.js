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
  const templateProjectImage = projectElement.querySelector(".project__image");
  templateProjectTitle.textContent = name;
  templateProjectImage.src = link;
  templateProjectTitle.addEventListener("mouseover", function () {
    templateProjectImage.classList.add("project__image_active");
  });
  templateProjectTitle.addEventListener("mouseout", function () {
    templateProjectImage.classList.remove("project__image_active");
  });
  templateProjectTitle.addEventListener("click", function () {
    openPopup(modal);
  });
  return projectElement;
}

export { createList, createProject };
