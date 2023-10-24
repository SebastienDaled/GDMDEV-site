import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelectorAll(".secton--melk");
const textItems = document.querySelectorAll('.item__text--melk');
const divItem = document.querySelectorAll('.section__item--melk');

export const melkTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top bottom",
    end: "bottom bottom",
    // markers: true
  }
})

gsap.set(textItems, {autoAlpha: 0, y: 300})
gsap.set(divItem, {autoAlpha: 0, y: 300})

melkTimeLine
.to(textItems[0], {
  y: 0,
  autoAlpha: 1,
  duration: 2
})
.to(divItem, {
  y: 0,
  autoAlpha: 1,
  duration: 2
}, "-=1")
.to(textItems[1], {
  y: 0,
  autoAlpha: 1,
  duration: 2
}, "-=1")