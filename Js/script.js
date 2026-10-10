const inputBusca = document.getElementById('busca-input');
const cards = document.querySelectorAll('#cards .card');
const semResultados = document.getElementById('sem-resultados');

function filtrarCards() {
    const termo = inputBusca.value.trim().toLowerCase();
    let visiveis = 0;

    cards.forEach((card) => {
        const corresponde = card.textContent.toLowerCase().includes(termo);
        card.hidden = !corresponde;
        if (corresponde) visiveis++;
    });

    if (semResultados) {
        semResultados.hidden = visiveis > 0;
    }
}

if (inputBusca) {
    inputBusca.addEventListener('input', filtrarCards);
    inputBusca.addEventListener('search', filtrarCards);
}