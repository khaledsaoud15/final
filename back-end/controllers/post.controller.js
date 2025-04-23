const Post = require("../models/post.model");
const History = require("../models/history.model");

const createPost = async (req, res) => {
  try {
    const { model, year, image } = req.body;
    const newPost = new Post({
      userId: req.user._id,
      model,
      year,
      image,
    });
    await newPost.save();

    const newHistory = new History({
      userId: newPost.userId,
      createdAt: newPost.createdAt,
      model: newPost.model,
    });

    await newHistory.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate("userId");
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { createPost, getAllPosts };
