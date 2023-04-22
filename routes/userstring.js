require("dotenv").config();
const express = require("express");
const router = express.Router();

const Userstring = require("../models/Userstring");

router.get("/str", async (req, res) => {
  Userstring.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      return res.json(result);
    }
  });
});

router.post("/str", async (req, res) => {
  console.log(req.body);
  const { newstr, hasImage, cid, momentId } = req.body;
  const post = new Userstring({ userstring: newstr, hasImage, cid, momentId });
  await post.save();
  res.send(post);
});

module.exports = router;
