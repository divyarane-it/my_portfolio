/* =====================================================
   DIVYA RANE PORTFOLIO — JAVASCRIPT
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

const navItems =
    document.querySelectorAll(".nav-links a");

const sections =
    document.querySelectorAll("section[id]");

const topBtn =
    document.getElementById("topBtn");


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon =
        menuBtn.querySelector("i");


    if(
        navLinks.classList.contains("open")
    ){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

        menuBtn.setAttribute(
            "aria-label",
            "Close menu"
        );

    }else{

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    }

});


/* ================= CLOSE MOBILE MENU ================= */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});


/* ================= ACTIVE NAV LINK ================= */

window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 140;

        const sectionHeight =
            section.offsetHeight;


        if(
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ){

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");


        if(
            link.getAttribute("href") ===
            "#" + currentSection
        ){

            link.classList.add("active");

        }

    });


    /* BACK TO TOP */

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});


/* ================= BACK TO TOP ================= */

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if(
                    entry.isIntersecting
                ){

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold:0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= HERO FLOATING EFFECT ================= */

const floatingTech =
    document.querySelectorAll(
        ".floating-tech"
    );


floatingTech.forEach(
    (item,index) => {

        let direction =
            index % 2 === 0
                ? 1
                : -1;


        setInterval(() => {

            item.style.transform =
                `translateY(${direction * 6}px)
                 rotate(${direction * 2}deg)`;


            direction *= -1;

        },1600 + index * 120);

    }
);