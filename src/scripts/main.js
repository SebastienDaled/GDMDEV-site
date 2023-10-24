import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./animations/navigation";
import "./animations/logoLoop";

import {photoRenderTimeLine} from "./animations/photoRender";
import { loadingTimeline } from "./animations/loading";
import { melkTimeLine } from "./animations/melk";
import {slideUpTimeLine} from "./animations/slideup";
import "./animations/imageText";
import { footerTimeLine } from "./animations/footer";
import { verticalTimeline } from "./animations/vertical";
import { ImageRollTimeline } from "./animations/imageRoll";
import { heroAboutTimeLine } from "./animations/aboutHero";
import"./animations/imageScale";
import"./animations/people";
import "./animations/project";

import "./animations/textScroll";
import { featuredTimeLine } from "./animations/featured";

gsap.registerPlugin(ScrollTrigger);

const masterTimeLine = gsap.timeline();

masterTimeLine
.add(photoRenderTimeLine)
.add(imageTextTimeLine)
.add(footerTimeLine)
.add(ImageRollTimeline)
.add(heroAboutTimeLine)
.add(verticalTimeline)
.add(melkTimeLine)
.add(logoLoopswiper)
.add(featuredTimeLine)
.add(loadingTimeline)
// .add(slideUpTimeLine);
