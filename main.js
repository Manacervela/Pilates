const sr = ScrollReveal();

const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container 

sr.reveal(".header__container h1", {
    ...scrollRevealOptions,
    delay: 500,
});

sr.reveal(".header__container h2", {
    ...scrollRevealOptions,
    delay: 1000,
});

sr.reveal(".header__container .btn", {
    ...scrollRevealOptions,
    delay: 1500,
});

sr.reveal(".header__container img", {
    ...scrollRevealOptions,
    origin: "right",
});

// why container 

ScrollReveal().reveal(".why__container .section__header", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".why__container p", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".why__container li", {
    ...scrollRevealOptions,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".why__container img", {
    ...scrollRevealOptions,
    origin: "left",
});

// hero container

ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOptions,
    interval: 500,
});

//classes container 

ScrollReveal().reveal(".classes__image", {
    duration: 1000,
    interval: 500,
});

//membership container 
ScrollReveal().reveal(".membership__card", {
    ...scrollRevealOptions,
    interval: 500,
});

// stories container 
ScrollReveal().reveal(".stories__card", {
    ...scrollRevealOptions,
    interval: 500,
});

// posts
ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOptions,
    interval: 500,
});