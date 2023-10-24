import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const hoofdtitel = document.querySelector(".overlay__title");
const tekst = document.querySelectorAll(".overlay__text");
const vlak = document.querySelector(".start");

export const loadingTimeline = gsap.timeline();


loadingTimeline
.from(hoofdtitel, {
  autoAlpha: 0,
  y: 300,
  duration: 1
})
.from(tekst[0], {
  autoAlpha: 0,
  y: -100,
  duration: .5
}, "-=.5")
.from(tekst[1], {
  autoAlpha: 0,
  y: 100,
  duration: .5
}, "<")
.to(vlak, {
  scaleY: 0,
  duration: 2
})