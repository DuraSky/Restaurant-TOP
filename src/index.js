// create three clickable divs, home, menu, contacts
// make home div to be default and generate content
// on click of another div, wipe the content and append
// new content

const content = document.querySelector("#content");

const homeDiv = document.createElement("div");
homeDiv.classList.add("home");
homeDiv.innerHTML = "Home";

const menuDiv = document.createElement("div");
menuDiv.classList.add("menu");
menuDiv.innerHTML = "Menu";


const contactsDiv = document.createElement("div");
contactsDiv.classList.add("contacts");
contactsDiv.innerHTML = "Contacts";


content.appendChild(homeDiv);
content.appendChild(menuDiv);
content.appendChild(contactsDiv);


homeDiv.addEventListener("click", ()=>{
    const testDivHome = document.createElement("div");
    testDivHome.classList.add("removable");
    testDivHome.innerHTML = "Im Here";

    if (content.hasChildNodes()) {
        content.removeChild(content.children[3]);
      }else{content.appendChild(testDivHome);}

    
});

menuDiv.addEventListener("click", ()=>{
    const testDivContact = document.createElement("div");
    testDivContact.innerHTML = "Im Here now too";
    testDivContact.classList.add("removable");

    if (content.hasChildNodes()) {
        content.removeChild(content.children[3]);
      }
    content.appendChild(testDivContact);
});

