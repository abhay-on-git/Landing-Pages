// Img-Animation
const elements = document.querySelectorAll(".imgcontainer");

function imgAnimation(){
  elements.forEach((item, index) => {
  setTimeout(() => {
    gsap.to(item, {
      width: "100%",
      duration: 2,
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.fromTo(
          item,
          { width: "100%", left: "0%" },
          {
            width: "0%",
            left: "100%",
            duration: 2,
            opacity: 0.001,
            ease: "Expo.easeInOut",
            onComplete: () => {
              gsap.to(item,{
                width:"0%",
                left:"0%",
                opacity:1,
              })
            }
          }
        );
      },
    });
    
  }, index * 4000); // Delay each animation by 3 seconds multiplied by the index (adjust as needed)
});
}

function imgloopAnimation(){
  imgAnimation();
  setTimeout(imgloopAnimation , elements.length * 4000)
}

imgloopAnimation();


// Text-Animation

const h1 = document.querySelectorAll("#textdiv h1");

function h1Animation(){
  h1.forEach((item, index) => {
  setTimeout(() => {
    gsap.to(item, {
      left: "0%",
      opacity:1,
      duration: 2,
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.fromTo(
          item,
          { left: "0%" },
          {
            left: "25%",
            duration: 2,
            opacity: 0.001,
            ease: "Expo.easeInOut",
            onComplete: () => {
              gsap.to(item,{
                left:"-100%",
                opacity:0,
              })
            }
          }
        );
      },
    });
    
  }, index * 4000); // Delay each animation by 3 seconds multiplied by the index (adjust as needed)
});
}

function h1loopAnimation(){
  h1Animation();
  setTimeout(h1loopAnimation , elements.length * 4000)
}

h1loopAnimation();


// p-Animation

const p = document.querySelectorAll("#textdiv p");

function pAnimation(){
  p.forEach((item, index) => {
  setTimeout(() => {
    gsap.to(item, {
      bottom: "0%",
      opacity:1,
      duration: 2,
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.fromTo(
          item,
          { bottom: "0%" },
          {
            left: "25%",
            duration: 2,
            opacity: 0.001,
            ease: "Expo.easeInOut",
            onComplete: () => {
              gsap.to(item,{
                left:"0%",
                bottom:"-30%",
                opacity:0,
              })
            }
          }
        );
      },
    });
    
  }, index * 4000); // Delay each animation by 3 seconds multiplied by the index (adjust as needed)
});
}

function ploopAnimation(){
  pAnimation();
  setTimeout(ploopAnimation , elements.length * 4000)
}

ploopAnimation();


// More btn Amimation

const more = document.querySelector("#more i");

function moreAnimation(){
  gsap.to(more,{
    left:"80%",
    duration:2,
    ease: "Expo.easeInOut",
    onComplete:() => {
      gsap.fromTo(more,
        {left:"80%"},
        {
          left:"60%",
          duration:2,
          ease: "Expo.easeInOut"
        }
        )
    }
  })
}

function moreloopAnimation(){
  moreAnimation();
  setTimeout(moreloopAnimation , 4000)
}

moreloopAnimation();



// empty div Animation

const emptyDiv = document.querySelectorAll("#emptydiv");

function emptydivAnimation(){

  emptyDiv.forEach((item,index) => {
    setTimeout(() => {
      gsap.to(item,{
        backgroundColor:"#000",
        ease:"Expo.easeInOut",
        onComplete: () => {
          gsap.fromTo(item,{
            backgroundColor:"#000",
          },
          {
            delay:3,
            backgroundColor:"#dadada",
          })
        }
      })
    },index*4000)
  })
  }



  function emptydivloopAnimation(){
    emptydivAnimation();
    setTimeout(emptydivloopAnimation,emptyDiv.length*4000);
  }

  emptydivloopAnimation();