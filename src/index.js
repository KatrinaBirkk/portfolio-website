import "./pages/index.css"; // добавьте импорт главного файла стилей

import { projectsListData } from "./components/data";
import { createList } from "./components/projects";
import { closePopup } from "./components/utils";
import { modal } from "./components/projects";

const projects = document.querySelector(".element__list");
const closeButton = document.querySelector(".button_close");

closeButton.addEventListener("click", function () {
  closePopup(modal);
});
createList(projects, projectsListData);
