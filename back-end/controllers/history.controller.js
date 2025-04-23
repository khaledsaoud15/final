const History = require("../models/history.model");

const getAllHistory = async (req, res) => {
  const allHistory = await History.find().populate("userId", "fullname email");
  res.status(201).json(allHistory);
};

module.exports = { getAllHistory };
