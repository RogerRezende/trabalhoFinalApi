// controllers/userController.js
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Usuário e senha obrigatórios' });
  try {
    const user = userService.registerUser({ username, password });
    res.status(201).json({ username: user.username });
  } catch (e) {
    res.status(409).json({ error: e.message });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Usuário e senha obrigatórios' });
  try {
    const token = userService.loginUser({ username, password });
    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
});

router.get('/:username', (req, res) => {
  const user = userService.getUser(req.params.username);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json({ username: user.username });
});

module.exports = router;
