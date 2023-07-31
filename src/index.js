import "./pages/index.css"; // добавьте импорт главного файла стилей

import { projectsListData } from "./components/data";
import { createList } from "./components/projects";

const projects = document.querySelector(".element__list");

createList(projects, projectsListData);
