//idk know at this point
console.log("normal log: Script is running");

createElem();

let recipeDiv = document.getElementsByTagName('div');
recipeDiv.innerHTML = "This is the Div";

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(){
    console.log("window load: Scrit runs again");
    //let theWholeWebsite = document.body;
    //let recipeDiv = $("#recipe")
    let recipeDiv = document.getElementsByTagName('div');
    recipeDiv.innerHTML = "This is the recipie div";
}

function createElem(){
    var newElem = document.createElement("p");
    newElem.innerHTML = "This is a newly made paragaph element";

    return newElem.firstChild;
}
