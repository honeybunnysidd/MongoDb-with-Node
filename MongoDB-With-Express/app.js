const express = require("express");
const app = express();
const path = require("path");
const mongosse = require("mongoose");

const { Chat } = require("./models/chat");
const { send } = require("process");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//express understand the client's data for all type of Request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => {
    console.log("DB connected Sucessfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongosse.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Redirect home route to all chats
app.get("/", (req, res) => {
  res.redirect("/chats");
});
//Home route

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();

  res.render("chats", { chats });
});

//New & Create Route
app.get("/chats/new", (req, res) => {
  res.render("newChat");
});

app.post("/chats/new", async (req, res) => {
  let { sender, reciever, msg } = req.body;
  await Chat.insertOne({
    sender: sender,
    reciever: reciever,
    msg: msg,
    createdAt: new Date(),
  })
    .then((data) => {
      res.redirect("/chats");
    })
    .catch((err) => console.log(err));
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
