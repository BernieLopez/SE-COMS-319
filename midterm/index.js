/*
data.json contains all the text that gets loaded into the page. This file is supposed to
have the programming that loads that text, as well as the images, into the webpages.
*/


/*window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    let civicPic = document.getElementById("civic");
    civicPic.innerHTML += `<img src="./images/civic.png" alt="Honda Civic"></img>`;

    let civicText = document.getElementById("civic-details");
    var civicPic = document.getElementById("civic");
    var odysseyPic = document.getElementById("odyssey");
    var ridgelinePic = document.getElementById("ridgeline");
    var hr_vPic = document.getElementById("hr-v");
    var cr_vPic = document.getElementById("cr-v");
    var pilotPic = document.getElementById("pilot");

    var civixTxt = document.getElementById("civic-details");
    var odysseyTxt = document.getElementById("odyssey-details");
    var ridgelineTxt = document.getElementById("ridgelline-details");
    var hr_vTxt = document.getElementById("hr-v-details");
    var cr_vTxt = document.getElementById("cr-v-details");
    var pilotTxt = document.getElementById("pilot-details");

    for (var i = 0; i < domLoaded.cars.length; i++) {
        let img = domLoaded.cars[i].img;
        let name = domLoaded.cars[i].name;
        let vehicle_type = domLoaded.cars[i].vehicle - type;
        let msrp = domLoaded.cars[i].msrp;
        let mpg = domLoaded.cars[i].mpg
        let imgCar = document.createElement("div");
        imgCar.innerHTML = `<img src=${img} class="card-img-top" alt="..."></img>`;
        let txtCar = document.createElement("p");
        txtCar.innerHTML = `<p class="card-text"> <strong>${name}</strong>, ${vehicle_type}, ${msrp}, ${mpg}</p>`;

        if (domLoaded.cars[i].id === "civic") {
            civicPic.appendChild(imgCar);
            civixTxt.appendChild(txtCar);
        } else if (domLoaded.Cars[i].id === "odyssey") {
            odysseyPic.appendChild(imgCar);
            odysseyTxt.appendChild(txtCar);
        } else if (domLoaded.Cars[i].id === "ridgeline") {
            ridgelinePic.appendChild(imgCar);
            ridgelineTxt.appendChild(txtCar);
        } else if (domLoaded.Cars[i].id === "hr-v") {
            hr_vPic.appendChild(imgCar);
            hr_vTxt.appendChild(txtCar);
        } else if (domLoaded.Cars[i].id === "cr-v") {
            cr_vPic.appendChild(imgCar);
            cr_vTxt.appendChild(txtCar);
        } else if (domLoaded.Cars[i].id === "pilot") {
            pilotPic.appendChild(imgCar);
            pilotTxt.appendChild(txtCar);
        }
    }
}*/

fetch("data.json")
    .then(respnse => respnse.json)
    .then(myCars => loadCars(myCars));

function loadCars(myCars) {
    var civicPic = document.getElementById("civic");
    var odysseyPic = document.getElementById("odyssey");
    var ridgelinePic = document.getElementById("ridgeline");
    var hr_vPic = document.getElementById("hr-v");
    var cr_vPic = document.getElementById("cr-v");
    var pilotPic = document.getElementById("pilot");

    var civix_details = document.getElementById("civic-details");
    var odyssey_details = document.getElementById("odyssey-details");
    var ridgeline_details = document.getElementById("ridgelline-details");
    var hr_v_details = document.getElementById("hr-v-details");
    var cr_v_details = document.getElementById("cr-v-details");
    var pilot_details = document.getElementById("pilot-details");

    for (var i = 0; i < myCars.cars.length; i++) {
        let img = myCars.cars[i].img;
        let name = myCars.cars[i].name;
        let vehicle_type = myCars.cars[i].vehicle_type;
        let msrp = myCars.cars[i].msrp;
        let mpg = myCars.cars[i].mpg
        let imgCar = document.createElement("div");
        imgCar.innerHTML = `<img src=${img} class="card-img-top" alt="..."></img>`;
        let txtCar = document.createElement("p");
        txtCar.innerHTML = `<p class="card-text"> <strong>${name}</strong>, ${vehicle_type}, ${msrp}, ${mpg}</p>`;

        if (myCars.cars[i].id === "civic") {
            civicPic.appendChild(imgCar);
            civix_details.appendChild(txtCar);
        } else if (myCars.Cars[i].id === "odyssey") {
            odysseyPic.appendChild(imgCar);
            odyssey_details.appendChild(txtCar);
        } else if (myCars.Cars[i].id === "ridgeline") {
            ridgelinePic.appendChild(imgCar);
            ridgeline_details.appendChild(txtCar);
        } else if (myCars.Cars[i].id === "hr-v") {
            hr_vPic.appendChild(imgCar);
            hr_v_details.appendChild(txtCar);
        } else if (myCars.Cars[i].id === "cr-v") {
            cr_vPic.appendChild(imgCar);
            cr_v_details.appendChild(txtCar);
        } else if (myCars.Cars[i].id === "pilot") {
            pilotPic.appendChild(imgCar);
            pilot_details.appendChild(txtCar);
        }
    }
}