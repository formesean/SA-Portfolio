// Buttons

const siteButton1 = document.getElementById("site1");
siteButton1.onclick = function() {
    window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
}

const codeButton1 = document.getElementById("code1");
codeButton1.onclick = function() {
    window.open("https://github.com/aguilarsean/sliding-image", "_blank");
}

const siteButton2 = document.getElementById("site2");
siteButton2.onclick = function() {
    window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
}

const codeButton2 = document.getElementById("code2");
codeButton2.onclick = function() {
    window.open("https://github.com/aguilarsean/sliding-image", "_blank");
}

const siteButton3 = document.getElementById("site3");
siteButton3.onclick = function() {
    window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
}

const codeButton3 = document.getElementById("code3");
codeButton3.onclick = function() {
    window.open("https://github.com/aguilarsean/sliding-image", "_blank");
}

// Back to top

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Scroll Animations

function scrollToAbout() {
  var section = document.getElementById("about");
  window.scrollTo({
    top: section.offsetTop,
    left: 0,
    behavior: "smooth",
    duration: 5000,
  });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } 
    //   else {
    //     entry.target.classList.remove("show");
    //   }
    });
});
  
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el) => observer.observe(el));
