const express = require('express');
const app = express();
const request = require('superagent');

app.use('/assets', express.static('app/assets'));

app.set('view engine', 'ejs');
app.set('views', 'app/templates');

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
  app.listen(3000, () => {
    console.log('TCG Server is listening on 3000');
  });
}

module.exports = app;
