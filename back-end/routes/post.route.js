const { createPost, getAllPosts } = require("../controllers/post.controller");
const { verifyToken } = require("../middlewares/token");

const router = require("express").Router();

router.post("/create", verifyToken, createPost);
router.get("/allPosts", getAllPosts);

module.exports = router;
