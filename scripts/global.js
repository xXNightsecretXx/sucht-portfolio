let resizeTimer;
window.addEventListener("resize", () => {
document.body.classList.add("resize-animation-stopper");
clearTimeout(resizeTimer);
resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
}, 400);
});

const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
entry.target.classList.toggle("slide-in", entry.isIntersecting);
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: "0px", threshold: 1 }; 
const elements = document.querySelectorAll(".block");
elements.forEach(el => {
    observer.observe(el, options);
});

function toggleMenu() {
    document.getElementById("hamburger-menu").classList.toggle("open");
    document.getElementById("menu-options").classList.toggle("open");
}

function checkPlatform() {
    if (window.innerWidth/window.innerHeight > 8/9) {
        document.getElementById("option-text-1").innerText = "  b)  Suchtbegriffe\n\tSuchtformen";
        document.getElementById("option-text-2").innerText = "  c) Entstehung\nd) Folgen";
        document.getElementById("option-text-3").innerText = "  e) Gefahren\nund Prävention";
    } else {
        document.getElementById("option-text-1").innerText = "  b) Suchtbegriffe & -formen";
        document.getElementById("option-text-2").innerText = "  c) Entstehung / d) Folgen";
        document.getElementById("option-text-3").innerText = "  e) Gefahren und Prävention";
    }
}

function onLoad() {
    checkPlatform();
}