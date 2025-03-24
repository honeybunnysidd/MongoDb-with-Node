const express = require("express");
const app = express();
const path = require("path");

const mongosse = require("mongoose");

main()
  .then((res) => {
    console.log("DB connected Sucessfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongosse.connect("mongodb://127.0.0.1:27017/college");
}

app.get("/", (req, res) => {
  res.send("Working properly");
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
