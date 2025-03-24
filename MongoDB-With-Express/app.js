const express = require("express");
const app = express();
const path = require("path");
const mongosse = require("mongoose");

const { Chat } = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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

//Home route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();

  res.render("chats", { chats });
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
