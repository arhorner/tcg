const express = require('express');
const router = express.Router();
const request = require('superagent');

router.get('/', (req, res) => {
  request
  .get('http://api.pokemontcg.io/v1/cards')
  .end((err, data) => {
    const { cards } = data.body;

    const pageData = Object.assign({
      title: 'TCG Browser',
      cards
    });

    res.render('layout', pageData);
  });
});

module.exports = router;
