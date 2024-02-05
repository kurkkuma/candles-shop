document.querySelectorAll(".question svg").forEach((svg: Element) => {
  svg.addEventListener("click", function (this: SVGElement) {
    const answer = (this.parentNode as HTMLElement | null)?.nextElementSibling;
    if (answer) {
      answer.classList.toggle("show");
      this.classList.toggle("rotated");
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
