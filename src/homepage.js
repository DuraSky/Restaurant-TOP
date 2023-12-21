import mre from "./mre.png";
import locationPic from "./location.svg"

export const homePage = function(){
    const contentDiv1 = document.createElement("div");
    contentDiv1.setAttribute("id","contentDiv");
    const contentDiv2 = document.createElement("div");
    contentDiv2.setAttribute("id","contentDiv");
    const contentDiv3 = document.createElement("div");
    contentDiv3.setAttribute("id","contentDiv");

    const returnedDiv = document.createElement("div");
    returnedDiv.setAttribute("id", "fromHome");

    const homeH1 = document.createElement("h1");
    homeH1.innerHTML = "Welcome to the MRE restaurant!";

    const stylingDiv1 = document.createElement("div");
    stylingDiv1.setAttribute("id", "about");
    stylingDiv1.classList.add("cell");
    const restaurantPara = document.createElement("p");
    restaurantPara.innerHTML = "Our restaurant offers wide variaty of MREs from militarys all over the world. Do not miss your chance to try the dryest food on the planet earth! If you feel like loosing your taste buds, come today! If you feel like we do not cook much, youd be right!"
    contentDiv1.appendChild(restaurantPara);

    const myMre = new Image();
    myMre.setAttribute("width","200px");
    myMre.src = mre;
    contentDiv1.appendChild(myMre);
       
    const stylingDiv2 = document.createElement("div");
    stylingDiv2.setAttribute("id", "openHours");
    stylingDiv2.classList.add("cell");
    const openingHours = document.createElement("p");
    openingHours.innerHTML = "Open 24/7! Feel like having MRE on Christmas? Have at it."
    contentDiv2.appendChild(openingHours);

    const stylingDiv3 = document.createElement("div");
    stylingDiv3.setAttribute("id", "location");
    stylingDiv3.classList.add("cell");
    const location = document.createElement("p");
    location.innerHTML = "Area 51, Nevada, USA";
    contentDiv3.appendChild(location);

    const myLocationPic = new Image();
    myLocationPic.setAttribute("width","50px");
    myLocationPic.src = locationPic;
    contentDiv3.appendChild(myLocationPic);

    stylingDiv1.appendChild(contentDiv1);
    stylingDiv2.appendChild(contentDiv2);
    stylingDiv3.appendChild(contentDiv3);

    returnedDiv.appendChild(homeH1);
    returnedDiv.appendChild(stylingDiv1);
    returnedDiv.appendChild(stylingDiv2);
    returnedDiv.appendChild(stylingDiv3);

    return returnedDiv;
}