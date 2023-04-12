/*
data.json contains all the text that gets loaded into the page. This file is supposed to
have the programming that loads that text, as well as the images, into the webpages.
*/

fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myCars) {
        loadCars(myCars);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    })

function loadCars(myCars) {
    let civicPic = document.getElementById("civic");
    let odysseyPic = document.getElementById("odyssey");
    let ridgelinePic = document.getElementById("ridgeline");
    let hr_vPic = document.getElementById("hr-v");
    let cr_vPic = document.getElementById("cr-v");
    let pilotPic = document.getElementById("pilot");

    let civix_details = document.getElementById("civic_details");
    let odyssey_details = document.getElementById("odyssey_details");
    let ridgeline_details = document.getElementById("ridgeline_details");
    let hr_v_details = document.getElementById("hr_v_details");
    let cr_v_details = document.getElementById("cr_v_details");
    let pilot_details = document.getElementById("pilot_details");

    for (let car of myCars.cars){
        let img = car.img;
        let name = car.name;
        let vehicle_type = car.vehicle_type;
        let msrp = car.msrp;
        let mpg = car.mpg
        let imgCar = document.createElement("div");
        imgCar.innerHTML = `<img src=${img} class="card-img-top" alt="..."></img>`;
        let txtCar = document.createElement("p");
        txtCar.innerHTML = `<p class="card-text"> <strong>${name}</strong> <br> ${vehicle_type} <br> ${msrp} <br> ${mpg}</p>`;

        if (car.id == "civic") {
            civicPic.appendChild(imgCar);
            civix_details.appendChild(txtCar);
        }
        if (car.id == "odyssey") {
            odysseyPic.appendChild(imgCar);
            odyssey_details.appendChild(txtCar);
        } 
        if (car.id == "ridgeline") {
            ridgelinePic.appendChild(imgCar);
            ridgeline_details.appendChild(txtCar);
        } 
        if (car.id == "hr-v") {
            hr_vPic.appendChild(imgCar);
            hr_v_details.appendChild(txtCar);
        }
        if (car.id == "cr-v") {
            cr_vPic.appendChild(imgCar);
            cr_v_details.appendChild(txtCar);
        } 
        if (car.id == "pilot") {
            pilotPic.appendChild(imgCar);
            pilot_details.appendChild(txtCar);
        }
    }
}