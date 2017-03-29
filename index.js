const express = require('express');
const app = express();
const request = require('superagent');
const db = require('./app/models');

app.use('/assets', express.static('app/assets'));

app.set('view engine', 'ejs');
app.set('views', 'app/templates');
app.get('/api/cards', (req, res) => {
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

app.get('/browser', (req, res) => {
  res.render('layout', {
    title: 'TCG Browser'
  });
});

app.get('/', (req, res) => {
  request
  .get('https://api.pokemontcg.io/v1/cards')
  .end((error, data) => {
    const { cards } = data.body;

    const pageData = Object.assign({
      title: 'TCG Browser',
      cards
    });

    res.render('layout', pageData);
  });
});

if (process.env.NODE_ENV != 'test') {
   const port = process.env.PORT || 3000;

   app.listen(port, () => {
     console.log(`TCG server is listening on ${port}`);
   });
}

module.exports = app;
