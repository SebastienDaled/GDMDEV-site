import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workers = document.querySelectorAll(".section__item--profile");
const images = document.querySelectorAll(".item__image--people");

// workers.forEach(worker => {
//   const workerTimeline = gsap.timeline({
    
//   })

// })

images.forEach(image => {
  
})
for (let i = 0; i < images.length; i++) {
  gsap.from(images[i], {
    scrollTrigger: {
      trigger: workers[i],
      start: "top bottom",
      end: "bottom bottom",
      // markers: true
    },
    scale: 1.2,
    duration: 3
  })
  
}