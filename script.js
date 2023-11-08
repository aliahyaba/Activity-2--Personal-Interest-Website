document.querySelector(".loader-wrapper").style.display = "flex";

setTimeout(function () {
  document.querySelector(".loader-wrapper").style.display = "none";
}, 2000);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "foodkrac",
      "template_u3wqp5c",
      "#contact-form",
      "HlgkGp-thAwJT3rus"
    )
    .then(
      () => {
        contactMessage.textContent = "Sent!"; //if the message you want was sent

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Not Sent, Try Again."; //if there is wrong with the codes on line 16-19
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
