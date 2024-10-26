document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    document.body.classList.toggle('day-mode');

    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('night-mode');
        card.classList.toggle('day-mode');
    });

    if (document.body.classList.contains('night-mode')) {
        this.textContent = 'Switch to Day Mode';
    } else {
        this.textContent = 'Switch to Night Mode';
    }
});
