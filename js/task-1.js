const list = document.querySelectorAll(".item");
console.log("Number of categories: " + list.length);

// const listEl = list.forEach((element) => {
//   console.log("Category: " + element.firstElementChild.textContent);
//   console.log("Elements: ");
// });

// const nextEl = document.querySelectorAll("h2");
// nextEl.forEach((element) => {
//   const firstSubling = element.nextElementSibling;
//   console.log(firstSubling.children.length);
// });

const listEl = document.querySelectorAll("h2");
listEl.forEach((element) => {
  console.log("Category: " + element.textContent);

  const firstSibling = element.nextElementSibling;

  console.log("Elements: " + firstSibling.children.length);
});
