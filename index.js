const submitBtn = document.getElementById("submit-btn");
const input = document.getElementById("input");
var placeholder = document.getElementById("input").getAttribute("placeholder");
const label = document.getElementById("warning");

const successSmall = document.getElementById("success-small");

function checkEmail(e) {
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(input.value)) {
    if (window.innerWidth < 992) {
      input.style.marginBottom = "2px";
      label.style.marginBottom = "20px";
    }
    input.style.border = "1px solid red";
    label.style.display = "inline";
    e.preventDefault();
    return false;
  }
}

submitBtn.addEventListener("click", (e) => {
  checkEmail(e);
});
