const partitionStudentsByScore = require("../src/solution")
const expect = require("chai").expect;


describe("partitionStudentsByScore", () => {
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
  
  it("should correctly partition students into their appropriate array", () => {
    let expected = [
  [{ name: "Morgan Sutton", score: 7.4 }],
  [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Natalee Vargas", score: 9.2 },
  ],
];
    let actual = partitionStudentsByScore(students, 8)
    
  });
  
  it ("should be possible for all students to go into an array", () => {
    let expected = students.length;
    let actual = partitionStudentsByScore(students, 8)[0].length + partitionStudentsByScore(students,8)[1].length;
    
  });
  
  it ("should return an array of two empty arrays if the student list is empty", () => {
    let expected = [[], []];
    let actual = partitionStudentsByScore([], 8);
    expect(expected).to.eql(actual);
  });
  
});
