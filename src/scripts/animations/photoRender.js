import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let photoRenderTimeLine;

window.addEventListener("load", () => {
  const renderImg = document.querySelectorAll(".img--render");
  const masks = document.querySelectorAll(".mask--img");
  const firstText = document.querySelector('#firstText');
  const height = renderImg[0].height;
  const line = document.querySelector(".container__line--animation");
  const secondText = document.querySelectorAll('.container__text--animation')
  photoRenderTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger:  renderImg,
        start: "top 100%",
        end: "center 0",
        // markers: true
    }
  });

  gsap.set(renderImg, {
    scale: 1.5,
  })
  gsap.set(masks, {
    height: 0
  })
  gsap.set(firstText, {
    autoAlpha: 0
  })
  gsap.set(secondText, {
    autoAlpha: 0
  })
  gsap.set(line, {
    scaleX: 0
  })
  // timeline ----------------
  photoRenderTimeLine
  .to(firstText, {
    autoAlpha: 1,
    duration: 2,
  })
  .to(renderImg, {
    duration: 2,
    scale: 1,
  }, "-=1.5")
  .to(masks, {
    duration: 2,
    height: height,
    stagger: {
      each: .1,
      from: "left",
    }
  }, "<")
  .to(secondText, {
    autoAlpha: 1,
    duration: 2,
    stagger: {
      each: 1,
      from: "left",
    }
  }, "-=1")
  .to(line, {
    scaleX: 1,
    duration: 2,
    transformOrigin:"0% 0%", 
  },"<")
})

export default photoRenderTimeLine;


