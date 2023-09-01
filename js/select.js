
const elSelectCustom = document.getElementsByClassName("js-select-custom")[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const defaultLabel = elSelectCustomValue.getAttribute("data-value");


Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    elSelectCustomValue.textContent = e.target.textContent;
    elSelectCustom.classList.remove("isActive");
    elSelectCustom.classList.remove("shadow");
  });
});

elSelectCustomValue.addEventListener("click", (e) => {
  elSelectCustom.classList.toggle("isActive");
  elSelectCustom.classList.toggle("shadow");
});

document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove("isActive");
    elSelectCustom.classList.remove("shadow");
  }
});