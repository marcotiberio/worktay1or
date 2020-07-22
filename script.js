$(function () { // wait for document ready
  
  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-20%"})	
  .to("#js-slideContainer", 1,   {x: "-40%"})
  .to("#js-slideContainer", 1,   {x: "-60%"})
  .to("#js-slideContainer", 1,   {x: "-80%"})
  .to("#js-slideContainer", 1,   {x: "-100%"})
  .to("#js-slideContainer", 1,   {x: "-120%"})
  .to("#js-slideContainer", 1,   {x: "-140%"})
  .to("#js-slideContainer", 1,   {x: "-160%"})
  .to("#js-slideContainer", 1,   {x: "-180%"})
  .to("#js-slideContainer", 1,   {x: "-200%"})
  .to("#js-slideContainer", 1,   {x: "-220%"})
  .to("#js-slideContainer", 1,   {x: "-240%"})
  .to("#js-slideContainer", 1,   {x: "-260%"})
  .to("#js-slideContainer", 1,   {x: "-280%"})
  .to("#js-slideContainer", 1,   {x: "-300%"})
  .to("#js-slideContainer", 1,   {x: "-320%"})


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  
  
});