var tl = gsap.timeline()

gsap.from(".page1 .box1",{

    scale:0,
    
    duration :2,
    rotate : 720, 

})
gsap.from(".page2 .box1",{

    scale:0,
    duration :2,
    rotate : 720, 
    scrollTrigger:{
        trigger: ".page2 .box1",
        scroller:"body",
        markers : true,
        start: "top 60%",
        end:"top 30%",
        scrub : 2
    }

})