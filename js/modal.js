const modalOpen = document.querySelector(".popap-open");
const modal = document.querySelector(".popap");
const modalClose = document.querySelector(".popap-close");

modalOpen.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = 15 + ("px ");
    document.body.classList.add('non-scrolling');
}

 
 modalClose.onclick = function () {
     modal.style.display = "none";
     document.body.style.overflowY = "scroll";
     document.body.style.paddingRight = 0 + ("px ");
     document.body.classList.remove('non-scrolling');
  }
 
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
         document.body.style.overflowY = "scroll";
         document.body.style.paddingRight = 0 + ("px ");
         document.body.classList.remove('non-scrolling');
     } 
 }