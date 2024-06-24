gsap.registerPlugin(ScrollTrigger);

gsap.from(".Maximus", {
    opacity: 0, 
    y: 100, 
    duration: 0.5, 
    delay: 0.3,
    stagger: 0 
    });

gsap.from(".MFE", {
    opacity: 0, 
    y: 0, 
    duration: 1, 
    delay: 0.8,
    stagger: 0 
    });

gsap.from(".heronaglowek", {
    opacity: 0, 
    y: 0, 
    duration: 4, 
    delay: 1.5,
    stagger: 0 
    });

gsap.from(".heroopis", {
    opacity: 0, 
    y: 0, 
    duration: 4, 
    delay: 1.5,
    stagger: 0 
    });

gsap.from(".auto", {
    scrollTrigger: {
    trigger: ".auto", 
    start:"top 80%",
    end:"top 10%",
    scrub: true,
    },
    opacity: 100, 
    x: -1500, 
    y: -200,
    durration: 5, 
    stagger: 1 
    });

gsap.from(".naglowek1", {
scrollTrigger: {
trigger: ".naglowek1", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 50, 
durration: 5, 
stagger: 1 
});

gsap.from(".naglowek2", {
scrollTrigger: {
trigger: ".naglowek2", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 50, 
durration: 5, 
stagger: 1 
});

gsap.from(".naglowek3", {
scrollTrigger: {
trigger: ".naglowek3", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 50, 
durration: 5, 
stagger: 1 
});

gsap.from(".naglowek4", {
scrollTrigger: {
trigger: ".naglowek4", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 50, 
durration: 5, 
stagger: 1 
});


gsap.from(".opis1", {
scrollTrigger: {
trigger: ".opis1", 
start:"top 50%",
end:"top 10%",
},
opacity: 0, 
y: 10, 
durration: 5, 
stagger: 1 
});

gsap.from(".opis2", {
scrollTrigger: {
trigger: ".opis2", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 10, 
durration: 5, 
stagger: 1 
});

gsap.from(".opis3", {
scrollTrigger: {
trigger: ".opis3", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 10, 
durration: 5, 
stagger: 1 
});

gsap.from(".opis4", {
scrollTrigger: {
trigger: ".opis4", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 10, 
durration: 5, 
stagger: 1 
});

gsap.from(".foto1", {
scrollTrigger: {
trigger: ".foto1", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
y: 0, 
durration: 5, 
stagger: 1 
});

gsap.from(".foto2", {
scrollTrigger: {
trigger: ".foto2", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
x: -50, 
durration: 5, 
stagger: 1 
});

gsap.from(".foto3", {
scrollTrigger: {
trigger: ".foto3", 
start:"top 50%",
end:"top 30%",
},
opacity: 0, 
x: 50, 
durration: 5, 
stagger: 1 
});


