import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hero = document.querySelector('.header--about');
const heroImage = document.querySelector('.header__hero--about');

gsap.set(heroImage, {
  backgroundSize: "100%"
})

export const heroAboutTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: true,
    // markers: true
  }
})

heroAboutTimeLine
.to(heroImage, {
  backgroundSize: "150%"
})