import "./pages/index.css"; // добавьте импорт главного файла стилей

import {
  projectsListData,
  designListData,
  buttonDataList,
} from "./components/data";
import { createList } from "./components/projects";
import { closePopup } from "./components/utils";
import { modal } from "./components/projects";
import { enableValidation } from "./components/validate";
import { scrollToSection } from "./components/buttons_header";

const projects = document.querySelector(".element__list_fe");
const designs = document.querySelector(".element__list_de");
const buttonList = document.querySelector(".nav_buttons");
const closeButton = document.querySelector(".button_close");
const formContact = document.querySelector(".form");

const API_KEY =
  "4439974A35E739F09D0FECBB0BDF0C8DE3B828212C9B14A4AC8ED1722E0F2E766CBF60F78CDB6F417CEE40DA5B7E5BA0";

function sendFormData() {
  fetch("https://api.elasticemail.com/v4/emails", {
    method: "POST",
    headers: {
      "X-ElasticEmail-ApiKey": `apikey${API_KEY}`,
      // Authorization: API_KEY,
    },
    body: JSON.stringify({
      Recipients: [
        {
          Email: "katrina.birk@yahoo.com",
          Fields: {
            city: "New York",
            age: "34",
          },
        },
      ],
    }),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        // throw new Error("Network response was not ok");
        return Promise.reject(`Ошибка: ${response.status}`);
      }
      // Handle success, e.g., show a success message to the user
      alert("Email sent successfully!");
    })
    .catch((error) => {
      // Handle error, e.g., show an error message to the user
      console.error("Error sending email:", error);
    });
}

closeButton.addEventListener("click", function () {
  closePopup(modal);
});

function handleContactFormSubmit(evt) {
  console.log("sent");
  evt.preventDefault();
  sendFormData();
  evt.target.reset();
  console.log(`apikey${API_KEY}`);
}

formContact.addEventListener("submit", handleContactFormSubmit);

const settings = {
  formSelector: ".form",
  inputSelector: ".form__field",
  submitButtonSelector: ".popup__button_type_submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__field_type_error",
  errorClass: "form__field-error_active",
};

enableValidation(settings);

const classname = "element__image";

createList(projects, projectsListData, `${classname}_fe`);
createList(designs, designListData, `${classname}_de`);

scrollToSection(buttonList, buttonDataList);
