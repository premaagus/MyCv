// PARTICLE
particlesJS('particles-js',
{
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
}
);

gsap.from('#bio-title', 0.5, {
    scrollTrigger: {
        trigger: '.bio',
        start: 'top center',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut
    
})
gsap.from('.bio-pict', 1, {
    scrollTrigger: {
        trigger: '.bio',
        start: 'top center',
    },
    opacity: 0,
    height: 0,
    ease : Power2.easeInOut,
    delay: 0.2
    
})
gsap.from('.bio-wrap', 1, {
    scrollTrigger: {
        trigger: '.bio',
        start: 'top center',
    },
    opacity: 0,
    y: 30,
    ease : Power2.easeInOut,
    delay: 0.4
    
})

gsap.from('#skills', 1, {
    scrollTrigger: {
        trigger: '.bio',
        start: 'top center',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut,
    delay: 0.6
    
})

gsap.from('.skill-list', 1, {
    scrollTrigger: {
        trigger: '.bio',
        start: 'top center',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut,
    delay: 0.8
    
})

gsap.from('.progress-percent', 1, {
    scrollTrigger: {
        trigger: '.bio',
        start: 'top center',
    },
    width: "0%",
    ease : Power2.easeInOut,
    delay: 1.5
    
})


gsap.from('.service-title', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: 'top center',
    },
    opacity: 0,
    y: 30,
    ease : Power2.easeInOut,
    delay: 0
})

gsap.from('#service-title1', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: 'top center',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut,
    delay: 0.2
})

gsap.from('#service-text1', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: 'top center',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut,
    delay: 0.6
})
gsap.from('#service-img1', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: 'top center',
    },
    opacity: 0,
    scale: 0,
    ease : Power2.easeInOut,
    delay: 0.6
})

gsap.from('#service-title2', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: '50% bottom',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut,
    delay: 0.8
})

gsap.from('#service-text2', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: '50% bottom',
    },
    opacity: 0,
    x: 30,
    ease : Power2.easeInOut,
    delay: 1
})
gsap.from('#service-img2', 1, {
    scrollTrigger: {
        trigger: '#service',
        start: '50% bottom',
    },
    opacity: 0,
    scale: 0,
    ease : Power2.easeInOut,
    delay: 1.2
})

gsap.from('.overlay-portfolio', 1, {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
    },
    opacity: 0,
    width: 0,
    ease : Power2.easeInOut,
})

gsap.from('.port-anim1', 1, {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
    },
    opacity: 0,
    height: 0,
    ease : Power2.easeInOut,
    delay: 0.5
})

gsap.from('.port-anim2', 1, {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
    },
    height: 0,
    ease : Power2.easeInOut,
    delay: 0.7
})
gsap.from('.port-anim3', 1, {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
    },
    height: 0,
    ease : Power2.easeInOut,
    delay: 1
})
gsap.from('.port-anim4', 1, {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
    },
    height: 0,
    ease : Power2.easeInOut,
    delay: 1.2
})
gsap.from('.port-anim5', 1, {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top center',
    },
    height: 0,
    ease : Power2.easeInOut,
    delay: 1.4
})

gsap.from('.port1-anim1', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    height: 0,
    ease : Power2.easeInOut,
    delay: 0
})

gsap.from('.port1-anim2', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.2
})

gsap.from('.port1-anim3', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.4
})

gsap.from('.port1-anim4', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.6
})

gsap.from('.port1-anim5', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    width: 100,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.8
})

gsap.from('.port1-anim6', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 1
})

gsap.from('.port1-anim7', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 1
})

gsap.from('.port1-anim8', 1, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 1.2
})

gsap.from('.port1-anim9', 0.5, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 1.4
})

gsap.from('.port1-anim10', 0.5, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 1.6
})

gsap.from('.port1-anim11', 0.5, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 1.8
})

gsap.from('.port1-anim12', 0.5, {
    scrollTrigger: {
        trigger: '#portofolio',
        start: 'top center',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 2
})

gsap.from('.testi-anim1', 0.5, {
    scrollTrigger: {
        trigger: '.bg-testimoni',
        start: 'top center',
    },
    y: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0
})

gsap.from('.testi-anim2', 1, {
    scrollTrigger: {
        trigger: '.bg-testimoni',
        start: 'top center',
    },
    scale: 0,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.2
})

gsap.from('.testi-anim3', 1, {
    scrollTrigger: {
        trigger: '.bg-testimoni',
        start: 'top center',
    },
    scale: 0,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.4
})

gsap.from('.testi-anim4', 1, {
    scrollTrigger: {
        trigger: '.bg-testimoni',
        start: 'top center',
    },
    scale: 0,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.6
})

gsap.from('.contact-anim1', 1, {
    scrollTrigger: {
        trigger: '#contact-us',
        start: 'top bottom',
    },
    y: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0
})

gsap.from('.contact-anim2', 1, {
    scrollTrigger: {
        trigger: '#contact-us',
        start: 'top bottom',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.2
})
gsap.from('.contact-anim3', 1, {
    scrollTrigger: {
        trigger: '#contact-us',
        start: 'top bottom',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.4
})
gsap.from('.contact-anim4', 1, {
    scrollTrigger: {
        trigger: '#contact-us',
        start: 'top bottom',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.6
})

gsap.from('.contact-anim5', 1, {
    scrollTrigger: {
        trigger: '#contact-us',
        start: 'top bottom',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.8
})

gsap.from('.hero-anim1', 1, {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0
})

gsap.from('.hero-anim2', 1, {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
    },
    x: 30,
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.2
})

gsap.from('.hero-anim3', 1, {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
    },
    opacity: 0,
    ease : Power2.easeInOut,
    delay: 0.5
})




