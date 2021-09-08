from selenium import webdriver
from selenium.webdriver.common.by import  By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# config path at code level for chromedriver.exe
# r for raw string
chromeDriverPath = "C:/SeleniumDrivers/chromedriver.exe"

# instantiating the object a/c to the browser web-driver.
driver = webdriver.Chrome(chromeDriverPath)

# set the target for testing
driver.get("https://www.seleniumeasy.com/test/jquery-download-progress-bar-demo.html")

# a small waiting time for server or browser loading so that it can locate the target element
driver.implicitly_wait(8)

targetElement = driver.find_element_by_id("downloadButton")
# clicks the download button automatically
targetElement.click()


# explicit wait for the progress-label to change to completed
# on successfull test the script will exit with code 0
WebDriverWait(driver,30).until(
    # waits until the text becomes the expected text
    EC.text_to_be_present_in_element(
        # Element Filteration
        (By.CLASS_NAME, 'progress-label') ,
        # The expected text
        'Complete!'
    )
)
