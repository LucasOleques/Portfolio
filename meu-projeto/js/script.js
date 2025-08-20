document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('dark') ? '🌞' : '🌙';
    document.getElementById('theme-toggle').textContent = theme + ' Mudar tema';
});

// Definir tema inicial
document.body.classList.add('light');