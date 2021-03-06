const bodyClass = document.body.classList;

// Sun Button Event Listener
document.querySelector('.sun-button').addEventListener('click', () => {
    switch (bodyClass[0]) {
        case 'moon-theme':
            bodyClass.remove('moon-theme');
            break;
        case 'ocean-theme':
            bodyClass.remove('ocean-theme');
            break;
        case 'twitter-theme':
            bodyClass.remove('twitter-theme');
            break;
        case 'twitch-theme':
            bodyClass.remove('twitch-theme');
            break;
        case 'reddit-theme':
            bodyClass.remove('reddit-theme');
            break;
        default:
            break;
    }
    document.body.classList.add('sun-theme');
});

// Moon Button Event Listener
document.querySelector('.moon-button').addEventListener('click', () => {
    switch (bodyClass[0]) {
        case 'sun-theme':
            bodyClass.remove('sun-theme');
            break;
        case 'ocean-theme':
            bodyClass.remove('ocean-theme');
            break;
        case 'twitter-theme':
            bodyClass.remove('twitter-theme');
            break;
        case 'twitch-theme':
            bodyClass.remove('twitch-theme');
            break;
        case 'reddit-theme':
            bodyClass.remove('reddit-theme');
            break;
        default:
            break;
    }
    document.body.classList.add('moon-theme');
});

// Ocean Button Event Listener
document.querySelector('.ocean-button').addEventListener('click', () => {
    switch (bodyClass[0]) {
        case 'sun-theme':
            bodyClass.remove('sun-theme');
            break;
        case 'moon-theme':
            bodyClass.remove('moon-theme');
            break;
        case 'twitter-theme':
            bodyClass.remove('twitter-theme');
            break;
        case 'twitch-theme':
            bodyClass.remove('twitch-theme');
            break;
        case 'reddit-theme':
            bodyClass.remove('reddit-theme');
            break;
        default:
            break;
    }
    document.body.classList.add('ocean-theme');
});

// Twitter Button Event Listener
document.querySelector('.twitter-button').addEventListener('click', () => {
    switch (bodyClass[0]) {
        case 'sun-theme':
            bodyClass.remove('sun-theme');
            break;
        case 'moon-theme':
            bodyClass.remove('moon-theme');
            break;
        case 'ocean-theme':
            bodyClass.remove('ocean-theme');
            break;
        case 'twitch-theme':
            bodyClass.remove('twitch-theme');
            break;
        case 'reddit-theme':
            bodyClass.remove('reddit-theme');
            break;
        default:
            break;
    }
    document.body.classList.add('twitter-theme');
});

// Twitch Button Event Listener
document.querySelector('.twitch-button').addEventListener('click', () => {
    switch (bodyClass[0]) {
        case 'sun-theme':
            bodyClass.remove('sun-theme');
            break;
        case 'moon-theme':
            bodyClass.remove('moon-theme');
            break;
        case 'ocean-theme':
            bodyClass.remove('ocean-theme');
            break;
        case 'twitter-theme':
            bodyClass.remove('twitter-theme');
            break;
        case 'reddit-theme':
            bodyClass.remove('reddit-theme');
            break;
        default:
            break;
    }
    document.body.classList.add('twitch-theme');
});

document.querySelector('.reddit-button').addEventListener('click', () => {
    switch (bodyClass[0]) {
        case 'sun-theme':
            bodyClass.remove('sun-theme');
            break;
        case 'moon-theme':
            bodyClass.remove('moon-theme');
            break;
        case 'ocean-theme':
            bodyClass.remove('ocean-theme');
            break;
        case 'twitter-theme':
            bodyClass.remove('twitter-theme');
            break;
        case 'twitch-theme':
            bodyClass.remove('twitch-theme');
            break;
        default:
            break;
    }
    document.body.classList.add('reddit-theme');
});
