//idk know at this point
console.log("normal log: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

document.createElement("p");
let recipeDiv = document.getElementsByTagName('div');
recipeDiv.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(){
    console.log("window load: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    //let theWholeWebsite = document.body;
    //let recipeDiv = $("#recipe")
    let recipeDiv = document.getElementsByTagName('div');
    recipeDiv.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
}

