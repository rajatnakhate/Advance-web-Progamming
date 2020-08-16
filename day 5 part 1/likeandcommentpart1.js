var likecounter=1;
var counter=1;
function likehere(){
    likecounter++;
    document.getElementById("like").innerHTML="like "+likecounter;
}
function commentHere() {
    // newelement initialization
    let newElement = document.createElement("div");
    newElement.textContent = "comment " + counter;
  
    // styling
    newElement.style.background = "tomato";
    newElement.style.margin = "4px";
  
    // appending to the parent box
    let commentBox = document.querySelector("#commentBox");
    commentBox.appendChild(newElement);
  
    counter++;
  }