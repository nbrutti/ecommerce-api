import supertest from 'supertest';
import app from '../../src/app'
import connection from '../../src/database';

afterAll(() => {
    connection.close()
});

describe('Rota: /produtos', () => {
    test('GET /produtos', async () => {
        const result = await supertest(app)
            .get('/produtos');
        expect(result.status).toBe(200); 
    });
});