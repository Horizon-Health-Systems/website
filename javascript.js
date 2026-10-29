  window.addEventListener('scroll', () => {
            const wrapper = document.querySelector('.contact-wrapper');
            const sectionPos = wrapper.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if(sectionPos < screenPos) {
                wrapper.classList.add('reveal');
            }
        });