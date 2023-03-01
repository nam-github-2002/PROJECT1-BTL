//SLIDE
const mainSlider = document.querySelector(".main-slider");
const slideItems = [...document.querySelectorAll(".slide-item")];
const btnTurnLeftSilde = document.querySelector(".slide-turn-left");
const btnTurnRightSilde = document.querySelector(".slide-turn-right");
const chooseSlideBlock = document.querySelector(".chooseSlide");
const dotSlides = [...chooseSlideBlock.querySelectorAll("input")];

let xAxis = 0;
let slideSpeed = 3000;
const changeSlideInterval = setInterval(changeSlide, slideSpeed);

function changeSlide() {
    // AUTO
    xAxis += 100;
    if (xAxis > 400) xAxis = 0;
    mainSlider.style.left = `-${xAxis}%`;

    dotSlides.map((dotSlide) =>
        dotSlide.classList.remove("active-input-radio")
    );
    let currentDotSlide = dotSlides.find((dotSlide) => {
        if (dotSlide.value == xAxis) return dotSlide;
    });
    currentDotSlide.classList.add("active-input-radio");

    // TURN LEFT
    btnTurnLeftSilde.onclick = () => {
        clearInterval(changeSlideInterval);
        xAxis -= 100;
        if (xAxis < 0) xAxis = 400;

        dotSlides.map((dotSlide) =>
            dotSlide.classList.remove("active-input-radio")
        );
        currentDotSlide = dotSlides.find((dotSlide) => {
            if (dotSlide.value == xAxis) return dotSlide;
        });
        currentDotSlide.classList.add("active-input-radio");

        mainSlider.style.left = `-${xAxis}%`;
    };

    // TURN RIGHT
    btnTurnRightSilde.onclick = () => {
        clearInterval(changeSlideInterval);
        xAxis += 100;
        if (xAxis > 400) xAxis = 0;

        dotSlides.map((dotSlide) =>
            dotSlide.classList.remove("active-input-radio")
        );
        currentDotSlide = dotSlides.find((dotSlide) => {
            if (dotSlide.value == xAxis) return dotSlide;
        });
        currentDotSlide.classList.add("active-input-radio");

        mainSlider.style.left = `-${xAxis}%`;
    };

    // CHOOSE
    for (let i = 0; i < dotSlides.length; i++) {
        dotSlides[i].addEventListener("click", function () {
            clearInterval(changeSlideInterval);

            dotSlides.map((dotSlide) =>
                dotSlide.classList.remove("active-input-radio")
            );
            this.classList.add("active-input-radio");

            xAxis = this.value;
            mainSlider.style.left = `-${xAxis}%`;
        });
    }
}

//  FILTER PRODUCT

let btnContainer = document.querySelector(".main_product-filter-left");
let btns = [...btnContainer.getElementsByTagName("button")];

let currentPage = document.querySelector(".current_numpage");
let totalPage = document.querySelector(".total_numpage");
let productPageSwitch = document.querySelector(".numpage_switchBtn");
let switchLeft = productPageSwitch.querySelector(".ti-angle-left");
let switchRight = productPageSwitch.querySelector(".ti-angle-right");

//---------------------------------------------------------------

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = btnContainer.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active");
    });
}
//--------------------------------------------------
let leftNum = parseInt(currentPage.innerText);
let rightNum = parseInt(totalPage.innerText);
switchLeft.onclick = function () {
    leftNum -= 1;
    leftNum < 1 ? (leftNum = 1) : (currentPage.innerText = leftNum);

    if (leftNum > 1) {
        switchLeft.classList.add("canUse");
    } else switchLeft.classList.remove("canUse");

    if (leftNum < rightNum) {
        switchRight.classList.add("canUse");
    } else switchRight.classList.remove("canUse");
};
switchRight.onclick = function () {
    leftNum += 1;
    leftNum > rightNum
        ? (leftNum = rightNum)
        : (currentPage.innerText = leftNum);

    if (leftNum > 1) {
        switchLeft.classList.add("canUse");
    } else switchLeft.classList.remove("canUse");

    if (leftNum < rightNum) {
        switchRight.classList.add("canUse");
    } else switchRight.classList.remove("canUse");
};
