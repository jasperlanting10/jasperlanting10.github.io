
function makeMain(){
    alert('hoi');
    let main = document.createElement("main");
    let h1 = document.createElement("h1");
    h1.innerText("Hallo & welkom op mijn site!!");

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder","Enter your name brotha");


    let button = document.createElement("input");
    button.setAttribute("value", "Add");
    button.setAttribute("type", "button");

    button.addEventListener("click", function(){
        h1.innerText(input.value + " is gay!");
    });

}

