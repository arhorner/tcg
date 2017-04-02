const request = require('supertest');
const app = require('../../index');
const { resetData } = require('../../../test/db-utils');

beforeEach(resetData);

test('/api/cards return cards JSON and 200 OK', async () => {
  const res = await request(app)
  .get('/api/cards')
  .expect(200);

  const data = res.body;

  expect(data[0].card_id).toBe('test-1');
  expect(data[0].name).toBe('The Test');

  expect(data[1].card_id).toBe('test-2');
  expect(data[1].name).toBe('Another Test');
});
