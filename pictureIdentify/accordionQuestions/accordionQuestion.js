const valueMapper = {
    'git' : {
        'section1' : 'For which purpose is Git primarily used in software development?',
        'content1' : 'Git is a version control system used for tracking changes in source code during software development.',
        'section2' : 'What is git fork?',
        'content2' : 'Git Fork enables us to make changes to the source code without affecting the original repository. where the developer can freely create without concern for the original source code.'
    },
    'Jenkins' : {
        'section1' : 'Role of Jenkins in the Software Development Life Cycle',
        'content1' : 'Jenkins is an automation server used for continuous integration and continuous delivery (CI/CD) to automate building, testing, and deployment processes.',
        'section2' : 'Provide the name of a Jenkins plugin commonly used for code quality analysis',
        'content2' : 'SonarQube Scanner for Jenkins'
    }

}



function toggleAccordion(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
  
  function toggleAccordionContent(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }