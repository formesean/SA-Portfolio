// Buttons

// const siteButton1 = document.getElementById("site1");
// siteButton1.onclick = function () {
//   window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
// };

const codeButton1 = document.getElementById("code1");
codeButton1.onclick = function () {
  window.open("https://github.com/aguilarsean/CpE-DSA", "_blank");
};

// const siteButton2 = document.getElementById("site2");
// siteButton2.onclick = function () {
//   window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
// };

const codeButton2 = document.getElementById("code2");
codeButton2.onclick = function () {
  window.open("https://github.com/aguilarsean/Buddies-sns", "_blank");
};

// const siteButton3 = document.getElementById("site3");
// siteButton3.onclick = function () {
//   window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
// };

const codeButton3 = document.getElementById("code3");
codeButton3.onclick = function () {
  window.open("https://github.com/aguilarsean/Netflix-clone", "_blank");
};

const siteButton4 = document.getElementById("site4");
siteButton4.onclick = function () {
  window.open("https://aguilarsean.github.io/sliding-image/", "_blank");
};

const codeButton4 = document.getElementById("code4");
codeButton4.onclick = function () {
  window.open("https://github.com/aguilarsean/sliding-image", "_blank");
};

// Download Resume
const resumeButton = document.getElementById("resume-button");
const fileUrl = "./assets/Sean Karl Tyrese G Aguilar - Resume.pdf";

resumeButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "Sean Karl Tyrese G Aguilar - Resume.pdf";
  link.href = fileUrl;
  link.click();
});

// Contact Form
const showCardButton = document.getElementById("show-card");
const card = document.getElementById("card");
const closeCardButton = document.getElementById("close-card");
const backdrop = document.getElementById("backdrop");

showCardButton.addEventListener("click", () => {
  card.classList.remove("hidden-card");
  backdrop.classList.remove("hidden-card");
  document.body.classList.add("card-open");
});

closeCardButton.addEventListener("click", () => {
  card.classList.add("hidden-card");
  backdrop.classList.add("hidden-card");
  document.body.classList.remove("card-open");
});

function sendEmail(event) {
  event.preventDefault();
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("comment").value,
  };
  // console.log("Form data:", params);
  emailjs
    .send("service_m9l17pj", "template_vvh3g7m", params)
    .then(function (res) {
      // console.log("EmailJS response:", res);
      alert("Email sent successfully!");
      history.pushState(null, null, window.location.href.split("?")[0]);
    });
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
    // console.log(entry);
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
