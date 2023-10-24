import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { transform } from "lodash";

gsap.registerPlugin(ScrollTrigger);

const navBarOpen = document.querySelectorAll(".navigation__bar--open")
const navBarClose = document.querySelectorAll(".navigation__bar--close")
const imagesDiv = document.querySelectorAll(".item__images--nav");
const allImages = document.querySelectorAll(".item__images--nav img");
const menu = document.querySelectorAll(".navigation__menu");
const mask = document.querySelectorAll(".menu__mask");
const btns = document.querySelectorAll(".menu__item--btn");
const titleOne = document.querySelectorAll(".menu__item--one");
const titleTwo = document.querySelectorAll(".menu__item--two");
const titleThree = document.querySelectorAll(".menu__item--three");

gsap.set(menu, {
  autoAlpha: 0,
  scaleY: 0
})
gsap.set(mask, {
  autoAlpha: 0,
  height: 0
})

navBarOpen.forEach(open => {
  open.addEventListener("click", () => {
    const openTimeline = gsap.timeline();
  
    openTimeline
    .to(menu, {
      autoAlpha: 1,
      scaleY: 1,
      duration: 1
    })
    .from(titleOne, {
      autoAlpha: 0,
      y: 200
    })
    .to(mask, {
      autoAlpha: 1,
      height: 450,
      duration: 2
    }, "-=1")
    .from(titleTwo, {
      autoAlpha: 0,
      y: 200
    })
    .from(titleThree, {
      autoAlpha: 0,
      y: 200
    })
  })
})
navBarClose.forEach(close => {
  close.addEventListener("click", () => {
    const openTimeline = gsap.timeline();
  
    openTimeline
    .to(menu, {
      autoAlpha: 0,
      scaleY: 1
    })
  })
})

btns.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    const hoverTimeline = gsap.timeline();

    hoverTimeline
    .to(btn, {
      opacity: .7
    })
  })
  btn.addEventListener("mouseleave", () => {
    gsap.set(btn, {
      opacity: 1
    })
  })
})

titleOne.forEach(one => {
  one.addEventListener("mouseover", () => {
    const imageTimeline = gsap.timeline();
  
    imageTimeline
    .to(allImages[0], {
      y: "-100%",
      duration: 2
    })
    .to(allImages[1], {
      y: "-100%",
      duration: 1
    }, "<")
  })
})

titleTwo.forEach(two => {
  two.addEventListener("mouseover", () => {
    const imageTimeline = gsap.timeline();
  
    imageTimeline
    .to(allImages[0], {
      y: "-100%",
      duration: 2
    })
    .to(allImages[1], {
      y: "-100%",
      duration: 1
    }, "<")
    .to(allImages[2], {
      y: "-100%",
      duration: 1
    }, "<")
    .to(allImages[3], {
      y: "-100%",
      duration: 1
    }, "<")
    .to(allImages[1], {
      y: "-200%",
      duration: 2
    }, "<")
    .to(allImages[2], {
      y: "-200%",
      duration: 1
    }, "<")
    .to(allImages[3], {
      y: "-200%",
      duration: 1
    }, "<")
  })
})

titleThree.forEach(three => {
  three.addEventListener("mouseover", () => {
    const imageTimeline = gsap.timeline();
  
    imageTimeline
    .to(allImages[0], {
      y: "-100%",
      duration: 2
    })
    .to(allImages[1], {
      y: "-100%",
      duration: 1
    }, "<")
    .to(allImages[2], {
      y: "-100%",
      duration: 1
    }, "<")
    .to(allImages[3], {
      y: "-100%",
      duration: 1
    }, "<")
    .to(allImages[1], {
      y: "-200%",
      duration: 2
    }, "<")
    .to(allImages[2], {
      y: "-200%",
      duration: 1
    }, "<")
    .to(allImages[3], {
      y: "-200%",
      duration: 1
    }, "<")
    .to(allImages[2], {
      y: "-300%",
      duration: 1
    }, "<")
    .to(allImages[3], {
      y: "-300%",
      duration: 1
    }, "<")
  })
})