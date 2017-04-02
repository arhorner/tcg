const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/cards', (req, res) => {
  db.card.findAll().then(cards => {
    const cardData = cards.map(card => {
      return {
        card_id: card.card_id,
        name: card.name
      };
    });

    res.send(cardData);
  });
});

module.exports = router;
