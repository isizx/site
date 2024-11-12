function expandCard(card){
	card.style.transform ='scale(1.05)'
	card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)'
}

function shinkCard(card){
	card.style.transform ='scale(1)'
	card.style.boxShadow = 'none'
}

const frases = [
    "Pintura no parque com amigos",
    "Noite de filmes temática",
    "Visitar cafeteria antiga",
    "Visitar feira local",
    "Caminhar a noite pela cidade",
    "Tour por museus ou galerias locais",
    "Sair para observar as estrelas",
    "Passeio fotografico pela cidade",
    "Almoço/Jantar de culinária internacional",
    "Trilha com a família",
    "Piquenique na praia"
];

document.getElementById("sorteioButton").addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indiceAleatorio];
    document.getElementById("frase").textContent = fraseSorteada;
});

