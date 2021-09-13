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