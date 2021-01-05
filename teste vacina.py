# This sample code uses the Appium python client
# pip install Appium-Python-Client
# Then you can paste this into a file and simply run with Python

from appium import webdriver

caps = {}
caps["platformName"] = "Android"
caps["deviceName"] = "Galaxy_Nexus_API_27"
caps["app"] = "C:\\Users\\Usuario\\Desktop\\Android\\vacinas\\app\\homolog\\release\\app-homolog-release.apk"
caps["appPackage"] = "com.gfxconsultoria.medicare.homolog"
caps["appActivity"] = "com.gfxconsultoria.medicare.views.activities.SplashActivity"
caps["newCommandTimeout"] = 3600
caps["ensureWebviewsHavePages"] = True

driver = webdriver.Remote("http://localhost:4723/wd/hub", caps)

el1 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/btnEstoque")
el1.click()
el2 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/btnAdd")
el2.click()
el3 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/etCategory")
el3.send_keys("Categoria A")
el4 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/btnRegisterItem")
el4.click()
el5 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/btnShowItem")
el5.click()
el6 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/etDescription")
el6.send_keys("Produto teste")
el7 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/etAmount")
el7.send_keys("10")
el8 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/etValue")
el8.send_keys("1")
el9 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/etLot")
el9.send_keys("123456789")
el10 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/etDiscount")
el10.click()
driver.hide_keyboard()
el10.send_keys("0")
el11 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/btnRegisterItem")
el11.click()
el12 = driver.find_element_by_id("com.gfxconsultoria.medicare.homolog:id/contraintRegister")
el12.click()

driver.quit()