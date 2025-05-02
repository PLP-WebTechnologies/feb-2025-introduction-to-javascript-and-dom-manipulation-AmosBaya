const header = document.getElementById("main-header");
header.innerHTML = "<h1>JAVASCRIPT NEW HEADER!</h1>";

const styler = document.querySelector("#about-section");
styler.style.backgroundColor = "red";


const viewServices = document.querySelector(".services-list");

function showService() {
    if(viewServices.style.display === "none"){
        viewServices.style.display = "block"
    }else{
        viewServices.style.display = "none"
    }
}

