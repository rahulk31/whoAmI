const readLineSync = require('readline-sync');

let currentScore;
let score = 0;
let highScorer = {
  name: 'kumar',
  score: 0
}
const questionList = [
  { ques: 'What is my Name? : ', ans: 'Rahul' },
  { ques: 'What is my Age? : ', ans: '24' },
  { ques: 'What is my favourite subject? : ', ans: 'Computers' },
  { ques: 'Where Do I live? : ', ans: 'Bangalore' },
  { ques: 'Which OS I use? : ', ans: 'Mac' }
];

const userName = readLineSync.question('May I know your name? : ');
console.log(`Welcome ${userName}, Hope you are doing good!`);

console.log('-----------------------------');
let shouldStart = readLineSync.question('Shall we start the game - Tell About me? (y/n): ');

while(shouldStart.toLowerCase() === 'y') {
  currentScore = 0;
  for(let i=0; i<questionList.length; i++) {
    const answer = readLineSync.question(questionList[i].ques);
    if(questionList[i].ans.toLowerCase() === answer.toLowerCase()) {
      currentScore++;
      console.log('You are right, Current Score = ' + currentScore);
    }
    else {
      console.log('Oops! You are wrong, Current Score = ' + currentScore);
    }
    console.log('-----------------------------');
  }
  console.log('Your total score: ' + currentScore);
  if(currentScore > score) {
    highScorer.name = userName;
    highScorer.score = currentScore;
  }
  console.log('-----------------------------');
  console.log(`High Scorer: Name = ${highScorer.name}, Points = ${highScorer.score}`);
  console.log('-----------------------------');
  shouldStart = readLineSync.question('Shall we start the game again? Reply (y/n) : ')
}