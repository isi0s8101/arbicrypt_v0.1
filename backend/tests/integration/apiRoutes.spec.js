const request = require('supertest');
const app = require('../../src/app');

describe('API Routes Test', () => {
  it('GET / - should return 200', async () => {
    const result = await request(app).get('/');
    expect(result.statusCode).toEqual(200);
    expect(result.text).toContain('Arbicrypt Arbitrage Bot Backend is running...');
  });

  // Add more tests for other routes as needed
});
