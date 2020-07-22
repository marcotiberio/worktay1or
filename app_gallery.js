const intro = document.querySelector(".typeface");
const intropresentation = document.querySelector(".presentation");
const video = intro.querySelector("video");
const presentationvideo = intropresentation.querySelector(".presentation-video");
const img = intro.querySelector(".typeface-video");
const typefacetext = intro.querySelector(".typeface-text");
const presentationtext = intropresentation.querySelector(".presentation-text");

//END SECTION
const section = document.querySelector("section");
const endtypeface = document.querySelector(".typeface");
const end = section.querySelector("div");
const endtypefacetext = section.querySelector(".typeface-text");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators({name:'font'})
  .setPin(intro)
  .addTo(controller);


//Text Animation
const typefacetextAnim = TweenMax.fromTo(typefacetext, 3, { right: 0, top: 10, opacity: 1 }, { left: 0, opacity: 0 });
const presentationtextAnim = TweenMax.fromTo(presentationtext, 3, { opacity: 1 }, { opacity: 0 });


let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(typefacetextAnim)
  .addTo(controller);


let scene3 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intropresentation,
  triggerHook: 0
})
  .addIndicators({name:'test'})
  .setTween(presentationtextAnim)
  .addTo(controller);



//Video Animation
// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", e => {
//   scrollpos = e.scrollPos / 1000;
// });

// setInterval(() => {
//   delay += (scrollpos - delay) * accelamount;
//   console.log(scrollpos, delay);

//   video.currentTime = delay;
// }, 33.3);
