export const menuFunc = function(){
    const returnedDiv = document.createElement("div");
    returnedDiv.setAttribute("id", "fromMenu");

    const menuH1 = document.createElement("h1");
    menuH1.innerHTML = "This is our delicious menu!";

    returnedDiv.appendChild(menuH1);


 return returnedDiv;
}
