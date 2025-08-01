gsap.registerPlugin(ScrollTrigger);

// Animate image in page2
gsap.to(".page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "bottom top",
    scrub: 2,
    pin: true,
  }
});

// Animate h1 in page4
gsap.to(".page4 h1", {
  Transform:"translateX(-90%)", // Use xPercent for responsiveness
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    scrub: 3,
    markers: true,
    start: "top 0",
    end: "bottom -80%", // Animate until bottom of .page4 hits top of viewport
    pin: true,
  }
});
