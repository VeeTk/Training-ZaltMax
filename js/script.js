//=========Выпадашка с номерами================================
let phoneMenuHeader = function () {
   const arrowActive = document.querySelector(".body__active");
   const arrowBtn = document.querySelector(".phone-header__arrow");
   const arrowTurn = document.querySelector(".arrow-turn");

   arrowBtn.addEventListener("click", () => {
      arrowActive.classList.toggle("body__active");
      arrowBtn.classList.toggle("arrow-turn");
   });
};
phoneMenuHeader();
// ==================Меню-нав-панель-гл.страницы================
const menu = document.querySelector(".submenu");
const link = document.querySelectorAll(".menu-catalog__item");

document.addEventListener("click", documentActions);
let number = 0;

function documentActions(event) {
   let numberLink = event.target.getAttribute("data-item");

   if (numberLink == number) {
      menu.classList.add("_hidden");
      number = 0;
   } else {
      menu.classList.remove("_hidden");
      number = numberLink;
   }
}
