/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  let result = null;
  for (const element of students) {
    if (element.name === name) {
    result = element.score;
  }
  }
  return result;
}

module.exports = findStudentScoreByName;
