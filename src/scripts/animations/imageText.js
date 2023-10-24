import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll('.section__image--animation1 img');
const imageContainer = document.querySelectorAll('.section__image--animation1');
const textBlocks = document.querySelectorAll('.section__block--animation1');

images.forEach(image => {
  gsap.from(image, {
      scale: 2.5,
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        // markers: true
      }
  })
});
textBlocks.forEach(textBlock => {
  gsap.from(textBlock, {
    y: 700,
    scrollTrigger: {
      trigger: textBlock,
      start: "-40% bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true
    }
  }, "<")
});