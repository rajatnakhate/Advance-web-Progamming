function handleMouseOver() {
    var id2Element = document.querySelector("#id2");
    id2Element.style.background-Image = "pic1.jpg";
    id2Element.style.color = "yellow";
  
    id2Element.innerHTML = "Hello Class Selector!!";
  }
  
  function handleMouseOut() {
    let id2Element = document.querySelector("#id2");
    id2Element.style.background = "black";
    id2Element.style.color = "white";
  
    id2Element.innerHTML = "Hello World";
  }