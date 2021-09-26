const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution");

const students = [
      {name: "Leo Yeon-Joo", score: 8.9},
      {name: "Morgan Sutton", score: 7.4},
      {name: "Natalee Vargas", score: 9.2}
    ]

describe ("findStudentScoreByName", ()=> {
  it ("return student score", ()=> {
    const expected = 9.2;
    const actual = findStudentScoreByName(students, "Natalee Vargas")
    expect(actual).to.equal(expected);
  });
  
  it ("No name was given", ()=> {
    const expected = null;
    const actual = findStudentScoreByName(students);
    expect(actual).to.equal(expected);
  })
})

