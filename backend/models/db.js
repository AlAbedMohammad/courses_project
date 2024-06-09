const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://course_project:qbKdeR4yVyueMhfQ@cluster0.qp3jmlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
//mohammadraedabed
//wUyHjJmwg9R9up6N
// mongodb+srv://course_project:qbKdeR4yVyueMhfQ@cluster0.qp3jmlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//course_project
//qbKdeR4yVyueMhfQ