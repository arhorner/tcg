const request = require('supertest');
const app = require('./index');

test('It responds with text and 200 status', done => {
  request(app)
  .get('/')
  .expect(200)
  .end((err, res) => {
    expect(res.text).toBe('Hello TCG');
    done();
  });
});
