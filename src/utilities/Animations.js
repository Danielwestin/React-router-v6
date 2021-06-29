import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//start: "top center"
//FIRST: Den första top är toppen på elementet som ska animeras
//SECOND: Andra är var på din skärm, top, mitten, botten

//toggleActions: "play none none none" (default)
//i ordning betyder dem: onEnter onLeave onEnterBack onLeaveBack
//Atribute: play, pause, resume, reverse, restart, reset, complete, none

export function GlideIn() {
  gsap.to(".glide-text-left", {
    x: 300,
    duration: 2,
    scrollTrigger: {
      trigger: "glide-text-left",
      start: "top center",
    },
  });

  gsap.fromTo(
    ".glide-text-right",
    { autoAlpha: 0 },
    {
      x: 100,
      autoAlpha: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".glide-text-right",
        start: "center 80%",
        end: "center 20%",
        scrub: 1,
        // pin: ".pin-this",
        //   pinReparent: true,
        toggleActions: "play none none reverse",

        // markers: true,
        //   {
        //     startColor: "green",
        //     endColor: "red",
        //     fontSize: "2rem",
        //   },
      },
    }
  );
  gsap.fromTo(
    ".glide-text-left",
    { autoAlpha: 0 },
    {
      x: 150,
      autoAlpha: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".glide-text-right",
        start: "center 60%",
        end: "center 20%",
        scrub: 1,
        // pin: ".pin-this",
        //   pinReparent: true,
        toggleActions: "play none none reverse",

        // markers: true,
        //   {
        //     startColor: "green",
        //     endColor: "red",
        //     fontSize: "2rem",
        //   },
      },
    }
  );
}

export const FlyingPlane = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".plane",
      start: "top 50%",
      end: "top 10%",
      // markers: true,

      toggleActions: "play none none reverse",
    },
  });

  tl.to(".plane", {
    x: 200,
    y: 200,
    duration: 2,
    rotate: 360,
  });
  tl.to(
    ".plane",
    {
      x: 300,
      y: 400,
      duration: 2,
    },
    "-=1"
  );
  tl.to(".plane", {
    x: 2000,
    y: 50,
    rotate: 90,
    duration: 1,
  });
};

export function Grandma1Section() {
  gsap.fromTo(
    ".grid2-section__left",
    {
      x: -100,
      autoAlpha: 0,
    },
    {
      x: 0,
      duration: 1,
      autoAlpha: 1,
      scrollTrigger: {
        // markers: true,
        trigger: ".grid2-section__left",
        start: "40% 95%",
        end: "20% 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
        // pin: ".grid2-section",
        // pinReparent: true,
      },
    }
  );
  gsap.fromTo(
    ".grid2-section__right",
    {
      x: 100,
      autoAlpha: 0,
    },
    {
      x: 0,
      duration: 1,
      autoAlpha: 1,
      scrollTrigger: {
        // markers: true,
        trigger: ".grid2-section__right",
        start: "80% 95%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    }
  );
}
