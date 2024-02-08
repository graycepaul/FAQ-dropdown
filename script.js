let button = document.querySelectorAll("button");
const faq = document.querySelectorAll(".faq");

let plusBtnIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
  </svg>
`;

let minusBtnIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
  </svg>

`;

function showPopUp(index, icon) {
  faq[index].classList.toggle("popup");

  console.log(button[index].innerHTML == plusBtnIcon);
  console.log(button[index].innerHTML);
  let open;
  if (close) {
    open = button[index].innerHTML = minusBtnIcon;
    close = "";
  } else if (!close) {
    close = button[index].innerHTML = plusBtnIcon;
    open = "";
  }
  console.log(button[index].innerHTML);
}

console.log(plusBtnIcon);

for (let i = 0; i < button.length; i++) {
  let close = (button[i].innerHTML = plusBtnIcon);

  let index = i;
  button[i].addEventListener("click", () => {
    showPopUp(index, close);
  });
}
