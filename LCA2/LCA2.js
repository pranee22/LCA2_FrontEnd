window.alert("Welcome to the LCA2 JavaScript file!");

let yourname;

document.getElementById("continueButton").onclick = function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    yourname = document.getElementById("yourname").value;
    console.log(yourname);
    localStorage.setItem("yourname", yourname);
}

document.getElementById("continueButton").addEventListener("mouseover", function() {
    document.getElementById("continueButton").style.backgroundColor = "navy";
    document.getElementById("continueButton").style.color = "white";
    document.getElementById("continueButton").style.fontSize = "20px";
});

document.getElementById("continueButton").addEventListener("keypress", function() {
    document.getElementById("continueButton").style.backgroundColor = "lightblue";
    document.getElementById("continueButton").style.color = "white";
    document.getElementById("continueButton").style.fontSize = "20px";
});

continueButton.classList.add("NextPage");


submitButton = document.getElementsByTagName("Button");
console.log(submitButton);

let parent = document.getElementById("hero-banner");
let newElement = document.createElement("p");
newElement.textContent = "Hello " + yourname + " !";
newElement.classList.add("newElement");
newElement.style,color = "blue";
newElement.style.fontSize = "20px";
parent.appendChild(newElement);

/*
document.getElementById("printName").textContent = "Hello " + yourname + " !";
    if (yourname=="Pranee" ) {
        document.getElementById("printName").textContent = "Hello Pranee! Welcome Back!";
    } */
