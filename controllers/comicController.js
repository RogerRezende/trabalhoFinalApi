// controllers/comicController.js
const express = require('express');
const router = express.Router();
const comicService = require('../services/comicService');
const userService = require('../services/userService');

function authMiddleware(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Token não informado' });
  const token = auth.split(' ')[1];
  const payload = userService.verifyToken(token);
  if (!payload) return res.status(401).json({ error: 'Token inválido' });
  req.user = payload;
  next();
}

router.post('/', authMiddleware, (req, res) => {
  const { name, publisher, licensor, genre, price } = req.body;
  if (!name || !publisher || !licensor || !genre || !price) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  try {
    const comic = comicService.registerComic({ name, publisher, licensor, genre, price });
    res.status(201).json(comic);
  } catch (e) {
    res.status(409).json({ error: e.message });
  }
});

router.get('/', (req, res) => {
  res.json(comicService.getComics());
});

module.exports = router;
