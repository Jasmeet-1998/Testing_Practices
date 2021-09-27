// refer https://www.npmjs.com/package/supertest

// requiring express server
const api = require('../../server');
// for making test request to the server
const request= require('supertest');

describe('✔ register',()=>{
    it('returns status code 201 if firstname is provided in request body',async()=>{
        const apiResponse = await request(api).post('/register').send(
            {
                firstName : 'Jane'
            }
        );
        expect(apiResponse.statusCode).toEqual(201);
    });

    it('returns 400 if firstName not in request body',async()=>{
        const apiResponse = await request(api).post('/register').send({});
        expect(apiResponse.statusCode).toEqual(400);
        expect(apiResponse.body).toEqual('you need to pass a firstname');
    });
});