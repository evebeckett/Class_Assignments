/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let arrayA = students.filter(student => student.score < score);
  let arrayB = students.filter(student => student.score > score);
  return [arrayA, arrayB];
}

module.exports = partitionStudentsByScore;
