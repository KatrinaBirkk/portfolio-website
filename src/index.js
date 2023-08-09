import "./pages/index.css"; // добавьте импорт главного файла стилей

import {
  projectsListData,
  designListData,
  buttonDataList,
} from "./components/data";
import { createList } from "./components/projects";
import { closePopup } from "./components/utils";
import { modal } from "./components/projects";
import { scrollToSection } from "./components/buttons_header";

const projects = document.querySelector(".element__list_fe");
const designs = document.querySelector(".element__list_de");
const buttonList = document.querySelector(".nav_buttons");
const closeButton = document.querySelector(".button_close");



closeButton.addEventListener("click", function () {
  closePopup(modal);
});

const classname = "element__image";

createList(projects, projectsListData, `${classname}_fe`);
createList(designs, designListData, `${classname}_de`);

scrollToSection(buttonList, buttonDataList);
