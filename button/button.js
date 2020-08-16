let counter=1;
function increment()
{
    
    let counterele =document.querySelector("#btn");
    counter=counter + 1;
    counterele.innerHTML=counter;
}
function decrement()
{
    
    let counterele=document.querySelector("#btn");
    counter=counter - 1;
    counterele.innerHTML=counter;
}