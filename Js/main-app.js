"use strict"

function toggleDropnow() {
    let togglenav = document.getElementById("togglenav")

    if(togglenav.className === "nav-link") {
        togglenav.className += " responsive";
    }

    else {
        togglenav.className = "nav-link"
    }
}

let form =  document.getElementById("form")

form.addEventListener("submit", function(event){

    event.preventDefault()

})