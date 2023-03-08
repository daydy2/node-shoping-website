const express = require("express");

const router = express.Router();
const { getPosts, createPost } = require("../controllers/feed");


// GET /feed/posts
router.get("/posts", getPosts);

// POST /feed/post
router.post("/post", createPost);

module.exports = router;
