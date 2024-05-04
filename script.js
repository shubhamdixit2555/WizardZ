
function scrollToSection(sectionId) {
  var section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function sec1Animation() {
  tl = gsap.timeline();
  tl.from("nav .nav_left h1, nav .nav_right h4, nav .nav_right button", {
    opacity: 0,
    y: -300,
    duration: 0.6,
    stagger: 0.3,
  });
  tl.from(
    ".section1_left h2, .section1_left p, .section1_left button",
    {
      opacity: 0,
      duration: 0.5,
      x: -100,
      stagger: 0.3,
    },
    "-=0.2"
  );
  tl.from(
    ".section1_right img",
    {
      opacity: 0,
      duration: 0.5,
      x: 100,
    },
    "-=1"
  );
}
function sec2Animation(){
  gsap.from(".section2",{
    y:150,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:1,
    }
  })
}
function sec3subAnimation(){
  gsap.from(".section3_sub p",{
    y:50,
    stagger:0.5,
    opacity:0,
    scrollTrigger :{
      trigger:".section3_sub p",
      scroller:"body",
      start:"top 80%",
      end:"top 20%",
      scrub:3,
    }
  })
}
function sec6FormAnimation(){
  gsap.from('.section6_form form p, .section6_form form input, .section6_form form textarea, .section6_form form button',{
    opacity:0,
    x:-200,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
      trigger:'.section6_form form',
      scroller:"body",
      start:"top 80%",
      end:"top 50%",
      scrub:5
    }
  })
}
function secAnimation(secName){
  gsap.from(secName,{
    y:150,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
      trigger:secName,
      scroller:"body",
      start:"top 100%",
      end:"top 60%",
      scrub:1,
    }
  })
}
function sec2AnimationX(elem,position){
  gsap.from(elem,{
    x:position,
    opacity:0,
    scrollTrigger:{
      trigger:elem,
      scroller:"body",
      start:"top 60%",
      end:"top 80%",
      scrub:2,
    }
  })
}
function sec2AnimationY(elem,position){
  gsap.from(elem,{
    y:position,
    opacity:0,
    scrollTrigger:{
      trigger:elem,
      scroller:"body",
      start:"top 85%",
      end:"top 80%",
      scrub:2,
    }
  })
}

sec1Animation()
sec2Animation()
sec3subAnimation()
sec6FormAnimation()
secAnimation('.section3')
secAnimation('.section4')
secAnimation('.section5')
secAnimation('.section6')
sec2AnimationX('.section4_sub_1',-200)
sec2AnimationX('.section4_sub_2',200)
sec2AnimationX('.section4_sub_3',-200)
sec2AnimationX('.section4_sub_4',200)
sec2AnimationX('.section5_sub_1',-200)
sec2AnimationX('.section5_sub_3',200)
sec2AnimationY('.section5_sub_2',150)