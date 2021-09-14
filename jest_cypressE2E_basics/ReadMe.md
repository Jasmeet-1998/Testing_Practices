> # Jest & cypress
> ### Case- Implement a Stack without using js array (REFER-> STACK.TEST.JS IN TEST DIRECTORY)
             
             # to initialize a dummy project to save time
             npm init vite
             vanilla

             #cd to the project folder
             npm i jest --save

- **jest executes any file that is in the form somthing.test.js**

- **setup test script in package json**

                    "test": "jest --watchAll --verbose"
                    # watch all flag will rerun the test anytime the code changes and verbose flag to add some extra output in terminal

- **finally run test**

                    npm run test

> #### IMPORTANT , It is always better to install @types/jest --save-dev to get intellisense of all the features of jest, then create a jsconfig.json file in root project folder with typeAcquisition property for jest that will help in autocomplete in vs code to access all the features of jest eazzyy

                        npm run test
                        # keep it running

- **can add --coverage flag in test script to understand the part of code covered by your written test suite**

---

> ## Cypress end to end testing, testing in realtime environment

- **below command will actually download a browser which will run tests in real world environment**

                npm i cypress -D

                # once installation done
                # create a e2e script in package.json

                "e2e": "cypress open"

                # then you can see some prebuilt test suites in cypress and can even look at the code by going to 

                        # for actions tests
                        cypress->Integerations->actions.spec.js