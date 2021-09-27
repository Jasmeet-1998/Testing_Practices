> #### AIM- **Testing REST API with supertest & jest**

**supertest usage docs-> https://www.npmjs.com/package/supertest**

> How to test the snippet?✔

- [x] clone the repo
- [x] npm install
- [x] npm run dev in 1st terminal
- [x] npm run test in 2nd terminal
- [x] can make use of postman also for manual testing

> A 🍖 note

- [x] make sure to use .npmrc or --ignore-scripts flags while installing dependency it is a good practice not to trust every npm package code blindly that has large number of downloads.

> A sample rest endpoint /register

- [x] to test this endpoint , the idea is that the server should respond with an error in case firstname is not provided in the request body

> Dev Logs

- npm i supertest --save-dev
- npm i jest --save-dev
- by default jest looks for test directory

                    __test__

- supertest is usefull for testing rest api,cookies,headers can also apply custom headers refer the docs- https://www.npmjs.com/package/supertest
