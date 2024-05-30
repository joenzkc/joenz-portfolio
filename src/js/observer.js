const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("isVisible");
    } else {
      entry.target.classList.remove("isVisible");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animated");
hiddenElements.forEach((element) => {
  observer.observe(element);
});
