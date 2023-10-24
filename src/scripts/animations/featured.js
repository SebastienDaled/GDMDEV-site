import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const triggerFeatured = document.querySelector(".section__featured")
const titles = document.querySelectorAll(".section__featured__title");
const imagesDiv = document.querySelectorAll(".section__featured__images");
const images = document.querySelectorAll(".section__featured__img");
const cover = document.querySelectorAll(".section__featured__cover");

export const featuredTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: triggerFeatured,
      end: "400% bottom",
      start: "top top",
      pin: true,
      scrub: true,
      // markers: true,
    }
});

featuredTimeLine
.to(images[0], {
  y: "-75%",
})
.to(titles[0], {
  y: "-100%",
}, "<")
.to(images[1], {
  y: "-101%",
}, "<")
.to(titles[1], {
  y: "-101%",
}, "<")
.to(images[2], {
  y: "-101%",
}, "<")
.to(titles[2], {
  y: "-101%",
}, "<")
.to(images[3], {
  y: "-101%",
}, "<")
.to(titles[3], {
  y: "-101%",
}, "<")
.to(images[1], {
  y: "-175%",
})
.to(titles[1], {
  y: "-200%",
}, "<")
.to(images[2], {
  y: "-201%",
}, "<")
.to(titles[2], {
  y: "-201%",
}, "<")
.to(images[3], {
  y: "-201%",
}, "<")
.to(titles[3], {
  y: "-201%",
}, "<")
.to(images[2], {
  y: "-275%",
})
.to(titles[2], {
  y: "-300%",
}, "<")
.to(images[3], {
  y: "-301%",
}, "<")
.to(titles[3], {
  y: "-301%",
}, "<")

