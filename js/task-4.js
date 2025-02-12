const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.target);

  let login = "";
  let password = "";

  data.forEach((value, key) => {
    if (key === "email") {
      login = value.trim();
    }
    if ((key = "password")) {
      password = value.trim();
    }
  });

  if (login === "" || password == "") {
    return alert("All form fields must be filled in");
  }
  console.log(`Login: ${login}, Password: ${password}`);
  event.target.reset();
});

registerForm.classList.add("formStyle");

const formInputLabels = document.querySelectorAll("label");

formInputLabels.forEach((label) => {
  label.classList.add("formInputLabel");
});

const btnStyle = document.querySelector("button");

btnStyle.classList.add("buttonStyle");
