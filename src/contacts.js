import global from "./global.png";
import silver from "./silver.png";
import mg2 from "./mg2.png";

export const contactsFunc = function(){
    const contentDiv1 = document.createElement("div");
    contentDiv1.setAttribute("id","contentDiv");
    const contentDiv2 = document.createElement("div");
    contentDiv2.setAttribute("id","contentDiv");
    const contentDiv3 = document.createElement("div");
    contentDiv3.setAttribute("id","contentDiv");

    const returnedDiv = document.createElement("div");
    returnedDiv.setAttribute("id", "fromContacts");

    const contactsH1 = document.createElement("h1");
    contactsH1.innerHTML = "This is our contacts!";

    const stylingDiv1 = document.createElement("div");
    stylingDiv1.setAttribute("id", "firstPerson");
    stylingDiv1.classList.add("cell");
    const firstPersonPara = document.createElement("p");
    firstPersonPara.innerHTML = "Cpt. Lukas Broskovic"
    contentDiv1.appendChild(firstPersonPara);

    const myGlobal = new Image();
    myGlobal.setAttribute("width","200px");
    myGlobal.src = global;
    contentDiv1.appendChild(myGlobal);
 
    const stylingDiv2 = document.createElement("div");
    stylingDiv2.setAttribute("id", "secondPerson");
    stylingDiv2.classList.add("cell");
    const secondPersonPara = document.createElement("p");
    secondPersonPara.innerHTML = "Sgt. Jan Kohutek"
    contentDiv2.appendChild(secondPersonPara);

    const myMg2 = new Image();
    myMg2.setAttribute("width","200px");
    myMg2.src = mg2;
    contentDiv2.appendChild(myMg2);

    const stylingDiv3 = document.createElement("div");
    stylingDiv3.setAttribute("id", "thirdPerson");
    stylingDiv3.classList.add("cell");
    const thirdPersonPara = document.createElement("p");
    thirdPersonPara.innerHTML = "SSC. Petr Waloszek";
    contentDiv3.appendChild(thirdPersonPara);

    const mySilver = new Image();
    mySilver.setAttribute("width","200px");
    mySilver.src = silver;
    contentDiv3.appendChild(mySilver);

    stylingDiv1.appendChild(contentDiv1);
    stylingDiv2.appendChild(contentDiv2);
    stylingDiv3.appendChild(contentDiv3);


    returnedDiv.appendChild(contactsH1);
    returnedDiv.appendChild(stylingDiv1);
    returnedDiv.appendChild(stylingDiv2);
    returnedDiv.appendChild(stylingDiv3);

    return returnedDiv;
}
