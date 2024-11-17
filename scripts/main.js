/* Hay diversos métodos para seleccionar ya sea elementos, clases o en este caso IDs.
Se uso IDs ya que el elemento <img> genera problemas cuando es mas de uno.

Para diferenciar la primer imagen de la segunda y poder modificar cada una por separado,
se les asignó un ID.
 */
const myImage1 = document.getElementById("01")
const myImage2 = document.getElementById("02")

myImage1.onclick = () => {
    const mySrc = myImage1.getAttribute("src");

    if (mySrc === "images/marx-engels.jpg") {
        myImage1.setAttribute("src", "images/isaac-newton.jpg");
    } else {
        myImage1.setAttribute("src", "images/marx-engels.jpg");
    }
};

myImage2.onclick = () => {
    const mySrc = myImage2.getAttribute("src");

    if (mySrc === "images/platon.jpg") {
        myImage2.setAttribute("src", "images/socrates.png");
    } else {
        myImage2.setAttribute("src", "images/platon.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter you name");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Buenas camarada, ${myName}!`;
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Buenas camarada, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}