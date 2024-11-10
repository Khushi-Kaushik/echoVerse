const express = require("express");
const Messages = require("../models/calmhaven/Messages.model");
const router = express.Router();
const { Filter } = require("bad-words");

router.get("/messages", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const messages = await Messages.find().limit(limit);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Maybe keep a limit of 1 message every 3 hours or so?
router.post("/messages", async (req, res) => {
  const { message, userID } = req.body;
  const timeLimit = parseInt(process.env.MESSAGE_TIME_LIMIT) || 10800000; // Default to 3 hours in milliseconds

  if (!message || !userID) {
    return res.status(400).json({ error: "Message and userID are required" });
  }

  try {
    const lastMessage = await Messages.findOne({ userID }).sort({
      createdAt: -1,
    });

    if (
      lastMessage &&
      Date.now() - new Date(lastMessage.createdAt).getTime() < timeLimit
    ) {
      return res
        .status(429)
        .json({ error: "You can only send one message every 3 hours" });
    }

    const filter = new Filter();
    const text = filter.clean(message);
    const newMessage = new Messages({ message: text, userID });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create message" });
  }
});

module.exports = router;
