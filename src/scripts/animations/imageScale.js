import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".item__image--scale");
const imagesScrub = document.querySelectorAll(".item__image--scale-scrub");

images.forEach(image => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      // markers: true
    },
    scale: 1,
    duration: 2
  })
});
imagesScrub.forEach(image => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: true
      // markers: true
    },
    scale: 1,
    duration: 2
  })
});