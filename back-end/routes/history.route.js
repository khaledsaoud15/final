const {
  getAllHistory,
  getOwnHistory,
} = require("../controllers/history.controller");
const { verifyTokenAndRole } = require("../middlewares/token");

const router = require("express").Router();

router.get("/allhistory", verifyTokenAndRole, getAllHistory);

module.exports = router;
