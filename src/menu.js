import russian from "./russian.png";
import american from "./american.png";
import halal from "./halal.png";

export const menuFunc = function(){
    const contentDiv1 = document.createElement("div");
    contentDiv1.setAttribute("id","contentDiv");
    const contentDiv2 = document.createElement("div");
    contentDiv2.setAttribute("id","contentDiv");
    const contentDiv3 = document.createElement("div");
    contentDiv3.setAttribute("id","contentDiv");

    const returnedDiv = document.createElement("div");
    returnedDiv.setAttribute("id", "fromMenu");

    const menuH1 = document.createElement("h1");
    menuH1.innerHTML = "This is our delicious menu!";

    const stylingDiv1 = document.createElement("div");
    stylingDiv1.setAttribute("id", "item1");
    stylingDiv1.classList.add("cell");
    const russianPara = document.createElement("p");
    russianPara.innerHTML = "Russian MRE";
    contentDiv1.appendChild(russianPara);

    const myRussianMRE = new Image();
    myRussianMRE.setAttribute("width","200px");
    myRussianMRE.src = russian;
    contentDiv1.appendChild(myRussianMRE);
       
    const stylingDiv2 = document.createElement("div");
    stylingDiv2.setAttribute("id", "item2");
    stylingDiv2.classList.add("cell");
    const americanPara = document.createElement("p");
    americanPara.innerHTML = "American MRE";
    contentDiv2.appendChild(americanPara);

    const myAmericanMRE = new Image();
    myAmericanMRE.setAttribute("width","200px");
    myAmericanMRE.src = american;
    contentDiv2.appendChild(myAmericanMRE);

    const stylingDiv3 = document.createElement("div");
    stylingDiv3.setAttribute("id", "item3");
    stylingDiv3.classList.add("cell");
    const halalPara = document.createElement("p");
    halalPara.innerHTML = "Halal MRE";
    contentDiv3.appendChild(halalPara);

    const myHalalMRE = new Image();
    myHalalMRE.setAttribute("width","200px");
    myHalalMRE.src = halal;
    contentDiv3.appendChild(myHalalMRE);

    stylingDiv1.appendChild(contentDiv1);
    stylingDiv2.appendChild(contentDiv2);
    stylingDiv3.appendChild(contentDiv3);

    returnedDiv.appendChild(menuH1);
    returnedDiv.appendChild(stylingDiv1);
    returnedDiv.appendChild(stylingDiv2);
    returnedDiv.appendChild(stylingDiv3);


 return returnedDiv;
}
