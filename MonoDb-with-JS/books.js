const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("DB connected Successfully");
  })
  .catch((err) => console.log(err));

//Make connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [20, "Length Kam kar bhai title ki"],
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Paise thode jayda daal bhai"],
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", bookSchema);

/*
Book.insertOne({
    title: "My First Book",
    author: "Siddhartha",
    price: 1027
}).then((data) => {
    console.log(data);
}).catch((err) => console.log(err));
*/

/*
Book.insertOne({
    title: "My third Book",
    author: "Siddhartha",
    price: "1042" // Js accept every data type, and mongoose convert based on schema if parsing is possible.
}).then((data) => {
    console.log(data);
}).catch((err) => console.log(err));
*/
/*
Book.findByIdAndUpdate("67e095af8457188df8f8fcf0", { title: "dksafbkdsssfbksdfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" }, { new: true, runValidators: true })
    .then((res) => {
        console.log(res);
    }).catch((err) => console.log("Error: " ,err.errors.title.properties.message));
*/

/*
Book.findByIdAndUpdate("67e095af8457188df8f8fcf0", { price: 0 }, { new: true, runValidators: true })
    .then((res) => {
        console.log(res);
    }).catch((err) => console.log("Error: ", err.errors.price.properties.message));

*/
