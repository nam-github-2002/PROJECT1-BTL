//SLIDE
let mainSlider = document.querySelector(".main-slider");
let slideItems = [...document.querySelectorAll(".slide-item")];
let btnTurnLeftSilde = document.querySelector(".slide-turn-left");
let btnTurnRightSilde = document.querySelector(".slide-turn-right");
let chooseSlideBlock = document.querySelector(".chooseSlide");
let dotSlides = [...chooseSlideBlock.querySelectorAll("input")];
// PRODUCT
let mainProductList = document.querySelector(".main_product-list");
let star = document.querySelector(".main_product-item_rate  i");
let btnContainer = document.querySelector(".main_product-filter-left");
let btns = [...btnContainer.getElementsByTagName("button")];
let currentPage = [...document.querySelectorAll(".current_numpage")];
let totalPage = [...document.querySelectorAll(".total_numpage")];
let productPageSwitch = document.querySelectorAll(".numpage_switchBtn");
let switchLeft = [...document.querySelectorAll(".numpage_switchBtn .ti-angle-left")];
let switchRight = [...document.querySelectorAll(".numpage_switchBtn .ti-angle-right")];

let start = 0;
let end = 10;
let xAxis = 0;
let slideSpeed = 3000;
// CHUYỂN SLIDE
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
    setInterval(changeSlide,slideSpeed);
}


let products = [
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/90913_86825.jpg",
        discount: 60,
        description: "Bàn ăn sang trọng",
        note: "Mua 2 & giảm đ2.000",
        firstPrice: 18000,
        secondPrice: 42500,
        star: 3.5,
        numSold: 67,
        status: "Còn hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/ban-an-athos.jpg",
        discount: 40,
        description: "Ghế sofa",
        note: "Mua 3 & giảm giảm 20%",
        firstPrice: 99000,
        secondPrice: 125500,
        star: 4.6,
        numSold: 55,
        status: "Còn hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/ban-an-icaro1.jpg",
        discount: 20,
        description: "Bình thủy tinh",
        note: "Mua 3 & tặng 1",
        firstPrice: 8500,
        secondPrice: 21500,
        star: 4.8,
        numSold: 102,
        status: "Còn hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/ban-an-jazz-81989-01-500x3332-1.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/BAN-AN-KENT-CERAMIC-P321.jpg",
        discount: 5,
        description: "Ghế làm việc",
        note: "Mua 3 & giảm đ1.000",
        firstPrice: 110000,
        secondPrice: 320544,
        star: 2.5,
        numSold: 669,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/BAN-AN-MO-RONG-SPIGA-P87W.jpg",
        discount: 50,
        description: "Bàn làm việc",
        note: "",
        firstPrice: 1560000,
        secondPrice: 2150000,
        star: 4.2,
        numSold: 6969,
        status: "Còn hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/ban-an-roma.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1250000,
        secondPrice: 1890000,
        star: 3.8,
        numSold: 51,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/miami_table13.jpg",
        discount: 200,
        description: "Đèn phòng ngủ đẹp mê ly",
        note: "",
        firstPrice: 1050000,
        secondPrice: 1560000,
        star: 3.8,
        numSold: 531,
        status: "Còn hàng",
        type: "phongan"
    },
    {
        pathImage:
            "Images/Phòng ăn/Ghế ăn/102298-ghe-an-khong-tay-elegance-mau-den.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1450000,
        secondPrice: 1990000,
        star: 3.9,
        numSold: 510,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage:
            "Images/Phòng ăn/Ghế ăn/102416-ghe-an-elegance-khong-tay-mau-tu-nhien.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Ghế ăn/104194-she-an-spike-grey-1.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage:
            "Images/Phòng khách/Bàn/83783-ban-nuoc-pop-go-nau.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng khách/Bàn/3105924.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng khách/Bàn/BAN-NUOC-COFFEE-TABLE-SPIKE-2300315Z.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng ăn/Ghế ăn/Ghe-khong-tay-Chamcha.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng ăn/Bàn ăn/ban-an-athos.jpg",
        discount: 40,
        description: "Ghế sofa",
        note: "Mua 3 & giảm giảm 20%",
        firstPrice: 99000,
        secondPrice: 125500,
        star: 4.6,
        numSold: 55,
        status: "Còn hàng",
        type: "phongan"
    },
    {
        pathImage: "Images/Phòng khách/Bàn/BAN-NUOC-TABLE-GLAM-WHITE-2300281Z.jpg",
        discount: 20,
        description: "Bình thủy tinh",
        note: "Mua 3 & tặng 1",
        firstPrice: 8500,
        secondPrice: 21500,
        star: 4.8,
        numSold: 102,
        status: "Còn hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng khách/Sofa/102437-sofa-penny-3-cho-dacognac-1-768x511.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng khách/Ghế/armchair-paradise-gold-boc-vai-hien-dai-2.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng khách/Ghế/ARMCHAIR-CABO-PMA420047-MB2041-17.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongkhach"
    },
    {
        pathImage: "Images/Phòng làm việc/86828_1000-768x511.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phonglamviec"
    },
    {
        pathImage: "Images/Phòng làm việc/Ban-lam-viec-Osaka-3101891-1-768x511.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phonglamviec"
    },
    {
        pathImage: "Images/Phòng làm việc/GHE-LAM-VIEC-LABORA-HIGH-L.BROWN-85725K-768x495.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phonglamviec"
    },
    {
        pathImage: "Images/Tủ bếp/5._olive-768x496.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongbep"
    },
    {
        pathImage: "Images/Tủ bếp/4._elita-768x511.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongbep"
    },
];
// RENDER
mainProductList.innerHTML = renderProduct(products);

