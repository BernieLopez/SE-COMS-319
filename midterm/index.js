/*
data.json contains all the text that gets loaded into the page. This file is supposed to
have the programming that loads that text, as well as the images, into the webpages.
*/
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    let civicPic = document.getElementById("civic");
    civicPic.innerHTML += `<img src="./images/civic.png" alt="Honda Civic"></img>`;

    let civicText = document.getElementById("civic-details");
    
}