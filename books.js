const mongoose = require('mongoose');

main().then(() => {
    console.log("DB connected Successfully");
}).catch(err => console.log(err));

//Make connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String
    },
    price: {
        type: String
    },
});

const Book = mongoose.model("Book", bookSchema);

Book.insertOne({
    title: "My Book",
    author: "Siddhartha",
    price: "1042" // Js accept every data type, and mongoose convert based on schema if parsing is possible.
}).then((data) => {
    console.log(data);
}).catch((err) => console.log(err));