// CHUYỂN TRANG SẢN PHẨM
let totalPageNum = Math.floor(products.length / 10 + 1);
for(let i = 0; i < switchLeft.length; i++) {
    
    totalPage[i].innerText = totalPageNum;
    let currentPageNum = parseInt(currentPage[i].innerText);

    switchLeft[i].addEventListener('click', function() {
        if (start < 10) return;
        else {
            start -= 10;
            end -= 10;
            mainProductList.innerHTML = renderProduct(products);
        }
        currentPageNum -= 1;
        currentPageNum < 1
            ? (currentPageNum = 1)
            : (currentPage[i].innerText = currentPageNum);
    
        if (currentPageNum > 1) {
            switchLeft[i].classList.add("canUse");
        } else switchLeft[i].classList.remove("canUse");
    
        if (currentPageNum < totalPageNum) {
            switchRight[i].classList.add("canUse");
        } else switchRight[i].classList.remove("canUse");
    
    }); 
    switchRight[i].addEventListener('click',function () {
        if (end >= products.length) return;
        else {
            start += 10;
            end += 10;
            mainProductList.innerHTML = renderProduct(products);
        }
        currentPageNum += 1;
        currentPageNum > totalPageNum
            ? (currentPageNum = totalPageNum)
            : (currentPage[i].innerText = currentPageNum);
            if (currentPageNum > 1) {
            switchLeft[i].classList.add("canUse");
        } else switchLeft[i].classList.remove("canUse");
    
        if (currentPageNum < totalPageNum) {
            switchRight[i].classList.add("canUse");
        } else switchRight[i].classList.remove("canUse");
    
    }); 
}

// HÀM RENDER NGÔI SAO
function renderStar(star) {
    let html = ``;
    let i;
    for (i = 1; i <= star; i++) {
        html += ` <i class="rated ti-star"></i>`;
    }
    while (i < star) {
        html += ` <i class="ti-star"></i>`;
    }
    return html;
}

// HÀM RENDER DANH SÁCH SẢN PHẨM
function renderProduct(products) {
    let itemProducts = products.map((product) => {
        return `
       <div class="main_product-item">
 
          <div class="main_product-item-img">
             <img src="${product.pathImage}" alt="">
             <div class="discount">
                   <span class="num_discount">
                   ${product.discount}%</span>
                   <span>Giảm</span>
             </div>
           </div>
 
          <h3 class="main_product-item_description">
             ${product.description}
          </h3>
 
          <div class="main_product-item_note">
             <span>${product.note}</span>
          </div>
 
          <div class="main_product-item_price">
             <span>đ${product.firstPrice}</span>
             <span>-</span>
             <span class="second-price">đ${product.secondPrice}</span>
          </div>
 
          <div class="main_product-item-wrap">
             <div class="main_product-item_rate">
 
             ${renderStar(product.star)}
               
             </div>
             <div class="main_product-item_numSold">Đã bán ${
                 product.numSold
             }</div>
          </div>
 
          <div class="main_product-item_status">
             ${product.status}
          </div>
       </div>
       `;
    });

    let outputProduct = [];
    for (let j = start; j < end; j++) {
        outputProduct.push(itemProducts[j]);
    }
    return outputProduct.toString().replaceAll(',','');
}

// MENU SIDEBAR MOBILE 
let menuSidebar = document.querySelector('.menu-sidebar-mobile')
let productSidebar = 
            document.querySelector('.main_product-sidebar')

let isSidebarClose = true
menuSidebar.addEventListener('click',function() {
    if(isSidebarClose) {
        productSidebar.style.display = "block";
        isSidebarClose = !isSidebarClose;
    } else {
        productSidebar.style.display = "none";
        isSidebarClose = !isSidebarClose;
    }
})

//  LỌC SẢN PHẨM
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = btnContainer.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active");
    });
}
let workRoom = document.querySelector('.phong-lam-viec')
let livingRoom = document.querySelector('.phong-khach')
let diningRoom = document.querySelector('.phong-an')
let kitchen = document.querySelector('.phong-bep')
let submitFilterPrice = document.querySelector('.submit-filter-price')


let filterProduct = products;
workRoom.onclick = () => {
    filterProduct = products.filter(product => product.type === "phonglamviec")
    mainProductList.innerHTML = renderProduct(filterProduct)
     totalPageNum = Math.floor(filterProduct.length / 10 + 1);
     totalPage.forEach(page => page.innerHTML = totalPageNum)
}
livingRoom.onclick = () => {
    filterProduct = products.filter(product => product.type === "phongkhach")
    mainProductList.innerHTML = renderProduct(filterProduct)
    totalPageNum = Math.floor(filterProduct.length / 10 + 1);
    totalPage.forEach(page => page.innerHTML = totalPageNum)
}
diningRoom.onclick = () => {
    filterProduct = products.filter(product => product.type === "phongan")
    mainProductList.innerHTML = renderProduct(filterProduct)
     totalPageNum = Math.floor(filterProduct.length / 10 + 1);
     totalPage.forEach(page => page.innerHTML = totalPageNum)
}
kitchen.onclick = () => {
    filterProduct = products.filter(product => product.type === "phongbep")
    mainProductList.innerHTML = renderProduct(filterProduct)
     totalPageNum = Math.floor(filterProduct.length / 10 + 1);
     totalPage.forEach(page => page.innerHTML = totalPageNum)
}
submitFilterPrice.onclick = () => {
    let filterPriceMin = parseInt(document.querySelector('input.filter-price-min').value)
    let filterPriceMax = parseInt(document.querySelector('input.filter-price-max').value)
    
    
    filterProduct = products.filter(product => 
        product.firstPrice >= filterPriceMin
        && product.firstPrice <= filterPriceMax
    )
    mainProductList.innerHTML = renderProduct(filterProduct)

    console.log(filterPriceMin);
}