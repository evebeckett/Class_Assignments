/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let object = null;
  for(const element of students) {
    if (element.name === name) {
      object = element;
    }
  }
  return object;
}



module.exports = findStudentByName;
