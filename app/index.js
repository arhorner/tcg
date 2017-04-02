const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', `app/templates`);

app.use('/assets', express.static('app/assets'));
app.use(require('./routes'));
app.use('/api', require('./routes/api'));

module.exports = app;
