const User = require("../models/user.model");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullname, email, password, address, role, phone, image } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = Crypto.AES.encrypt(
      password,
      process.env.SECRET_TEXT
    );

    const user = new User({
      fullname,
      email,
      password: hashedPassword,
      address,
      phone,
      role,
      image: req.file?.path || "",
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const decryptedPassword = Crypto.AES.decrypt(
      user.password,
      process.env.SECRET_TEXT
    ).toString(Crypto.enc.Utf8);

    if (password !== decryptedPassword) {
      return res.status(403).json({ message: "Incorrect Password" });
    }

    const payload = {
      _id: user._id,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY);

    res.status(200).json({ ...user._doc, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const updateInfo = async (req, res) => {
  const { fullname, email, password, address, phone, image } = req.body;
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const existingUser = await User.findById(req.params.id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          fullname,
          email,
          password,
          address,
          phone,
          image: req.file?.path || req.body.image,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login, updateInfo, getSingleUser };
