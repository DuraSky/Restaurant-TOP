export const homePage = function(){
    const content = document.querySelector("#content");
    const nav = document.createElement("nav");
    const visibleContent = document.createElement("div");
    visibleContent.classList.add("visibleContent");
    const homePagePara = document.createElement("p");
    homePagePara.innerHTML = "Welcome to our Restaurant"

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    homeDiv.innerHTML = "Home";

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    menuDiv.innerHTML = "Menu";


    const contactsDiv = document.createElement("div");
    contactsDiv.classList.add("contacts");
    contactsDiv.innerHTML = "Contacts";

    content.appendChild(nav);
    content.appendChild(visibleContent);
    visibleContent.appendChild(homePagePara);
    nav.appendChild(homeDiv);
    nav.appendChild(menuDiv);
    nav.appendChild(contactsDiv);

    return {homeDiv,menuDiv, contactsDiv, visibleContent, homePagePara}
}