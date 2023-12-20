export const contactsFunc = function(){
    const returnedDiv = document.createElement("div");
    returnedDiv.setAttribute("id", "fromContacts");

    const contactsH1 = document.createElement("h1");
    contactsH1.innerHTML = "This is our contacts!";

    returnedDiv.appendChild(contactsH1);

    return returnedDiv;
}
