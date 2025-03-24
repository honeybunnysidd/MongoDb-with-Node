const express = require("express");
const app = express();
const path = require("path");
const mongosse = require("mongoose");

const { Chat } = require("./models/chat");
const { send } = require("process");

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

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

app.post("/chats/new", (req, res) => {
  let { sender, reciever, msg } = req.body;
  Chat.insertOne({
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

//Edit & Update Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(`${id}`);

  res.render("edit", { chat });
});

app.patch("/chats/:id", (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;

  Chat.findByIdAndUpdate(`${id}`, { msg: msg })
    .then(() => res.redirect("/chats"))
    .catch((err) => console.log(err));
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
