import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelector(".item__slider");

gsap.set(images, {
  x: 100
})
gsap.to(images, {
  x: "-40%",
  duration: 7,
  yoyo: true,
  repeat: -1,
  delay: 1,
})
