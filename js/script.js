
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
// ==============================================================

