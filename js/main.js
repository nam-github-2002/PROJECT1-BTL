//SLIDE
let mainSlider = document.querySelector(".main-slider");
let slideItems = [...document.querySelectorAll(".slide-item")];
let btnTurnLeftSilde = document.querySelector(".slide-turn-left");
let btnTurnRightSilde = document.querySelector(".slide-turn-right");
let chooseSlideBlock = document.querySelector(".chooseSlide");
let dotSlides = [...document.querySelectorAll(".slide_dot")];
// PRODUCT
let mainProductList = document.querySelector(".main_product-list");
let star = document.querySelector(".main_product-item_rate  i");
let btnContainer = document.querySelector(".main_product-filter-left");
let btns = [...btnContainer.getElementsByTagName("button")];

let currentPage = [...document.querySelectorAll(".current_numpage")];
let totalPage = [...document.querySelectorAll(".total_numpage")];
let productPageSwitch = [...document.querySelectorAll(".numpage_switchBtn")];
let switchLeft = [
    ...document.querySelectorAll(".numpage_switchBtn .ti-angle-left"),
];
let switchRight = [
    ...document.querySelectorAll(".numpage_switchBtn .ti-angle-right"),
];

let workRoom = document.querySelector(".phong-lam-viec");
let livingRoom = document.querySelector(".phong-khach");
let diningRoom = document.querySelector(".phong-an");
let kitchen = document.querySelector(".phong-bep");
let allType = document.querySelector(".default");
let submitFilterPrice = document.querySelector(".submit-filter-price");

// VALIDATION
let validateForm = document.querySelector(".validate");
let openLoginBtn = [...document.querySelectorAll(".log-in")];
let openRegistorBtn = [...document.querySelectorAll(".registor")];

let closeValidateBtn = [...document.querySelectorAll(".close-validate")];
let registorForm = document.getElementById("registor");
let registorBtn = document.querySelector(".validate-nav .registor-nav");
let loginForm = document.getElementById("login");
let loginBtn = document.querySelector(".validate-nav .log-in-nav");

// CHUYỂN SLIDE
let start = 0;
let end = 10;
let xAxis = 0;
let slideSpeed = 5000;
const changeSlideInterval = setInterval(changeSlide, slideSpeed);
function changeSlide() {
    // TỰ ĐỘNG
    xAxis += 100;
    if (xAxis > 400) xAxis = 0;

    mainSlider.style.left = `-${xAxis}%`;

    for (let dotSlide of dotSlides) {
        dotSlide.classList.remove("active-dot-slide");
        if (dotSlide.value == xAxis) dotSlide.classList.add("active-dot-slide");
    }

    // SANG TRÁI
    btnTurnLeftSilde.onclick = () => {
        xAxis -= 100;
        if (xAxis < 0) xAxis = 400;

        for (let dotSlide of dotSlides) {
            dotSlide.classList.remove("active-dot-slide");
            if (dotSlide.value == xAxis)
                dotSlide.classList.add("active-dot-slide");
        }

        mainSlider.style.left = `-${xAxis}%`;
    };

    // SANG PHẢI
    btnTurnRightSilde.onclick = () => {
        xAxis += 100;
        if (xAxis > 400) xAxis = 0;

        for (let dotSlide of dotSlides) {
            dotSlide.classList.remove("active-dot-slide");
            if (dotSlide.value == xAxis)
                dotSlide.classList.add("active-dot-slide");
        }

        mainSlider.style.left = `-${xAxis}%`;
    };

    // TỰ CHỌN
    for (let i = 0; i < dotSlides.length; i++) {
        dotSlides[i].addEventListener("click", function () {
            for (let dotSlide of dotSlides) {
                dotSlide.classList.remove("active-dot-slide");
            }

            this.classList.add("active-dot-slide");

            xAxis = this.value;
            mainSlider.style.left = `-${xAxis}%`;
        });
    }
}

