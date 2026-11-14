 <script>

/* ================================================
   HORIZON HEALTH SYSTEMS
   HOMEPAGE INTERACTIVE JAVASCRIPT
================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // 1. MOBILE NAVIGATION
    // =============================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#main-navigation");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("menu-open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close mobile menu after clicking a link
        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("menu-open");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    // =============================================
    // 2. HERO IMAGE ANIMATION
    // =============================================

    const heroImage = document.querySelector(".hero-image");
    const heroContainer = document.querySelector(".hero-image-container");

    if (heroImage && heroContainer) {

        // Floating animation
        heroImage.animate(
            [
                {
                    transform: "translateY(0px)"
                },
                {
                    transform: "translateY(-12px)"
                },
                {
                    transform: "translateY(0px)"
                }
            ],
            {
                duration: 4000,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );

        // Interactive 3D mouse movement
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

            heroContainer.addEventListener("mousemove", event => {

                const rect = heroContainer.getBoundingClientRect();

                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;

                const rotateY = (x - 0.5) * 10;
                const rotateX = (0.5 - y) * 10;

                heroImage.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;

            });

            heroContainer.addEventListener("mouseleave", () => {

                heroImage.style.transform = "";

            });

        }

    }


    // =============================================
    // 3. SCROLL REVEAL ANIMATION
    // =============================================

    const revealElements = document.querySelectorAll(
        ".hero-content, .section-header, .feature-card, " +
        ".trust-header, .metric-card, .testimonial-card, .footer-brand, .footer-column"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("hhs-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {

            element.classList.add("hhs-reveal");
            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("hhs-visible");
        });

    }


    // =============================================
    // 4. FEATURE CARD INTERACTION
    // =============================================

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach((card, index) => {

        card.style.setProperty(
            "--card-delay",
            `${(index % 3) * 120}ms`
        );

        card.addEventListener("mouseenter", () => {

            card.classList.add("feature-hover");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("feature-hover");

        });

    });


    // =============================================
    // 5. ANIMATED TRUST STATISTICS
    // =============================================

    const metricNumbers = document.querySelectorAll(".metric-card h3");

    function animateCounter(element) {

        if (element.dataset.animated === "true") return;

        element.dataset.animated = "true";

        const originalText = element.textContent.trim();

        const number = parseFloat(
            originalText.replace(/[^0-9.]/g, "")
        );

        const suffix = originalText.replace(/[0-9.]/g, "");

        if (isNaN(number)) return;

        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            // Smooth ease-out animation
            const eased = 1 - Math.pow(1 - progress, 4);

            const currentNumber = number * eased;

            element.textContent =
                (number % 1 !== 0
                    ? currentNumber.toFixed(1)
                    : Math.floor(currentNumber)) + suffix;

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                element.textContent = originalText;

            }

        }

        requestAnimationFrame(updateCounter);

    }

    if ("IntersectionObserver" in window) {

        const counterObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(entry.target);
                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        metricNumbers.forEach(number => {
            counterObserver.observe(number);
        });

    }


    // =============================================
    // 6. SMOOTH SCROLLING
    // =============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetID = anchor.getAttribute("href");

            if (!targetID || targetID === "#") return;

            const target = document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // =============================================
    // 7. ACTIVE NAVIGATION LINK
    // =============================================

    navLinks.forEach(link => {

        const currentPage = window.location.pathname.split("/").pop();
        const linkPage = link.getAttribute("href").split("/").pop();

        if (currentPage === linkPage) {

            link.classList.add("clicked-blue");

        }

    });


    // =============================================
    // 8. HERO BUTTON INTERACTION
    // =============================================

    const heroButtons = document.querySelectorAll(".hero-buttons .btn");

    heroButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.classList.add("btn-interactive");
        });

        button.addEventListener("mouseleave", () => {
            button.classList.remove("btn-interactive");
        });

    });


    // =============================================
    // 9. FOOTER YEAR
    // =============================================

    const footerBottom = document.querySelector(".footer-bottom");

    if (footerBottom) {

        footerBottom.innerHTML =
            footerBottom.innerHTML.replace(
                /©\s*\d{4}/,
                `© ${new Date().getFullYear()}`
            );

    }


    // =============================================
    // 10. PAGE LOADED
    // =============================================

    document.body.classList.add("hhs-page-loaded");

});

</script>
