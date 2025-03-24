const mongosse = require("mongoose");

const chatSchema = new mongosse.Schema({
  sender: {
    type: String,
    required: true,
  },
  reciever: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: [50, "Msg ki length kam kr bhai"],
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Chat = mongosse.model("Chat", chatSchema);

module.exports = { Chat };