// DANH SÁCH SẢN PHẨM
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
    },
    {
        pathImage: "Images/Phòng khách/Bàn/83783-ban-nuoc-pop-go-nau.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongkhach",
    },
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
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
        type: "phongan",
    },
    {
        pathImage: "Images/Phòng khách/Bàn/83783-ban-nuoc-pop-go-nau.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongkhach",
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
        type: "phongkhach",
    },
    {
        pathImage:
            "Images/Phòng khách/Bàn/BAN-NUOC-COFFEE-TABLE-SPIKE-2300315Z.jpg",
        discount: 20,
        description: "Đèn trần",
        note: "",
        firstPrice: 1150000,
        secondPrice: 1895000,
        star: 3.8,
        numSold: 41,
        status: "Đã hết hàng",
        type: "phongkhach",
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
        type: "phongan",
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
        type: "phongan",
    },
    {
        pathImage:
            "Images/Phòng khách/Bàn/BAN-NUOC-TABLE-GLAM-WHITE-2300281Z.jpg",
        discount: 20,
        description: "Bình thủy tinh",
        note: "Mua 3 & tặng 1",
        firstPrice: 8500,
        secondPrice: 21500,
        star: 4.8,
        numSold: 102,
        status: "Còn hàng",
        type: "phongkhach",
    },
    {
        pathImage:
            "Images/Phòng khách/Sofa/102437-sofa-penny-3-cho-dacognac-1-768x511.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongkhach",
    },
    {
        pathImage:
            "Images/Phòng khách/Ghế/armchair-paradise-gold-boc-vai-hien-dai-2.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongkhach",
    },
    {
        pathImage:
            "Images/Phòng khách/Ghế/ARMCHAIR-CABO-PMA420047-MB2041-17.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phongkhach",
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
        type: "phonglamviec",
    },
    {
        pathImage:
            "Images/Phòng làm việc/Ban-lam-viec-Osaka-3101891-1-768x511.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phonglamviec",
    },
    {
        pathImage:
            "Images/Phòng làm việc/GHE-LAM-VIEC-LABORA-HIGH-L.BROWN-85725K-768x495.jpg",
        discount: 50,
        description: "Bình hoa trang trí",
        note: " ",
        firstPrice: 182500,
        secondPrice: 215000,
        star: 5,
        numSold: 205,
        status: "Đã hết hàng",
        type: "phonglamviec",
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
        type: "phongbep",
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
        type: "phongbep",
    },
];

