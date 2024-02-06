document.querySelectorAll(".question").forEach((question: Element) => {
  question.addEventListener("click", function (this: HTMLElement) {
    const answer = this.nextElementSibling;
    if (answer) {
      answer.classList.toggle("show");
      const svg = this.querySelector("svg");
      if (svg) {
        svg.classList.toggle("rotated");
      }
    }
  });
});

document.getElementById("scroll-btn")?.addEventListener("click", () => {
  const productsSectionY =
    document.getElementById("products-section")?.offsetTop;
  window.scrollTo({
    top: productsSectionY,
    behavior: "smooth",
  });
});
