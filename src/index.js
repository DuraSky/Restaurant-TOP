import {homePage} from "./homepage.js";
import {menuFunc} from "./menu.js";
import { contactsFunc } from './contacts.js';

const {homeDiv, menuDiv, contactsDiv, visibleContent, homePagePara } = homePage();
const {menuPara} = menuFunc();
const {contactsPara} = contactsFunc();

homeDiv.addEventListener("click", ()=>{
    visibleContent.innerHTML ="";
    visibleContent.appendChild(homePagePara);
});

menuDiv.addEventListener("click", ()=>{
    visibleContent.innerHTML ="";
    visibleContent.appendChild(menuPara);
});

contactsDiv.addEventListener("click", ()=>{
  visibleContent.innerHTML ="";
  visibleContent.appendChild(contactsPara);
});
