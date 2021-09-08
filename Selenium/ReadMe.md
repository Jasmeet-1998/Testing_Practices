# User Interface Automation via Selenium

**Selenium Docs - https://selenium-python.readthedocs.io/**

**chromedriver.exe - https://chromedriver.storage.googleapis.com/index.html** 

> ### Facts & Basic Config Walkthrough

- [x] webdriver helps in opening up the browser for testing the frontend part of the Web application.
- [x] each browser like chrome,brave,microsoft edge have different classes to perform automated task in webdriver, so we
instantiate the object for the class a/c to the browser we want the automation testing to be performed on.
                
                webdriver. #chrome/edge/etc

- [x] **remember to download chromedriver.exe a/c to your chrome version & configure chrome driver executable to the PATH.**
- [x] **NOTE- better to config the ENV PATH at code level via os module rather than configuring at system level**
            
            # open your chrome browser
            # to determine your chrome version
            
            chrome://version
            
- [x] **unzip chromedriver zip in c drive under a new selenium drivers folder**

- [x] **Some Selenium target testing practice to get started**
        
        # automated click & complete detection testing
        https://www.seleniumeasy.com/test/jquery-download-progress-bar-demo.html
        
        # automated testing for auth login/register
        https://www.seleniumeasy.com/test/basic-first-form-demo.html
        
- [x] **use chrome dev tools inspect to identify the target part of the website for which you want to write test cases.**
- [x] css selectors comes in handy while testing
        
        https://www.w3schools.com/cssref/css_selectors.asp 
 
## Selenium Bot Project
**refer seBotScraper directory**