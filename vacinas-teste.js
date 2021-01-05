// Requires the admc/wd client library
// (npm install wd)
// Then paste this into a .js file and run with Node 7.6+

const wd = require('wd');
const driver = wd.promiseChainRemote("http://localhost:4723/wd/hub");
const caps = {"platformName":"Android","deviceName":"Galaxy_Nexus_API_27","app":"C:\\Users\\Usuario\\Desktop\\Android\\vacinas\\app\\homolog\\release\\app-homolog-release.apk","appPackage":"com.gfxconsultoria.medicare.homolog","appActivity":"com.gfxconsultoria.medicare.views.activities.SplashActivity","newCommandTimeout":3600,"ensureWebviewsHavePages":true};

async function main () {
  await driver.init(caps);
  await driver.setImplicitWaitTimeout(10000);

  let el1 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/btnEstoque");
  await el1.click();
  let el2 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/btnAdd");
  await el2.click();
  let el3 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/etCategory");
  await el3.sendKeys("Categoria A");
  let el4 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/btnRegisterItem");
  await el4.click();
  let el5 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/btnShowItem");
  await el5.click();
  let el6 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/etDescription");
  await el6.sendKeys("Produto teste");
  let el7 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/etAmount");
  await el7.sendKeys("10");
  let el8 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/etValue");
  await el8.sendKeys("1");
  let el9 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/etLot");
  await el9.sendKeys("123456789");
  let el10 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/etDiscount");
  await el10.click();
  await driver.hideDeviceKeyboard();
  await el10.sendKeys("0");
  let el11 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/btnRegisterItem");
  await el11.click();
  let el12 = await driver.elementById("com.gfxconsultoria.medicare.homolog:id/contraintRegister");
  await el12.click();
  await driver.quit();
}

main().catch(console.log);
