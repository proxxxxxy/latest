document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
        element.classList.remove('hidden');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
        element.classList.add('hidden');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // 初期ロード時にスクロール位置に応じて表示
    handleScrollAnimation();
    
    const createFuzzy = () => {
        const fuzzy = document.createElement('div');
        fuzzy.className = 'fuzzy';

        const size = Math.random() * 40 + 20;
        fuzzy.style.width = `${size}px`;
        fuzzy.style.height = `${size}px`;

        const color = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.4})`;
        fuzzy.style.background = color;

        fuzzy.style.left = `${Math.random() * 100}%`;
        fuzzy.style.animationDuration = `${Math.random() * 3 + 4}s`;

        document.body.appendChild(fuzzy);

        setTimeout(() => {
            fuzzy.remove();
        }, 7000);
    };

    setInterval(createFuzzy, 500);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

        const formulas = document.querySelectorAll('.formula');
        formulas.forEach((formula) => {
            const rect = formula.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0 && !formula.classList.contains('typewriter')) {
                formula.classList.add('typewriter');
            }
        });

        const images = document.querySelectorAll('.scroll-reveal');
        images.forEach((image) => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    image.classList.add('visible');
                    image.classList.remove('hidden');
                }, 1000);
            } else {
                image.classList.add('hidden');
                image.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
