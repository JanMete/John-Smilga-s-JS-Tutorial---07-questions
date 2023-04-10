// const questionBoxs = document.querySelectorAll(".question");
// questionBoxs.forEach(function (item) {
//   const btn = item.querySelector(".question-btn");
//   btn.addEventListener("click", function () {
//     item.classList.toggle("show-text");
//     questionBoxs.forEach(function (value) {
//       if (value !== item) {
//         value.classList.remove("show-text");
//       }
//     });
//   });
// });

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     const boxs = e.currentTarget.parentElement.parentElement;
//     boxs.classList.toggle("show-text");
//   });
// });
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (item) {
//   const article = item.parentElement.parentElement;
//   item.addEventListener("click", function () {
//     article.classList.toggle("show-text");
//   });
// });

const articles = document.querySelectorAll(".question");
articles.forEach(function (item) {
  const btn = item.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    item.classList.toggle("show-text");
    articles.forEach(function (value) {
      if (value !== item) {
        value.classList.remove("show-text");
      }
    });
  });
});
