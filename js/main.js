// Assignment 1
let simonScore = 80;
let mattScore = 45;
const nameSimon = 'Simon';
const nameMatt = 'Matt';

// Assignment 2
const lowerLimit = 51;

// Assignment 3
if(simonScore > lowerLimit && mattScore >lowerLimit) {
  console.log('Both passed the exam');
}else{
  console.log('Either or both failed the exam');
}

// Assignment 4
if(simonScore > lowerLimit) {
  console.log('Simon passed theh exam 🎊');
} else if (mattScore > lowerLimit) {
  console.log('Matt passed the exam 🎊');
}

// Assignmnet 5
if(simonScore > lowerLimit) {
  console.log('Simon passed theh exam 🎊');
} else if (mattScore > lowerLimit) {
  console.log('Matt passed the exam 🎊');
} else {
  console.log('Both failed the exam 🥵');
}

// Assignment6
if(simonScore > lowerLimit) {
  console.log(`${nameSimon} passed the exam with ${simonScore} score`);
} else if (mattScore > lowerLimit) {
  console.log(`${nameMatt} passed the exam with ${mattScore} score`);
}

// Assignment 7
if(simonScore > lowerLimit && mattScore > lowerLimit) {
  console.log('Both passed the exam 👨🏽‍🤝‍👨');
} else if(simonScore > lowerLimit && mattScore < lowerLimit) {
  console.log('Simon passed 🙆🏼‍♂️');
} else if (simonScore < lowerLimit && mattScore > lowerLimit) {
  console.log('Matt passed 🙋🏽‍♂️');
} else {
  console.log('Both failed 🙅🏼‍♂️🙅🏾');
}