for (let i = 0; i < products.length; i++) {
    products[i].id = i + 1;
}
// RENDER
mainProductList.innerHTML = renderProduct(products, start, end);
let filterProductList = products;
let totalPageNum = Math.floor(filterProductList.length / 10 + 1);
let currentPageNum = parseInt(currentPage[1].innerText);
// CHUYỂN TRANG SẢN PHẨM
function switchPage(filterProductList,totalPageNum,currentPageNum,start,end)
{
    for (let i = 0; i < switchLeft.length; i++) {
        totalPage[i].innerText = totalPageNum;
        if(totalPageNum === 1) {
            switchRight[i].classList.remove('canUse');
            switchLeft[i].classList.remove('canUse');
        } else switchRight[i].classList.add('canUse')

        if (currentPageNum === 1)
            switchLeft[i].classList.remove("canUse");
        if (currentPageNum === totalPageNum)
            switchRight[i].classList.remove("canUse");

        switchLeft[i].addEventListener("click", function () {
            if (start < 10 || currentPageNum === 1) {
                return;
            } 
            switchRight[i].classList.add("canUse");
            
            currentPageNum -= 1;
            currentPage[i].innerText = currentPageNum;
            if (start < 10 || currentPageNum === 1)
                switchLeft[i].classList.remove("canUse");

            start -= 10;
            end -= 10;
            mainProductList.innerHTML = renderProduct(
                filterProductList,
                start,
                end
            );

            let productItems = [];
            productItems = [
                ...mainProductList.querySelectorAll(".main_product-item"),
            ];
            renderDetail(productItems, filterProductList);

        });
        
        switchRight[i].addEventListener("click", function () {
            
            if (end >= filterProductList.length || currentPageNum === totalPageNum) {
                return;
            }
            switchLeft[i].classList.add("canUse");
            
            currentPageNum += 1;
            currentPage[i].innerText = currentPageNum;
            if (end >= filterProductList.length || currentPageNum === totalPageNum)
                switchRight[i].classList.remove("canUse");

            start += 10;
            end += 10;
            mainProductList.innerHTML = renderProduct(
                filterProductList,
                start,
                end
            );

            let productItems = [];
            productItems = [
                ...mainProductList.querySelectorAll(".main_product-item"),
            ];
            renderDetail(productItems, filterProductList);
        });

       
    }
}
switchPage(products,totalPageNum,currentPageNum,start,end);
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
function renderProduct(products, start, end) {
    let itemProducts = products.map((product) => {
        return `
       <div class="main_product-item" id="${product.id}">
 
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
    return outputProduct.toString().replaceAll(",", "");
}

// MENU SIDEBAR MOBILE
let menuSidebar = document.querySelector(".menu-sidebar-mobile");
let productSidebar = document.querySelector(".main_product-sidebar");

let isSidebarClose = true;
menuSidebar.addEventListener("click", function () {
    if (isSidebarClose) {
        productSidebar.style.display = "block";
        isSidebarClose = !isSidebarClose;
    } else {
        productSidebar.style.display = "none";
        isSidebarClose = !isSidebarClose;
    }
});

//  LỌC SẢN PHẨM
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = btnContainer.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active");
    });
}
workRoom.onclick = () => {
    filterProductList = products.filter(
        (product) => product.type == "phonglamviec"
    );
    start = 0;
    end = 10;
    mainProductList.innerHTML = renderProduct(filterProductList, start, end);

    totalPageNum = Math.floor(filterProductList.length / 10 + 1);
    totalPage.forEach((page) => (page.innerHTML = totalPageNum));
    currentPageNum = 1;
    currentPage.forEach((page) => (page.innerHTML = currentPageNum));

    let productItems = [];
    productItems = [...mainProductList.querySelectorAll(".main_product-item")];
    switchPage(filterProductList,totalPageNum,currentPageNum,start,end)
    renderDetail(productItems, filterProductList);
};

livingRoom.onclick = () => {
    filterProductList = products.filter(
        (product) => product.type === "phongkhach"
    );
    start = 0;
    end = 10;
    mainProductList.innerHTML = renderProduct(filterProductList, start, end);
    totalPageNum = Math.floor(filterProductList.length / 10 + 1);
    totalPage.forEach((page) => (page.innerHTML = totalPageNum));
    currentPageNum = 1;
    currentPage.forEach((page) => (page.innerHTML = currentPageNum));
    let productItems = [];
    productItems = [...mainProductList.querySelectorAll(".main_product-item")];
    switchPage(filterProductList,totalPageNum,currentPageNum,start,end);
    renderDetail(productItems, filterProductList);
};

diningRoom.onclick = () => {
    filterProductList = products.filter(
        (product) => product.type === "phongan"
    );
    start = 0;
    end = 10;
    mainProductList.innerHTML = renderProduct(filterProductList, start, end);

    totalPageNum = Math.floor(filterProductList.length / 10 + 1);
    totalPage.forEach((page) => (page.innerHTML = totalPageNum));
    currentPageNum = 1;
    currentPage.forEach((page) => (page.innerHTML = currentPageNum));
    let productItems = [];
    productItems = [...mainProductList.querySelectorAll(".main_product-item")];
    switchPage(filterProductList,totalPageNum,currentPageNum,start,end);
    renderDetail(productItems, filterProductList);
};

kitchen.onclick = () => {
    filterProductList = products.filter(
        (product) => product.type === "phongbep"
    );
    start = 0;
    end = 10;
    mainProductList.innerHTML = renderProduct(filterProductList, start, end);

    totalPageNum = Math.floor(filterProductList.length / 10 + 1);
    totalPage.forEach((page) => (page.innerHTML = totalPageNum));
    currentPageNum = 1;
    currentPage.forEach((page) => (page.innerHTML = currentPageNum));

    let productItems = [];
    productItems = [...mainProductList.querySelectorAll(".main_product-item")];
    switchPage(filterProductList,totalPageNum,currentPageNum,start,end);
    renderDetail(productItems, filterProductList);
};

allType.onclick = () => {
    start = 0;
    end = 10;
    mainProductList.innerHTML = renderProduct(products, start, end);

    totalPageNum = Math.floor(products.length / 10 + 1);
    totalPage.forEach((page) => (page.innerHTML = totalPageNum));
    currentPageNum = 1;
    currentPage.forEach((page) => (page.innerHTML = currentPageNum));

    let productItems = [];
    productItems = [...mainProductList.querySelectorAll(".main_product-item")];
    switchPage(products,totalPageNum,currentPageNum,start,end);
    renderDetail(productItems, products);
};

submitFilterPrice.onclick = () => {
    let filterPriceMin = parseInt(
        document.querySelector("input.filter-price-min").value
    );
    let filterPriceMax = parseInt(
        document.querySelector("input.filter-price-max").value
    );

    filterProductList = products.filter(
        (product) =>
            product.firstPrice >= filterPriceMin &&
            product.firstPrice <= filterPriceMax
    );
    mainProductList.innerHTML = renderProduct(filterProductList, start, end);

    totalPageNum = Math.floor(filterProductList.length / 10 + 1);
    totalPage.forEach((page) => (page.innerHTML = totalPageNum));
    currentPageNum = 1;
    currentPage.forEach((page) => (page.innerHTML = currentPageNum));

    let productItems = [];
    productItems = [...mainProductList.querySelectorAll(".main_product-item")];
    switchPage(filterProductList,totalPageNum,currentPageNum,start,end);
    renderDetail(productItems, filterProductList);
};

//RENDER TRANG CHI TIẾT SẢN PHẨM
let productItems = [...mainProductList.querySelectorAll(".main_product-item")];
let productDetail = document.querySelector(".product-detail");
let mainPage = document.getElementById("main");

function renderDetail(productItems, productRepo) {
    for (let i = 0; i < productItems.length; i++) {
        productItems[i].addEventListener("click", function () {
            let currentItemProduct = null;
            for (let product of productRepo) {
                if (product.id === parseInt(productItems[i].id))
                    currentItemProduct = product;
            }

            renderItemDetail(currentItemProduct);
        });
    }
}
renderDetail(productItems, filterProductList);

function renderItemDetail(productItem) {
    window.scrollTo(0, 0);
    mainPage.style.display = "none";
    productDetail.style.display = "block";

    productDetail.innerHTML = `
        
    <div class="back-to-home">
        <i class="ti-arrow-left"></i>
        <span>Trở lại</span>
    </div>
    
    <div class="details ">

        <div class="details-img ">
            <img src="${productItem.pathImage}" alt="">
        </div>

        <div class="info">
            <h2>${productItem.description}</h2>

            <div class="info-evalute">
                <ul> 
                ${renderStar(productItem.star)}
                </ul>
                <div class="num-sold">
                    <span>${productItem.numSold}</span>
                    <span>Đã bán</span>
                </div>
            </div>

            <div class="details-price">
                <div class="second-price">₫${productItem.secondPrice}</div>
                <div class="first-price">₫${productItem.firstPrice}</div>
                <div class="discount-price">
                    <span>${productItem.discount}%</span>
                    <span>GIẢM</span>
                </div>
            </div>

            <div class="transport">
                <span>Vận chuyển:</span>
                <span class="transport-fee">Miễn phí vận chuyển</span>
            </div>

            <div class="detail-description">
                <span>Mô tả: </span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos quibusdam ex, tempora molestias porro, doloribus, commodi nesciunt animi error eaque quisquam recusandae. Temporibus pariatur nobis, animi ea eveniet neque.</span>
            </div>

            <div class="quantity">
                <span>Số lượng</span>
                <div class="quantity-input">
                    <button class="btn-quantity-desc">-</button>
                    <input type="number" name="" value="1" min="1" step="1">
                    <button class="btn-quantity-asc">+</button>
                </div>
            </div>
        
            <div class="details-buy">
                <button class="add-to-cart">
                    <i class="ti-shopping-cart"></i>
                    <span>thêm vào giỏ hàng</span>
                </button>
                <button class="buy">mua ngay</button>
            </div>
        </div>
    
    </div>             
    
    `;
    let homeBtn = document.querySelector(".back-to-home");
    homeBtn.addEventListener("click", function () {
        productDetail.style.display = "none";
        mainPage.style.display = "block";
        window.scrollTo(0, 780);
    });
    var buyBtn = [...document.querySelectorAll("button.buy")];
    buyBtn.map((e) => {
        e.addEventListener("click", function () {
            validateForm.style.display = "block";
            openLoginForm();
        });
    });
}

// VALIDATION

function openLoginForm() {
    loginForm.style.display = "block";
    registorForm.style.display = "none";
    loginBtn.classList.add("validate-current");
    registorBtn.classList.remove("validate-current");
}
function openRegistorForm() {
    registorForm.style.display = "block";
    loginForm.style.display = "none";
    registorBtn.classList.add("validate-current");
    loginBtn.classList.remove("validate-current");
}
loginBtn.onclick = () => {
    openLoginForm();
};
registorBtn.onclick = () => {
    openRegistorForm();
};
openLoginBtn.map((e) => {
    e.addEventListener("click", function () {
        validateForm.style.display = "block";
        openLoginForm();
    });
});
openRegistorBtn.map((e) => {
    e.addEventListener("click", function () {
        validateForm.style.display = "block";
        openRegistorForm();
    });
});
closeValidateBtn.map((e) => {
    e.addEventListener("click", function () {
        validateForm.style.display = "none";
    });
});

let checkValidate = () => {
    // Check email
    let emailRegis = document.getElementById("registor-email");
    let messageEmailRegis = document.querySelector(
        "#registor-email + .form-message"
    );
    var isTrueMail = false;

    let mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailRegis.oninput = () => {
        if (messageEmailRegis.value == undefined)
            messageEmailRegis.innerText = "";

        isTrueMail = mailRegex.test(emailRegis.value);
        messageEmailRegis.innerText = isTrueMail ? "" : "Email không hợp lệ";
    };

    // CHECK PASSWORD
    let passRegis = document.getElementById("registor-password");
    let messagePassRegis = document.querySelector(
        "#registor-password + .form-message"
    );

    let strongPass =
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let mediumPass =
        /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

    let hasPass = false;
    passRegis.oninput = () => {
        setTimeout(() => {
            if (passRegis.value == undefined) passRegis.innerText = "";

            let isStrongPass = strongPass.test(passRegis.value);
            let isMediumPass = mediumPass.test(passRegis.value);
            if (isStrongPass) {
                messagePassRegis.innerHTML = "Mật khẩu mạnh";
                messagePassRegis.style.color = "green";
            } else if (isMediumPass) {
                messagePassRegis.innerHTML = "Mật khẩu bình thường";
                messagePassRegis.style.color = "orange";
            } else {
                messagePassRegis.innerHTML = "Mật khẩu yếu, nhập lại";
                messagePassRegis.style.color = "red";
            }
            hasPass = isStrongPass || isMediumPass ? true : false;
        }, 400);
    };

    // XÁC NHẬN MẬT KHẨU NHẬP LẠI
    let passRepeat = document.getElementById("registor-repeat-password");
    let messagePassRepeat = document.querySelector(
        "#registor-repeat-password + .form-message"
    );
    let isTrueRepeat = false;

    passRepeat.oninput = () => {
        setTimeout(() => {
            isTrueRepeat = passRepeat.value === passRegis.value;
            if (isTrueRepeat) {
                messagePassRepeat.innerText = "Mật khẩu trùng khớp";
                messagePassRepeat.style.color = "green";
            } else messagePassRepeat.innerText = "Mật khẩu không trùng khớp";
        }, 500);
    };

    // SUBMIT
    let regisSubmit = document.getElementById("registor-submit");
    regisSubmit.onclick = () => {
        if (isTrueMail && hasPass && isTrueRepeat) {
            let strEmail = emailRegis.value.toString();
            let strPassword = passRegis.value.toString();
            localStorage.setItem("email", strEmail);
            localStorage.setItem("password", strPassword);
        }
    };
};
checkValidate();
