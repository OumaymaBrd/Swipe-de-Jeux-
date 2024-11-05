let likes = 0;
let dislikes = 0;
const cardStack = document.getElementById('cardStack');
const controls = document.getElementById('controls');
const likedCardsContainer = document.getElementById('likedCardsContainer');
const likedCards = document.getElementById('likedCards');



// Stack cards after initial delay
setTimeout(() => {
    cardStack.classList.add('stacked');
}, 1000);

function handleSwipe(direction) {
    const topCard = cardStack.children[0];
    if (!topCard) return;

    // Animate card off screen
    topCard.style.transition = 'all 0.5s ease';
    topCard.style.opacity = '0';
    topCard.style.transform = `translateX(${direction === 'right' ? '200%' : '-200%'}) rotate(${direction === 'right' ? '20deg' : '-20deg'})`;

    // Update counters
    if (direction === 'right') {
        likes++;
        document.getElementById('likes').textContent = likes;

        // Ajouter la carte aimée à la section des cartes aimées
        likedCardsContainer.style.display = 'block';
        const likedCard = topCard.cloneNode(true);
        likedCard.style.opacity = '1';
        likedCard.style.transform = 'scale(1)';
        likedCard.classList.add('liked-card'); // Pour appliquer une animation ou style spécifique
        likedCards.appendChild(likedCard);
    } else {
        dislikes++;
        document.getElementById('dislikes').textContent = dislikes;
    }

    // Remove card after animation
    setTimeout(() => {
        cardStack.removeChild(topCard);

        // Masquer les boutons quand il n'y a plus de cartes
        if (cardStack.children.length === 0) {
            controls.style.display = 'none';
            document.getElementById('afficher').style.display='block';
        }
    }, 500);
}

function afficherCartes() {
    // Sélectionner toutes les cartes aimées
    const likedCards = document.querySelectorAll('.liked-card');
    
    // Afficher chaque carte
    likedCards.forEach(card => {
        card.style.display = 'block'; // Rendre visible
    });

    // Masquer le bouton après le clic
    document.getElementById('afficher').style.display = 'block';
}

// // 
