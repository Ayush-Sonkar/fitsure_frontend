const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
