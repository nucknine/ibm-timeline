window.onload = () => {
    let btn = document.getElementById('js-timeline-btn'),
        footer = document.getElementById('js-timeline-footer'),
        container = document.getElementById('js-timeline-container');

    container.style.height = window.innerHeight - 100 + 'px';
    footer.style.height = 60 + 'vh';
    btn.style.bottom = 25 + '%';

    btn.addEventListener('click', () => {
        container.style.height = 'auto';
        footer.style.height = 7.5 + 'rem';
        btn.style.display = 'none';
    })
};