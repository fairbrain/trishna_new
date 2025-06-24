document.addEventListener("DOMContentLoaded", (event) => {
    window.scrollTo(0, 0);
    var t = gsap.timeline()
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    const sections = document.querySelectorAll("section");

    gsap.registerPlugin(SplitText);


    t.from(".packet-1", {
        y: -1000,
        duration: 0.3,
    })

    t.from(".packet-2", {
        x: -1000,
        duration: 0.3,
    })

    t.from(".packet-4", {
        x: 1000,
        duration: 0.3,
    })

    t.from(".packet-3", {
        x: -1000,
        duration: 0.3,
    })

    t.from(".packet-5", {
        x: 1000,
        duration: 0.3,
    })

    t.from(".logo-img", {
        y: 500,
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back.out"
    })

    t.to(".packet-1", {
        left: "10%",
        y: 200,
        duration: 1,
        delay: 1,
        ease: "back.out",
        scale: 1,
        rotate: "40deg",
        filter: "blur(4px)",
        onComplete: () => {
            gsap.to(".packet-1", {
                scale: 0.95,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })

        }

    }, "<")
    t.to(".packet-3", {
        left: "7%",
        duration: 1,
        ease: "back.out",
        scale: 0.7,
        rotate: "-10deg",
        filter: "blur(4px)",
        top: "50%",
        onComplete: () => {
            gsap.to(".packet-3", {
                scale: 0.65,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }
    }, "<")

    t.to(".packet-4", {
        x: screenWidth / 3,
        y: 150,
        duration: 1,
        ease: "back.out",
        scale: 1,
        rotate: "-40deg",
        filter: "blur(4px)",
        onComplete: () => {
            gsap.to(".packet-4", {
                scale: 0.95,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }
    }, "<")

    t.to(".packet-5", {
        x: screenWidth / 3,
        duration: 1,
        ease: "back.out",
        scale: 0.7,
        rotate: "10deg",
        filter: "blur(4px)",
        top: "50%",
        onComplete: () => {
            gsap.to(".packet-5", {
                scale: 0.65,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }

    }, "<")

    t.to(".packet-2", {
        left: "50%",
        top: "100%",
        duration: 1,
        ease: "back.out",
        scale: 0.7,
        filter: "blur(4px)",
        onComplete: () => {
            gsap.to(".packet-2", {
                scale: 0.65,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }

    }, "<")
    t.to(".packet-6", {
        opacity: 1,
        left: "18%",
        top: "18%",
        duration: 1,
        ease: "back.out",
        scale: 0.3,
        filter: "blur(6px)",
        rotate: "30deg",
        onComplete: () => {
            gsap.to(".packet-6", {
                scale: 0.32,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }

    }, "<")
    t.to(".packet-7", {
        opacity: 1,
        x: "50%",
        top: "18%",
        duration: 1,
        ease: "back.out",
        scale: 0.3,
        filter: "blur(6px)",
        rotate: "-30deg",
        onComplete: () => {
            gsap.to(".packet-7", {
                scale: 0.32,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }

    }, "<")


    t.to("header", {
        display: "block",
        y: 20,
        ease: "back.out",
        delay: 1
    }, "<")

    t.to(".logo-img", {
        y: -((screenHeight / 2) - 250),
        opacity: 0,
        scale: 0.5
    })

    t.to(".header_logo", {
        opacity: 1,
        scale: 1,
        ease: "back.out"
    })

    t.to(".hero-container", {
        borderRadius: "60px 60px 0 0",

    }, "<")

    t.to(".hero-container-section", {
        padding: "15px 15px 0 15px"
    })



    const h1Split = new SplitText(".hero-content h1", { type: "chars,words" });
    const h2Split = new SplitText(".hero-content h2", { type: "chars,words" });

    // Animate the characters
    t.from(h1Split.chars, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.05,
        ease: "back.out"
    });

    t.from(h2Split.chars, {
        opacity: 0,
        y: 30,
        // duration: 1,
        stagger: 0.05,
        ease: "power2.out",
        onComplete: () => {
            sections.forEach(element => {
                element.classList.remove("hidden");
            });
        }
    }, "<");


    // card
    let m = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-us-main", // element that triggers the animation
            start: "top 50%",           // when the top of trigger hits 80% of viewport
            toggleActions: "play none none none", // play on enter only
            markers: false              // set to true if you want to see debug markers
        }
    });


    m.from(".card", {
        opacity: 0,
        stagger: 0.5,
        y: -50,
        ease: "back.out",
    })


    let w = gsap.timeline({
        scrollTrigger: {
            trigger: ".our_product_main_section", // element that triggers the animation
            start: "top 80%",           // when the top of trigger hits 80% of viewport
            toggleActions: "play none none none", // play on enter only
            markers: false              // set to true if you want to see debug markers
        }
    });


    w.from(".basket-heading", {
        scale: 0,
        stagger: 0.5
    })

    w.from(".basket-img", {
        opacity: 0,
        y: -70,
        duration: 1,
        stagger: 0.5,
        ease: "back.out"

    }, "<")



    let f = gsap.timeline({
        scrollTrigger: {
            trigger: ".choose_us", // element that triggers the animation
            start: "top 70%",           // when the top of trigger hits 80% of viewport
            toggleActions: "play none none none", // play on enter only
            markers: false              // set to true if you want to see debug markers
        }
    });

    f.from(".choose_us_left img", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "back.out",
        onComplete: () => {
            gsap.to(".choose_us_pac1", {
                scale: 0.95,
                repeat: -1,
                yoyo: true,
                duration: 1.04
            })
        }
    })
    f.from(".choose_us_heading", {
        opacity: 0,
        y: -30
    }, "<")
    f.from(".list-1", {
        opacity: 0,
        y: -30
    })
    f.from(".list-2", {
        opacity: 0,
        y: -30
    })
    f.from(".list-3", {
        opacity: 0,
        y: -30
    })
    f.from(".list-4", {
        opacity: 0,
        y: -30
    })
    f.from(".list-5", {
        opacity: 0,
        y: -30
    })
    f.from(".list-6", {
        opacity: 0,
        y: -30
    })
});




// gsap.registerPlugin(SplitText);


