import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectImages = document.querySelectorAll(".items__images--project img");
const hoverTitle = document.querySelector(".project__title--hover");

let counter = 0;
let projectImagesarray = [];
let smallArray = [];

projectImages.forEach(project => {
  if (counter < 2) {
    smallArray.push(project)
    counter++;
  }
  else if (counter === 2) {
    smallArray.push(project)
    projectImagesarray.push(smallArray)
    smallArray = [];
    counter = 0
  }
})

console.log(projectImagesarray);
hoverTitle.addEventListener('mouseover', () => {
  // console.log("test");
  projectImagesarray.forEach(project => {
    // console.log(project);
    const projectTimeline = gsap.timeline({
    });
    
    projectTimeline
    .to(project[0], {
      y: "-100%",
      duration: 2,
    })
    .to(project[1], {
      y: "-100%",
      duration: .5
    }, "<")
    .to(project[2], {
      y: "-100%",
      duration: .5
    }, "<")
    .to(project[1], {
      y: "-200%",
      duration: 2,
    }, "-=1")
    .to(project[2], {
      y: "-220%",
      duration: .5
    }, "<")
  })
})

