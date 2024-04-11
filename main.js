const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  // navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// ---------------Customised scrollRevelallOption -------------

// header image section -------------------------------------

ScrollReveal().reveal(".image_about .img_abt h2", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".image_about .img_abt p", {
  ...scrollRevealOption,
  interval: 900,
  origin: "bottom",
});

ScrollReveal().reveal(".image_about .img_abt span", {
  ...scrollRevealOption,
  interval: 900,
  origin: "right",
});

ScrollReveal().reveal(".image_about", {
  ...scrollRevealOption,
  interval: 900,
  origin: "top",
});

// ------------------end of header image section ----------------------------

// who we are section text &  Our vision for the future------------------------------------------------

ScrollReveal().reveal(".who_we_are_img img", {
  ...scrollRevealOption,
  interval: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".who_we_are_text .who_we_are_header", {
  ...scrollRevealOption,
  interval: 800,
  origin: "top",
});

ScrollReveal().reveal(".who_we_are_text h2", {
  ...scrollRevealOption,
  interval: 800,
  origin: "bottom",
});

ScrollReveal().reveal(".who_we_are_text p", {
  ...scrollRevealOption,
  interval: 800,
  origin: "right",
});

ScrollReveal().reveal(".who_we_are_header p", {
  ...scrollRevealOption,
  interval: 800,
  origin: "right",
});

// ----------------------end of both -----------------------------------------

// ---why choose us ----------------------

// who we are section h1
ScrollReveal().reveal(".why_choose_us_abt h2", {
  ...scrollRevealOption,
  interval: 500,
  origin: "top",
});

ScrollReveal().reveal(".why_choose_us_abt p", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// who we are section image
ScrollReveal().reveal(".why_choose_us_about", {
  ...scrollRevealOption,
  interval: 800,
  origin: "top",
});

// who we are section text
ScrollReveal().reveal(".why_choose_us .text p", {
  ...scrollRevealOption,
  interval: 500,
  origin: "bottom",
});

// ------------------------------ end of why choose us------------

// ------------------------------ our partners-------------

ScrollReveal().reveal(".our_partners .partner_title", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".partner_container", {
  ...scrollRevealOption,
  interval: 500,
  origin: "bottom",
});

// ------------------------------end of our partners-------------

// ------------------------------ Our services

// who we are section h1
ScrollReveal().reveal(".services_section .title", {
  ...scrollRevealOption,
  interval: 500,
  origin: "top",
});

// who we are section text
ScrollReveal().reveal(".services_section .card_section", {
  ...scrollRevealOption,
  interval: 500,
  origin: "bottom",
});

// who we are section image
ScrollReveal().reveal(".why_choose_us .image img", {
  ...scrollRevealOption,
  interval: 800,
  origin: "top",
});

// ------------------------------  Register

// who we are section h1
ScrollReveal().reveal(".register_services .text h1", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// who we are section text
ScrollReveal().reveal(".register_list", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// who we are section image
ScrollReveal().reveal(".register_services .image img", {
  ...scrollRevealOption,
  interval: 800,
  origin: "top",
});

// -------------------end of customized RevealOption --------------
