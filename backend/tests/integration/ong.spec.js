const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //zera banco de dados antes dos testes
        await connection.migrate.latest(); //executa migrations das alterações no banco
    })

    afterAll(async () => {
        await connection.destroy();
    });


    it ("Should be able create a new ONG", async () => {
        const response = await request(app).post('/ongs').send({
            name: "Criança Feliz",
            email: "criancafeliz@gmail.com",
            whatsapp: "47991187461",
            city: "Presidente Getúlio",
            uf: "SC"            
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})