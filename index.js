const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello TCG');
});

if (process.env.NODE_ENV != 'test') {
  app.listen(3000, () => {
    console.log('TCG Server is listening on 3000');
  });
}

module.exports = app;
