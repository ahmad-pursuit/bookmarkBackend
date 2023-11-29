const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");
const { validateURL } = require("../models/validations.js");
//INDEX
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
    if (bookmarksArray[req.params.arrayIndex]) {
      res.json(bookmarksArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

// CREATE
bookmarks.post("/", validateURL, (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarkArray[bookmarkArray.length - 1]);
});

  // DELETE
bookmarks.delete("/:indexArray", (req, res) => {
  if (bookmarksArray[req.params.indexArray]) {
    const deletedBookMark = bookmarksArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedBookMark);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
bookmarks.put("/:arrayIndex", validateURL, async (req, res) => {
  if (bookmarksArray[req.params.arrayIndex]) {
    bookmarksArray[req.params.arrayIndex] = req.body;
    res.status(200).json(bookmarksArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = bookmarks;