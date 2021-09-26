const findStudentByName = require("../src/solution.js");
const expect = require("chai").expect;

describe("findStudentByName", () => {
  let students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
   ];
  
  let name1 = "Morgan Sutton"
  let wrongName = "Eve Beckett"
  

  
  it("returns an object", () => {
    let actual = findStudentByName(students, "Morgan Sutton");
    expect(actual).to.be.an("object");
  });
  
  it("returned object is associated with the student name", () => {
    let expected = {name: "Morgan Sutton", score: 7.4};
    let actual = findStudentByName(students, "Morgan Sutton");
    expect(expected).to.eql(actual);
  });
  
  it("returns null if a student cannot be found", () => {
    let actual = findStudentByName(students, "Eve Beckett");
    expect(actual).to.be.null
  });
 
});