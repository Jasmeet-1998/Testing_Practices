import bookings.constants as const
# import os
from selenium import webdriver


# Inherited webdriver.Chrome(superclass) w.r.t booking class(child class)
class Booking(webdriver.Chrome(r"C:\SeleniumDrivers\chromedriver.exe")):

    # constructor for driver path default is mentioned
    def __init__(self, driver_path=r"C:\SeleniumDrivers\chromedriver.exe"):
        self.driver_path = driver_path
        # os.environ['PATH'] += self.driver_path
        # webdriver.chrome class methods accessible now
        super(Booking, self).__init__()

    def landing_page(self):
        # self. (all methods for webdriver.chrome now accessible)
        self.get(const.TARGET_BASE_URL)
