var tl = gsap.timeline()

tl.to("#box1",{
    x : 800,
    scale : 0.2,
    duration : 2,
    delay : 1,
    rotate : 360,
    backgroundColor : "blue"

})
tl.to("#box2",{
    x : 800,
    scale : 0.2,
    duration : 2,
    rotate : 360,
    backgroundColor : "red"

})
tl.to("#box3",{
    x : 800,
    scale : 0.2,
    duration : 2,
    rotate : 360,
    backgroundColor : "yellow"

})



