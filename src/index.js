import {homePage} from "./homepage.js";
import {menuFunc} from "./menu.js";
import {contactsFunc} from './contacts.js';
import "./style.css"
import camo from "./camo.jpg";

const navCreation = (function(){
  const content = document.querySelector("#content");
  const nav = document.createElement("nav");
  const changeContent = document.createElement("div");
  changeContent.setAttribute("id","changeContent");

  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "navItem");
  homeDiv.innerHTML = "| Home |";

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "navItem");
  menuDiv.innerHTML = "| Menu |";

  const contactsDiv = document.createElement("div");
  contactsDiv.setAttribute("id", "navItem");
  contactsDiv.innerHTML = "| Contacts |";

  content.appendChild(nav);
  content.appendChild(changeContent);
  changeContent.appendChild(homePage());
  nav.appendChild(homeDiv);
  nav.appendChild(menuDiv);
  nav.appendChild(contactsDiv);

return{homeDiv,menuDiv,contactsDiv, changeContent}
})();

navCreation.homeDiv.addEventListener("click", ()=>{
  navCreation.changeContent.innerHTML ="";
  navCreation.changeContent.appendChild(homePage());
});

navCreation.menuDiv.addEventListener("click", ()=>{
  navCreation.changeContent.innerHTML ="";
  navCreation.changeContent.appendChild(menuFunc());
});

navCreation.contactsDiv.addEventListener("click", ()=>{
  navCreation.changeContent.innerHTML ="";
  navCreation.changeContent.appendChild(contactsFunc());
});
