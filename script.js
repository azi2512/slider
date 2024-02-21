let images = [{
    url: "./css/image/image1.png",
    city: "Rostov-on-Don LCD admiral",
    repairTime: "3.5 months",
    apartmentArea: "81 m2",
},
{
    url: "./css/image/image2.png",
    city: "Sochi Thieves",
    repairTime: "4 months",
    apartmentArea: "105 m2",
},
{
    url: "./css/image/image3.png",
    city: "Rostov-on-Don Patriotic",
    repairTime: "3 months",
    apartmentArea: "93 m2",
}
];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".right");
    let sliderArrows = document.querySelector(".arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let nav = document.querySelector(".nav");
    let textContainer = document.querySelector(".apartments");

    initImages();
    initArrows();
    initDots();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
            let textDiv = `
                <div class="apartments__description n${index} ${index === 0 ? "active" : ""}"><h2>city</h2><p>${image.city}</p></div>
                <div class="apartments__description n${index} ${index === 0 ? "active" : ""}"><h2>apartment Area</h2><p>${image.apartmentArea}</p></div> 
                <div class="apartments__description n${index} ${index === 0 ? "active" : ""}"><h2>repair Time</h2><p>${image.repairTime}</p></div>                
                <div class="apartments__description n${index} ${index === 0 ? "active" : ""}"><h2>REPAIR COST:</h2><p>Upon request</p></div>`;
            textContainer.innerHTML += textDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("arrow__left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`
            sliderDots.innerHTML += dot;
            let navItem = `<li class="n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${image.city}</li>`;
            nav.innerHTML += navItem;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        });
        nav.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        textContainer.querySelectorAll(".active").forEach((item) => item.classList.remove("active"));
        textContainer.querySelectorAll(".n" + num).forEach((item) => item.classList.add("active"));
        nav.querySelector(".active").classList.remove("active");
        nav.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);