const container = document.getElementById('container');
let currentPosition = 0;

imageMapper = [
    {q1hard,}
]

// Retrieve the last question from localStorage
const lastQuestion = localStorage.getItem('lastQuestion');
if (lastQuestion) {
    showQuestion(parseInt(lastQuestion));
}

function showQuestion(questionNumber) {
    currentPosition = -(questionNumber - 1) * 100;
    container.style.transform = `translateX(${currentPosition}vw)`;

    // Save the current question to localStorage
    localStorage.setItem('lastQuestion', questionNumber);
}

function showImage(label) {
    window.location.href = label;
}

// Handle arrow key presses
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
    showQuestion(currentPosition / -100);
    } else if (event.key === 'ArrowRight') {
    showQuestion(currentPosition / -100 + 2);
    }
});

