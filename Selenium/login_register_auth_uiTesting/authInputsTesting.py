from selenium import webdriver
from selenium.webdriver.common.keys import Keys

chromeDriverPath = "C:/SeleniumDrivers/chromedriver.exe"


driver = webdriver.Chrome(chromeDriverPath)

# target url
driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')

driver.implicitly_wait(5)

# for pop up
# also it may or may not appear so use try except
try:
    no_button = driver.find_element_by_class_name('at-cm-no-button')
    no_button.click()
except:
    print("No element with this className i.e the pop up didn't appear this time")

sum1 = driver.find_element_by_id('sum1')
sum2 = driver.find_element_by_id('sum2')

# sending keys/inputs with Keys package
sum1.send_keys(Keys.NUMPAD1,Keys.NUMPAD5)
sum2.send_keys(40)

# css selector filteration for output
btn = driver.find_element_by_css_selector('button[onClick="return total()"]')
btn.click()