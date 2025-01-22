const inputEL = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEL.addEventListener("input", (event) => {
  const trimValue = event.target.value.trim();

  if (trimValue) {
    outputEl.textContent = trimValue;
  } else {
    outputEl.textContent = "Anonymous";
  }

  //   if (event.target.value.length > 0 && event.target.value !== " ") {
  //     outputEl.textContent = event.currentTarget.value;
  //   } else {
  //     outputEl.textContent = "Anonymous";
  //   }
});

const inputForm = document.querySelector("input");

inputForm.classList.add("inputStyle");

const firstEL = document.querySelector("h1");

firstEL.classList.add("firstElStyle");
