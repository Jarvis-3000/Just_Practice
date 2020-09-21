const Student = require("../mongoDB_Practise/app/student");
const mongoose = require("mongoose");
const { assert } = require("chai");

describe("Create Records", () => {


  beforeEach(done=>{
    mongoose.connection.collections.students.drop(()=>{
      done()
    })
  })

  it("Create a user in DB", () => {

    Student.insertMany(
    [
      {name:"raj"},
      {name:"satish"},
      {name:"Mehul"}
    ],

    (err,result)=>{
      if(!err){
        assert(!Student.isNew)
        console.log("Ok")
        return
      }
      else{
        console.log(result)
      }
    })
  });
});
    