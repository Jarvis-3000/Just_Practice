const Student = require("../mongoDB_Practise/app/student");
const mongoose = require("mongoose");


before((done) => {
  mongoose.connect(
    "mongodb://localhost:27017/mongooseLearning", //mongooseLearning is the name of database
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  mongoose.connection
    .once("open", () => {
      console.log("Successfully Connected!");
      done();
    })
    .on("error", (error) => console.log("The error: ", error));
});
