let cursor = document.querySelector(".cursor")
let cursorblur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+30+"px",
    cursor.style.top = dets.y+"px",
    cursorblur.style.left = dets.x- 150+"px",
    cursorblur.style.top = dets.y- 150+"px"
})
let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1 
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.to("#nav", {
    backgroundColor: "black",
    height: "115px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroll: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})
gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})
gsap.from(".aboutus img, .aboutus-in", {
    y: 90,
    opacity: 0,
    duration : 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".aboutus",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration : 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})
gsap.from(".colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub:1
    }
})
gsap.from(".colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".colon2",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})
gsap.from(".page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4 
    }
})



















