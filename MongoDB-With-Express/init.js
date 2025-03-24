const mongosse = require("mongoose");
const { Chat } = require("./models/chat");

main()
  .then(() => {
    console.log("DB connected Sucessfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongosse.connect("mongodb://127.0.0.1:27017/whatsapp");
}

/*
Chat.insertOne({
  sender: "Parul",
  reciever: "Sidd",
  msg: "This is my first msg",
  createdAt: new Date(),
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err.errors.reciever.properties.message));
*/

let allChats = [
  {
    sender: "Parul",
    reciever: "Sidd",
    msg: "This is my first msg",
    createdAt: new Date(),
  },

  {
    sender: "Parul",
    reciever: "Sidd",
    msg: "This is my Second msg",
    createdAt: new Date(),
  },
  {
    sender: "Parul",
    reciever: "Sidd",
    msg: "This is my third msg",
    createdAt: new Date(),
  },
  {
    sender: "Parul",
    reciever: "Sidd",
    msg: "This is my fourth msg",
    createdAt: new Date(),
  },
];

Chat.insertMany(allChats);
