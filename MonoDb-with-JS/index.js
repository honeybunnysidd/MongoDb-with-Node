const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("DB connected Successfully");
  })
  .catch((err) => console.log(err));

//Make connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/college");
}

//Defining our rules/constraint for Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Model class for creating collection
const Student = mongoose.model("Student", studentSchema);
const User = mongoose.model("User", studentSchema);

//Insert Single Data/Document
/*
const student1 = new Student({
    name: "Siddhartha",
    email: "sidd123@gmail.com",
    age: 27
});
const student2 = new Student({
    name: "Stupid",
    email: "stupid@gmail.com",
    age: 42
});

//Save to DB
student1.save().then((res) => {
    console.log("New User Added: ", res)
}).catch((err) => console.log(err));

//Save to DB
student2.save().then((res) => {
    console.log("New Student add Sucessfully: ", res)
}).catch((err) => console.log("Error: ", err));
*/
// ---------------------------------OR----------------------------------
// Student.insertOne(
//     { name: "Parul", email: "parul@gmail.com", age: 23 },
// ).then((data) => {
//     console.log("New Data Added: ", data);
// }).catch((err)=>console.log(err));

// --------------------------------------Insert Multiple Data/Document
/*
Student.insertMany([
    { name: "Parth", email: "parth@gmail.com", age: 27 },
    { name: "Parthavi", email: "parthavi@gmail.com", age: 42 }
]).then((data) => console.log(data))
    .catch((err) => console.log(err));
*/

//Model.find()
/*
Student.find()
    .then((data) => {
        console.log("data: ", data)
    });

Student.find({ age: { $gte: 30 } })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    */

//Model.findOne()
/*
Student.findOne({ age: { $gt: 30 } })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
*/

//Model.findById()
/*
Student.findById("67dd978c6ea9e0b7c39e1e67")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
*/

//Model.updateOne()
/*
Student.updateOne({ name: "Parul" }, { age: 27})
    .then((data) => {
        console.log(data)
    })
*/

/*
Student.updateMany({}, { age: 62 }).then((data) => console.log(data)).catch((err) => console.log(err));
*/

//-------------Model.findOneAndUpdate()
/*
Student.findOneAndUpdate({ name: "Parul" }, { age: 82 }, { new: true })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
*/
//------------------------Model.findByIdAndUpdate()
/*
Student.findByIdAndUpdate("67dd978c6ea9e0b7c39e1e67", { email: "sidd1027@gmail.com" }, { new: true })
    .then((data) => {
        console.log(data);

    }).catch((err) => {
        console.log(err);
    })
*/

//------------------------Model.deleteOne()

/*
Student.deleteone({ name: "Parthavi" }).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
*/

//------------------------Model.deleteMany()
/*
Student.deleteone({ age: {$gte: 25} }).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
*/

//------------------------Model.findByIdAndDelete()
/*
Student.findByIdAndDelete("67dd92325874428c60993705").then((data) => {
    console.log(data);
})
    */

//------------------------Model.findOneAndDelete()
Student.findOneAndDelete({ email: "sidd123@gmail.com" }).then((data) => {
  console.log(data);
});
