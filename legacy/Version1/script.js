const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // only handle links like #home, #skills, etc.
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1); // remove "#"

            // switch active section
            sections.forEach(sec => {
                if (sec.id === targetId) {
                    sec.classList.add('active-section');
                } else {
                    sec.classList.remove('active-section');
                }
            });

            // switch active nav link style
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});