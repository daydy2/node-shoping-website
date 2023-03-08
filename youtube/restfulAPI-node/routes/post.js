const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res, next) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postId", async (req, res, next) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost)
  } catch (err) {}
});

module.exports = router;
