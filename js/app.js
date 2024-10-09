const input_element = document.querySelector("#input_element");
const copy_button = document.querySelector(".copy_button");
const generate_button = document.querySelector(".generate_button");

let length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const sybmols = "!@#$%&'()*+,-./[]{}<|>=";

const allChars = upperCase + lowerCase + numbers + sybmols;

const createPassword = () => {
  let password = "";
  // password += upperCase[Math.floor(Math.random() * upperCase.length)];
  // password += lowerCase[Math.floor(Math.random() * upperCase.length)];
  // password += numbers[Math.floor(Math.random() * upperCase.length)];
  // password += sybmols[Math.floor(Math.random() * upperCase.length)];

  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  // console.log(password);
  input_element.value = password;
};

generate_button.addEventListener("click", createPassword);

copy_button.addEventListener("click", () => {
  input_element.select();
  document.execCommand("copy");

});
