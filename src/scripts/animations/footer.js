import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerContainer = document.querySelector(".footer__links");
const footerLogo = document.querySelector(".links__logo");
const footerSocialText = document.querySelectorAll(".social__text");

export const footerTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: footerContainer,
    start: "20% bottom",
    end: "bottom bottom",
    // markers: true
  }
})

gsap.set(footerLogo, {
  y: 100,
  autoAlpha: 0
})

footerTimeLine
.to(footerLogo, {
  y: 0,
  autoAlpha: 1,
  duration: 2
})
.from(footerSocialText, {
  autoAlpha: 0,
  y: 20,
  stagger: {
    each: .5,
    from: "left",
  }
})


// hover animation
const footerHoverAnimation = document.querySelectorAll(".social__hover");
const footerHoverObject = document.querySelectorAll(".social__text");

for (let i = 0; i < footerHoverObject.length; i++) {
  footerHoverObject[i].addEventListener("mouseover", () => {
    gsap.to(footerHoverAnimation[i], {
      x: 200,
      duration: 1.5
    })
    gsap.set(footerHoverAnimation[i], {
      x: "-100%",
      duration: 0,
      delay: 1.5
    })
  })
  footerHoverObject[i].addEventListener("mouseleave", () => {
    gsap.to(footerHoverAnimation[i], {
      x: 0,
      duration: 0
    })
  })
}