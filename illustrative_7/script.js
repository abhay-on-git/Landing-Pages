const one  = document.querySelector("#one");
gsap.to(one,{
    delay:1,
    transform:"translateX(0)",
    duration:1,
    ease:"ease",
})

const two  = document.querySelector("#two");
gsap.to(two,{
    delay:1,
    transform:"translateX(0)",
    duration:1.5,
    ease:"ease",
})

const three  = document.querySelector("#three");
gsap.to(three,{
    delay:2.25,
    transform:"translateZ(0) scale(1)",
    opacity:1,
    duration:1.5,
    ease:"Expo.easeInOut",
})

const h3  = document.querySelector("#tittle h3");
gsap.to(h3,{
    delay:2.75,
    transform:"translateY(0)",
    transform:"translateZ(0) scale(1)",
    duration:1.5,
    opacity:1,
    ease:"Expo.easeInOut",
})

h3.addEventListener("mouseenter", () => {
    gsap.to(h3, {
        scale: 1.2,
        duration: 0.3,
        ease: "ease-in-out",
    });
});

h3.addEventListener("mouseleave", () => {
    gsap.to(h3, {
        scale: 1,
        duration: 0.3,
        ease: "ease-in-out",
    });
});

// Changing the Color Continusly

function changeColor(){
  
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    var randomColor = `rgb(${red},${green},${blue})`
    document.documentElement.style.setProperty('--STROKE-COLOR',randomColor);
}

document.addEventListener('DOMContentLoaded',() => {
    setInterval(changeColor,1000)
})



