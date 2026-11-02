  window.addEventListener('scroll', () => {
            const wrapper = document.querySelector('.contact-wrapper');
            const sectionPos = wrapper.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if(sectionPos < screenPos) {
                wrapper.classList.add('reveal');
            }
        });

<script>
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#main-navigation");

    if (!menuToggle || !navigation) return;

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("menu-open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

});
</script>
