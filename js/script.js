// ── SCROLL REVEAL ──

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });

}, { threshold: 0.08 });

document.querySelectorAll('.fu').forEach((el) => {
    observer.observe(el);
});

// ── TYPEWRITER ──

const roles = [
    'CS student · developer · homelab operator',
    'Python · Java · Linux · Docker',
    'building towards cybersecurity',
    'Frostbyte // Qatar University 2028'
];

const el = document.getElementById('alias');

const PROMPT = '<span class="prompt">~$</span> whoami → ';

let ri = 0;
let ci = 0;
let erasing = false;

function tick() {
    const word = roles[ri];

    if (!erasing) {
        // ── TYPING MODE ──
        ci++;
        el.innerHTML = PROMPT + word.slice(0, ci);

        if (ci >= word.length) {
            erasing = true;
            setTimeout(tick, 2200);
            return;
        }

        setTimeout(tick, 42);

    } else {
        // ── ERASING MODE ──
        ci--;
        el.innerHTML = PROMPT + word.slice(0, ci);

        if (ci <= 0) {
            erasing = false;
            ri = (ri + 1) % roles.length;
            setTimeout(tick, 350);
            return;
        }

        setTimeout(tick, 20);
    }
}

setTimeout(tick, 1600);