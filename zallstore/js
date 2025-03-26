document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan konten setelah preloader selesai
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 5000);

    // Slider Iklan
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 3000);
});
