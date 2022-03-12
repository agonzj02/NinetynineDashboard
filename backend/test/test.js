const server = require('../src/index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Crypto Endpoints', () => {

    it('GET /cryptos/top10 should return something', async () => {
      const res = await requestWithSupertest.get('/cryptos/top10');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('data')
    });

    it('GET /cryptos/top10 should return 10 cryptos', async () => {
        const res = await requestWithSupertest.get('/cryptos/top10');
          expect(res.status).toEqual(200);
          expect(res.body.data).toHaveLength(10)
      });
  
  });