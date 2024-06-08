
gsap.from(".heading", {
    duration: 2,
    ease: "easeinOut",
   x:200,
   opacity:0,
  });
  
  gsap.from(".nav", {
    duration: 2,
    clearProps: true,
    opacity:0,
  });
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

gsap.from(".heading-two ", {
    opacity: 0,
    duration: 2,
    delay:2,
    scrollTrigger: {
      trigger: ".sec-two",
      start: "top 100%",
      end: "bottom 0%",
      toggleActions: "play none none none",
    },
  });
 
