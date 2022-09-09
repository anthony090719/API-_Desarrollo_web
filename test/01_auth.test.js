const request = requiere("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const {usersModel} = require("../models");

const testAuthLogin ={
    email: "test@test.com",
    passoword: "12345678"
};

const testAuthRegister ={
    name: "User test",
    age: 20,
    email: "test2@test2.com",
    password: "12345678"
};

/**
 * esto se va ejecutar antes de las pruebas
 */
beforeAll(async () => {
  await usersModel.deleteMany();
})

afterAll(() => {
    mongoose.connection.close()
})

describe("[AUTH] esta es la prueba de /api/auth",()=>{
   
   
    test("esto deberia retornar 404",async()=>{

        const response = await request(app)
        .post("/api/auth/login")
        .send(testAuthLogin)

        expect(response.statusCode).toEqual(404);

    });

    test("esto deberia retornar 201",async()=>{

        const response = await request(app)
        .post("/api/auth/register")
        .send(testAuthRegister);

        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("data.token");
        expect(response.body).toHaveProperty("data.user");
    });

    test("esto deberia retornar password no valido 401",async()=>{
        const newTestAuthLogin = {...testAuthLogin, passoword:"22222222"}
        const response = await request(app)
        .post("/api/auth/login")
        .send(newTestAuthLogin);

        expect(response.statusCode).toEqual(401);
    });

    test("esto deberia retornar 200 login exitoso",async()=>{
        const response = await request(app)
        .post("/api/auth/login")
        .send(testAuthRegister);

        expect(response.statusCode).toEqual(200);
    });
});