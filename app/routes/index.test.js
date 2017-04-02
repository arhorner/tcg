const request = require('supertest');
const nock = require('nock');
const app = require('../index');
const { tcgApiUrl } = require('../config');

afterEach(() => nock.cleanAll());

test('It responds with a message and 200 OK', (done) => {
  nock(tcgApiUrl)
  .get('/v1/cards')
  .reply(200, {
    cards: [
      {
        name:'I am a test',
        set: 'Test Set',
        setCode: 'test-code',
        nationalPokedexNumber: 123
      }
    ]
  });

  request(app)
  .get('/')
  .expect(200)
  .end((err, res) => {
    expect(res.text).toContain('TCG Browser');
    expect(res.text).toContain('I am a test');
    done();
  });
});
