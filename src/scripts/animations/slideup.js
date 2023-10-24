import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pictures = document.querySelectorAll(".img--fade-in");

gsap.set(pictures, {
  y: 300,
  autoAlpha: 0
})

pictures.forEach(picture => {
  gsap.to(picture, {
    y: 0,
    duration: 1.5,
    autoAlpha: 1,
    scrollTrigger: {
      trigger:  picture,
      start: "-300px 100%",
    }
  })
})

