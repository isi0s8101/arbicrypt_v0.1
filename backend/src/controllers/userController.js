const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User successfully registered' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
    user.comparePassword(password, (error, isMatch) => {
      if (isMatch && !error) {
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ success: true, token: 'JWT ' + token });
      } else {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
