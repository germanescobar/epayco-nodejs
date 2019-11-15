const request = require('supertest')
const { app } = require('../../server/app')

describe('GET /api/something', () => {
  test('responds with 200 OK', async () => {
    const response = await request(app).get('/api/something')
    expect(response.statusCode).toBe(200)
  })
})
