const reviews = [
    {
        text: '"The stick drift on my old controller was driving me insane. The Pro X fixed everything — the Hall Effect sticks are buttery smooth and I haven\'t had a single issue after 200+ hours of use."',
        reviewer: "— Marcus T., verified buyer",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: '"I was sceptical about the adaptive triggers but they genuinely change how games feel. The battery life is no joke either — I charge it once a week at most."',
        reviewer: "— Priya K., verified buyer",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: '"Best controller I\'ve owned. The build quality feels premium, the buttons are responsive, and the grip is comfortable even during long sessions. Worth every penny."',
        reviewer: "— Jordan S., verified buyer",
        stars: "⭐⭐⭐⭐⭐"
    }
];

let currentIndex = 0;
let isAnimating = false;

function getReview(offset) {
    return reviews[(currentIndex + offset + reviews.length) % reviews.length];
}

function updateCards() {
    [['card-left', -1], ['card-center', 0], ['card-right', 1]].forEach(([id, offset]) => {
        const review = getReview(offset);
        const card = document.getElementById(id);
        card.querySelector('.stars').textContent = review.stars;
        card.querySelector('.review-text').textContent = review.text;
        card.querySelector('.reviewer').textContent = review.reviewer;
    });
}

function shift(direction) {
    if (isAnimating) return;
    isAnimating = true;

    document.querySelectorAll('.review-card').forEach(c => c.classList.add('fading'));

    setTimeout(() => {
        currentIndex = direction === 'next'
            ? (currentIndex + 1) % reviews.length
            : (currentIndex - 1 + reviews.length) % reviews.length;
        updateCards();
        document.querySelectorAll('.review-card').forEach(c => c.classList.remove('fading'));
        setTimeout(() => { isAnimating = false; }, 350);
    }, 280);
}

document.getElementById('prev-btn').addEventListener('click', () => shift('prev'));
document.getElementById('next-btn').addEventListener('click', () => shift('next'));

updateCards();