var likecounter=1;
function likehere(){
    likecounter++;
    document.getElementById("like").innerHTML="Like " + likecounter;
}
function commentHere(){
    let usercomment = document.querySelector("#inputId1").value;

    const newelement=document.createElement("div");
    newelement.style.display="flex";
    newelement.style.justifyContent="space-between";
    newelement.style.marginBottom="8px";
    const commdiv=document.createElement("div");
    const deldiv=document.createElement("button");

    newelement.appendChild(commdiv);

    commdiv.textContent = usercomment;

    newelement.appendChild(deldiv);
    deldiv.textContent="delete";

    let commentBox=document.querySelector("#commentBox");

    commentBox.insertBefore(newelement, commentBox.firstChild);

    document.querySelector("#inputId1").value ="";
}