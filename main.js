import {jquery} from "./lib/jquery-3.7.1.min.js"

//Check to see if the script in running
console.log("normal log: Script is running");

//debug function
createElem();

//more debugging code
let recipeDiv = document.getElementsByTagName('div');
recipeDiv.innerHTML = "This is the Div";

//run function when webpage is loaded
window.addEventListener("DOMContentLoaded", domLoaded);

//script's main function
function domLoaded(){
    //know that the script runs again
    console.log("window load: Scrit runs again");
    //let theWholeWebsite = document.body;
    //let recipeDiv = $("#recipe")
    let recipeDiv = document.getElementsByTagName('div');
    recipeDiv.innerHTML = "This is the recipie div";
    //highlight recipe with css formationg
    //add sidebar asking user if they want to add recipe to their cookbook
    //if user says yes { save to cook book }

}

/*
 * function saveToCookbook(recipie){
 *  load user's cookbook
 *  append saved recipe to the cookbook
 *  close user's cook book
 *  send message that the recipe was saved successfully
 * }
 */

//debug function
function createElem(){
    var newElem = document.createElement("p");
    newElem.innerHTML = "This is a newly made paragaph element";

    return newElem.firstChild;
}
