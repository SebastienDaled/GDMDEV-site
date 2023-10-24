import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const startPoint = document.querySelectorAll(".section__part--scorll >  p");
const allText = document.querySelectorAll(".section__part--scorll");
const scrollText = document.querySelectorAll(".part__scroll__words");
const scrollTextWord = document.querySelectorAll(".part__scroll__word");

const textDownTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger:  startPoint,
    start: "-60px top",
    end: "1000px top",
    scrub: 1,
    pin: allText,
    // markers: true,
  }
});

const textScrollTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger:  startPoint,
    start: "-60px top",
    end: "1000px top",
    scrub: 1,
  }
});


textScrollTimeLine.to(scrollText, {
  y: "-12rem",
})