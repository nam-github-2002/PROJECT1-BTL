//  FILTER PRODUCT

let btnContainer = document.querySelector(".main_product-filter-left");
let btns =[... btnContainer.getElementsByTagName('button')]

let currentPage = document.querySelector('.current_numpage')
let totalPage = document.querySelector('.total_numpage')
let productPageSwitch = document.querySelector('.numpage_switchBtn')
let switchLeft = productPageSwitch.querySelector('.ti-angle-left')
let switchRight = productPageSwitch.querySelector('.ti-angle-right')

//---------------------------------------------------------------

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
      let current = btnContainer.getElementsByClassName("active");
      current[0].classList.remove('active');
      this.classList.add('active'); 
   });
}
//--------------------------------------------------
let leftNum = parseInt(currentPage.innerText) 
let rightNum = parseInt(totalPage.innerText) 
console.log(leftNum);
switchLeft.onclick = function() {
    leftNum -= 1
    leftNum < 1 ? leftNum = 1 : currentPage.innerText = leftNum

    if(leftNum > 1) {
      switchLeft.classList.add('canUse')
        if(leftNum < rightNum) {
          switchRight.classList.add('canUse')
        }else {
          switchRight.classList.remove('canUse')
        }
    } else switchLeft.classList.remove('canUse')
}
switchRight.onclick = function() {
  leftNum += 1
  leftNum > rightNum ? leftNum = rightNum :  currentPage.innerText = leftNum

  if(leftNum > 1) {
    switchLeft.classList.add('canUse')
      if(leftNum < rightNum) {
        switchRight.classList.add('canUse')
      }else {
        switchRight.classList.remove('canUse')
      }
  } else switchLeft.classList.remove('canUse')
} 


