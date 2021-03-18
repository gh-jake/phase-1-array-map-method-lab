const titleCased = () => {
  let tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  return tutorials.map(function titleCaseTutorial(tutorial) {
    let tutorialArray = [];
    let splitTutorial = tutorial.split(" ");
    splitTutorial.map(function (element) {
      if (element === element.toUpperCase()) {
        tutorialArray.push(element);
      }
      else {
        tutorialArray.push(element[0].toUpperCase() + element.substring(1));
      }
    });
    return tutorialArray.join(" ");
  });
}