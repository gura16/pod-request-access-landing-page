const mail_input = document.getElementById("mail");
const button = document.getElementById("press");
const text = document.querySelector(".chek");
const text1 = document.querySelector(".chek1");

button.addEventListener("click", function () {
  const input = mail_input.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const valid = regex.test(input);

  if (valid) {
    text.style.display = "none";
    text1.style.display = "block";
  } else {
    text.style.display = "block";
    text1.style.display = "none";
  }
});
