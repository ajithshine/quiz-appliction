var imageMappings = {
    'question1': {
      'easy': '',
      'medium': 'question1_medium.jpg',
      'hard': './Images/q1hard.jpg'
    },
    'question2': {
      'easy': 'question2_easy.jpg',
      'medium': 'question2_medium.jpg',
      'hard': 'question2_hard.jpg'
    },
    // Add more mappings as needed
  };

window.onload = function() {
    imageId = document.getElementById('images');
    imagePath = localStorage.getItem('imagePath');
    if (imagePath != undefined) {
      imageId.src = imagePath;
    }
}