// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// home page
sr.reveal('.content', { delay: 50, origin: 'top' });

// about page
sr.reveal('.About-heading', { delay: 50, origin: 'left' });
sr.reveal('.About-info-box', { delay: 50, origin: 'right' });
sr.reveal('hr', { delay: 50, origin: 'right' });

// community page
sr.reveal('.community-heading', { delay: 50, origin: 'top' });
sr.reveal('.community-sub-heading', { delay: 50, origin: 'top' });
sr.reveal('.community-boxes', { delay: 50, origin: 'bottom' });