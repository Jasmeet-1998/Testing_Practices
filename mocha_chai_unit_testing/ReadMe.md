# Javascript Automated Unit Testing & Behavior Driven Development (BDD)

- [x] In BDD the idea is to write tests first to define how our code should work even before writing the actual code
- [x] **tests describe the expected behavior of the application**
- [x] **Automated testing with mocha**
- [x] **a test suite is defined as a group of related tests**
                
> # Unit,Integeration & End-to-End Testing

- [x] Unit testing involves isolating a piece of code that is responsible for specific functionality and then writing tests for this isolated piece of code only
- [x] Integeration testing is done when new changes/modification are done to the existing code base or in the case when one want to test nature of project when multiple functionalities work in a collabarative manner.
- [x] End to End testing is similar to playing real soccer matches i.e testing the nature,performance and overall working of the project in a live environment rather than local environment.

***

> # Behaviour Driven development

- [x] Is creating a plan before we actually write the code for the project.            
- [x] **i.e write test first and code second**
- [x] **The idea is to write tests a/c to what nature we want our function to have, then write code and pass all those tests from red->green**
- [x] **Once all the tests are success,Then we move to refactoring our code to improve performance and readibility**

                        Red > Green > Refactor
                        1. write tests, even though they fail
                        2. write the naive/easiest code to pass that test cases
                        3. refactor the code once all the test passes
                        4. repeat above three in that order once we have achieved the performance.
***

> # TitleCase functions in test suites and test
- [x] **When using title case, all words are capitalized except for minor words unless they are the first or last word of the title.**


> #### **IMPORTANT further we can write a test itself that tests for titlecase**

                    refer titleCaseTest.js

***

> # Mocha & Chai
**always refer docs - https://www.chaijs.com/api/bdd/**


- [x] **best practice is to seperate tests from the source code**
- [x] **unit test describes the expected behaviour**

                # consider you are developing a battle ship game engine and want to follow the BDD approach
                # the steps & file structure will be like this

                # in terminal
                cd shipEngine
                npm init -y
                npm i mocha chai --save-dev

                # General structure of test files
                # create a directory named as 'test' (strict and case sensitive) this will contain all the tests
                
                Workspace
                    -test
                        *main_test.js
                
                # package.json
                # add script
                "test":"mocha"
                
                # running tests
                npm test
                # this will automatically run all the .js extension files inside the test directory

> ### Test Suite & Test Specs

- [x] **a test suite is a block of unit test that are closely related as they test the same function or similar part of the source code**

                    # to introduce a test suite use describe
                    # say we are testing wheather mocha works correctly or not
                    # i.e its config are proper with proper file structure
                    describe('Mocha',()=>{});

                    # the second parameter is the callback function which includes the test 
                    # that we want to run on the source code

- [x] **each individual test is called test spec i.e unit test**
                    describe('Mocha',()=>{
                        // Test spec (unit test)
                    });

                    # 'it' is use to contain the unit test
                    # expectations describe the expected behaviour of the function during testing
                    
                    describe('Mocha',()=>{
                        // Test spec (unit test)
                        it('should run our tests using npm',()=>{
                            // contains expectations for the test to be passed
                        });
                    });

> #### TestCases List: Battleship Game Engine 

- [x] Current player & winner
- [x] Number of ships
- [x] position of ships
- [s] status that ship is active or sank

> # Facts

- [x] **In Javascript no two arrays even with identical values are never said to be equal so for these type of  cases comparing the values of two arrays(objects) use the .include or .deep in the expect bdd of chai docs**

- [x] **as best practices make sure to minimize the code repition as low as possible using the beforeEach and before in chai & mocha to initialize dummy data for test cases**

- [x] **when all the test suites pass their is no need of the dummy data so teardown phase kicks in mocha provides a teardown phase that includes removing unwanted variables**

- [x] **in best practice it is not a good practice to write test for dom when already using jquery or react, it is also a bad practice to pass state between test suites.**

- [x] **test should not be clever should be as basic as possible and should be written keeping in mind that we are using them to validate a specific behaviour of the function**

- [x] **the teardown can be done by the after() & afterEach() hook in mocha**

- [x] **after gets executed after all test spec has been completed while afterEach gets executed after each test spec completion**

- [x] **use the .throw in chain to test for edge cases**

- [x] **use the --reporter flag in mocha to customize the output of your test, example for customizing the output in such a way tha mocha only report for failing test use --reporter min**

- [x] **to have a markdown look of the test reports use --reporter markdown, this is also helpful when writing tests into Readme or documentations**

- [x] **We can outline the test suite by encapsulating inside another describe block also the it test specs without any expectations are considered as pending**

- [x] **by xdescribe or xit we can tell mochau that this test suite or test spec is not yet completed or for just our sanity like a bookmark to start the work from tommorow**

- [x] **watching test files, so that no need to explicitely write npm test each time, mocha automatically detects the change in code files and run test on it**

- [x] **can be done with the --watch flag, mocha --watch ./test/game.test.js ./game_logic/game_instance.js, this will run the test in game.test.js each time their is change in the game_instance.js**

 - [x] **mock and stubs comes in handy as fake helpers just like dummy variables players used in tes suites, mock functions act as helper for tested function dependancy**

- [x] **asynchronous code test refer game.test.js**