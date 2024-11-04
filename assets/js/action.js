let likes = 0;
let dislikes = 0;
const cardStack = document.getElementById('cardStack');

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
    } else {
        dislikes++;
        document.getElementById('dislikes').textContent = dislikes;
    }

    // Remove card after animation
    setTimeout(() => {
        cardStack.removeChild(topCard);
    }, 300);
}