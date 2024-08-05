window.onload = () => {
    // スクロールアニメーション
    ScrollReveal().reveal('.aboutme', {
        duration: 800,
        reset: false,
        distance: '20%',
        scale: 1,
        delay: 200,
        opacity: 0,
        origin: 'bottom',
    });

    ScrollReveal().reveal('.item', {
        delay: 200,
        duration: 400,
        origin: 'left',
        distance: '50px',
        interval: 20,
        reset: false,
    });

    ScrollReveal().reveal('.skill', {
        delay: 300,
        duration: 800,
        viewFactor: 0.2,
        origin: 'left',
        distance: '50px',
        interval: 30,
        reset: false,
    });

    ScrollReveal().reveal('#promotion', {
        delay: 300,
        duration: 800,
        viewFactor: 0.2,
        opacity: 0,
        reset: false,
    });
    ScrollReveal().reveal('#history', {
        delay: 200,
        duration: 800,
        viewFactor: 0.2,
        opacity: 0,
        reset: false,
    });
};