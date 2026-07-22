/* =====================================================
   PORTFOLIO PREMIUM
   PART 1
   ================================================
   - Loader
   - AOS
   - Typed.js
   - Dark Mode
   - Smooth Scroll
   - Back To Top
   - Active Navbar
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOADER
    ========================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    });

    /* =========================================
       AOS
    ========================================= */

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,

            once: true,

            offset: 120

        });

    }

    /* =========================================
       TYPED JS
    ========================================= */

    if (typeof Typed !== "undefined") {

        new Typed("#typing", {

            strings: [

                "Saya Soraya Aldina",

                "Leader Student",

                "High Achiever",

                "Hafizah Al-Qur'an"

            ],

            typeSpeed: 70,

            backSpeed: 45,

            backDelay: 1800,

            loop: true

        });

    }

    /* =========================================
       DARK MODE
    ========================================= */

    const darkButton = document.getElementById("darkMode");

    const body = document.body;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light");

        darkButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    darkButton.addEventListener("click", () => {

        body.classList.toggle("light");

        if (body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            darkButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            darkButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const menu = document.querySelectorAll("nav a");

    menu.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   ACTIVE NAVBAR
========================================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================================
   PORTFOLIO PREMIUM
   PART 2
   ================================================
   - Particles.js
   - Counter Animation
   - Skill Animation
   - Reveal Animation
=====================================================*/


/* =========================================
    PARTICLES JS
========================================= */

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {

                value: 70,

                density: {

                    enable: true,

                    value_area: 800

                }

            },

            color: {

                value: "#38bdf8"

            },

            shape: {

                type: "circle"

            },

            opacity: {

                value: 0.5

            },

            size: {

                value: 3,

                random: true

            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#38bdf8",

                opacity: 0.3,

                width: 1

            },

            move: {

                enable: true,

                speed: 2,

                direction: "none",

                random: false,

                straight: false,

                out_mode: "out"

            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {

                    enable: true,

                    mode: "grab"

                },

                onclick: {

                    enable: true,

                    mode: "push"

                }

            },

            modes: {

                grab: {

                    distance: 180,

                    line_linked: {

                        opacity: 0.8

                    }

                },

                push: {

                    particles_nb: 4

                }

            }

        },

        retina_detect: true

    });

}


/* =========================================
      COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter-number");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================
      SKILL PROGRESS
========================================= */

const progressBars = document.querySelectorAll(".progress");

const progressObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const bar = entry.target;

        const width = bar.classList.contains("html") ? "95%" :

            bar.classList.contains("css") ? "92%" :

            bar.classList.contains("js") ? "88%" :

            bar.classList.contains("react") ? "80%" : "75%";

        bar.style.width = width;

        progressObserver.unobserve(bar);

    });

}, {

    threshold: 0.4

});

progressBars.forEach(bar => {

    bar.style.width = "0";

    progressObserver.observe(bar);

});


/* =========================================
      REVEAL ANIMATION
========================================= */

const reveals = document.querySelectorAll(

    ".about-content, .timeline-item, .skill, .card, .testimonial, form"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(item => {

    item.classList.add("reveal");

    revealObserver.observe(item);

});

/* =====================================================
   PORTFOLIO PREMIUM
   PART 3
   ================================================
   - GSAP Animation
   - Header Glass Effect
   - Hero Parallax
   - Card Hover
   - Contact Validation
   - Ripple Button
   - Scroll Progress
=====================================================*/


/* =========================================
        GSAP
========================================= */

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    /* HERO */

    gsap.from(".hero-content", {

        x: -120,

        opacity: 0,

        duration: 1.2,

        ease: "power4.out"

    });

    gsap.from(".hero-image", {

        x: 120,

        opacity: 0,

        duration: 1.2,

        ease: "power4.out"

    });

}


/* =========================================
      SECTION ANIMATION
========================================= */

if (typeof gsap !== "undefined") {

    gsap.utils.toArray("section").forEach(section => {

        gsap.from(section.children, {

            scrollTrigger: {

                trigger: section,

                start: "top 80%"

            },

            opacity: 0,

            y: 60,

            duration: 1,

            stagger: 0.15,

            ease: "power3.out"

        });

    });

}


/* =========================================
      PARALLAX HERO
========================================= */

if (typeof gsap !== "undefined") {

    gsap.to(".hero-image", {

        y: 120,

        ease: "none",

        scrollTrigger: {

            trigger: ".hero",

            start: "top top",

            end: "bottom top",

            scrub: true

        }

    });

}


/* =========================================
      HEADER EFFECT
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
      CARD HOVER
========================================= */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        if (typeof gsap !== "undefined") {

            gsap.to(card, {

                y: -12,

                scale: 1.02,

                duration: .3

            });

        }

    });

    card.addEventListener("mouseleave", () => {

        if (typeof gsap !== "undefined") {

            gsap.to(card, {

                y: 0,

                scale: 1,

                duration: .3

            });

        }

    });

});


/* =========================================
      CONTACT VALIDATION
========================================= */

/* =========================================
      CONTACT FORM - WHATSAPP
========================================= */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const nama = this.querySelector("input[type='text']").value.trim();
        const email = this.querySelector("input[type='email']").value.trim();
        const pesan = this.querySelector("textarea").value.trim();

        // Cek data kosong
        if (nama === "" || email === "" || pesan === "") {

            alert("Silakan lengkapi semua data.");

            return;

        }

        // Cek format email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {

            alert("Format email tidak valid.");

            return;

        }

        // Nomor WhatsApp tujuan
        const nomorWhatsApp = "6281420519171";

        // Isi pesan
        const text = `Halo, saya ${nama}.

Email: ${email}

Pesan:
${pesan}`;

        // Membuat link WhatsApp
        const url =
            `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(text)}`;

        // Membuka WhatsApp
        window.open(url, "_blank");

        // Mengosongkan form
        this.reset();

    });

}


/* =========================================
      RIPPLE BUTTON
========================================= */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";

        ripple.style.top=e.clientY-rect.top+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/* =========================================
      SCROLL PROGRESS BAR
========================================= */

const progressBar=document.createElement("div");

progressBar.id="scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const totalHeight=

        document.documentElement.scrollHeight-

        window.innerHeight;

    const progress=

        (window.scrollY/totalHeight)*100;

    progressBar.style.width=progress+"%";

});