const bodyClass = document.body.classList;
document.querySelector('.sun-button').addEventListener('click', () => {
    if (bodyClass[0] === 'moon-theme') {
        bodyClass.remove('moon-theme');
    }
    document.body.classList.add('sun-theme');
});
document.querySelector('.moon-button').addEventListener('click', () => {
    if (bodyClass[0] === 'sun-theme') {
        bodyClass.remove('sun-theme');
    }
    document.body.classList.toggle('moon-theme');
});
