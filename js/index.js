document.getElementById("year").textContent = new Date().getFullYear();

const backToTop = document.querySelector(".back-to-top");

function updateBackToTop() {
    backToTop.hidden = window.scrollY < 500;
}

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


