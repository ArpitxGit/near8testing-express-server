const mongoose = require("mongoose");

const UserstringSchema = mongoose.Schema({
  userstring: {
    type: String,
    required: true,
  },
  hasImage: {
    type: Boolean,
    required: true,
  },
  cid: {
    type: String,
    required: true,
  },
  momentId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Userstring", UserstringSchema);
