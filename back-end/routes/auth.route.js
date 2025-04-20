const {
  register,
  login,
  updateInfo,
  getSingleUser,
} = require("../controllers/auth");
const { uploadUser } = require("../middlewares/multer");
const { verifyToken } = require("../middlewares/token");

const router = require("express").Router();

router.post("/register", uploadUser.single("image"), register);
router.post("/login", login);
router.get("/user/:id", getSingleUser);
router.put("/update/:id", verifyToken, uploadUser.single("image"), updateInfo);

module.exports = router;
