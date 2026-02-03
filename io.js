// const boxes = document.querySelectorAll(".box");

// const options = {
//   root: null,
//   threshold: 0.2,
//   rootMargin: "0px 0px -350px 0px",
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//       observer.unobserve(entry.target);
//     } else {
//       entry.target.classList.remove("visible");
//       console.log("delete classlist");
//     }
//   });
// });

// boxes.forEach((box) => observer.observe(box));

const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2, // 20% ko‘rinishida bo‘lsa, ishga tushadi
  }
);

boxes.forEach((box) => observer.observe(box));

