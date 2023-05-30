gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        scrub: true,
        pin: true,
        start:"top top",
        end: "bottom top"
    }
})

tl.to(".container_absolute-one,.container_absolute-two,.heading-text", {
    duration: 10,
    height: 0,
}).to(
    ".heading-text-one",{duration: 45, height: 0},"<"
).to(".heading-text-two",{duration:15, y: -500},"<")


