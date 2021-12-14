const request = require('supertest');
const app = require('./app');

describe('Pruebas Unitarias Componente Practico 15', () => {

    describe('Pruebas Endpoint Saludo', () => {
        test('Prueba respuesta correcta', async() => {
            const response = await request(app).get("/prueba").send();
            expect(response.statusCode).toBe(200);
            expect(response.body.mensaje).toBe("Hola mundo");
        });
    });

    describe('Pruebas del Endpoint Login',() => {
        test('Inicio de sesión con credenciales erradas', async () => {
            const response = await request(app).post("/login").send({
                username: "hola",
                password: "hola"
            });
            expect(response.statusCode).toBe(401);
        });

        test('Inicio de sesión con credenciales correctas',async () => {
            const response = await request(app).post("/login").send({
                username: "admin",
                password: "12345"
            });
            expect(response.statusCode).toBe(200);            
            expect(response.body).toEqual({ usuario: "admin" });
        });

        test('Inicio de sesión con credenciales nulas',async () => {
            const response = await request(app).post("/login").send();
            expect(response.statusCode).toBe(400);            
        });
    });

    describe('Pruebas Endpoint Suma', () => {
        test('Suma con valores correctos', async () => {
            const response = await request(app).post("/suma").send({
                a: 1,
                b: 2
            });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ resultado: 3})
        });

        test('Suma con valores nulos',async () => {
            const response = await request(app).post("/suma").send({
                a: null,
                b: null
            });
            expect(response.statusCode).toBe(400);
        });

    });


});