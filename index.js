const app = require('./app');

if (process.env.NODE_ENV != 'test') {
   const port = process.env.PORT || 3000;

   app.listen(port, () => {
     console.log(`TCG server is listening on ${port}`);
   });
}

module.exports = app;
