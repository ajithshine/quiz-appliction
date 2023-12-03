var imageMappings = {
    'question1': {
      'easy': 'q1hard.jpg',
      'medium': 'question1_medium.jpg',
      'hard': 'question1_hard.jpg'
    },
    'question2': {
      'easy': 'question2_easy.jpg',
      'medium': 'question2_medium.jpg',
      'hard': 'question2_hard.jpg'
    },
    // Add more mappings as needed
  };

window.onload = function() {
    imageId = document.getElementById('image');
    imagePath = localStorage.getItem('imagePath');
    imageId.src = imagePath;
}