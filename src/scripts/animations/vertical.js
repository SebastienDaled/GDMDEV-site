import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".item__images--vertical img");

export const verticalTimeline = gsap.timeline({
  yoyo: true,
  repeat: -1
});

verticalTimeline
.to(images[0], {
  y: "-100%",
  duration: 2,
  delay: 2
})
.to(images[1], {
  y: "-100%",
  duration: 1
}, "<")
.to(images[2], {
  y: "-100%",
  duration: 1
}, "<")
.to(images[1], {
  y: "-200%",
  duration: 2,
  delay: 2
})
.to(images[2], {
  y: "-200%",
  duration: 1
}, "<")