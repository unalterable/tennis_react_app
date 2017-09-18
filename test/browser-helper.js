"use strict";
const co = require('co');
const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

const drivers = {
  firefox: function(){
    return new webdriver.Builder().forBrowser('firefox').build();
  },
  chrome: function(){
    return new webdriver.Builder().forBrowser('chrome').build();
  }
}

module.exports = function(){

  const driver = drivers.chrome();

  const browser = {

    getDriver: co.wrap(function(){
      return driver;
    }),

    visit: co.wrap(function*(url){
      return driver.get(url);
    }),

    click: co.wrap(function*(css){
      return (yield browser.waitFor(css)).click();
    }),

    waitFor: co.wrap(function*(css){
      return driver.wait(until.elementLocated(By.css(css)), 2000);
    }),

    getDom: co.wrap(function*(){
      return driver.getPageSource();
    }),

    getText: co.wrap(function*(css){
      return browser.waitFor(css).then(ele=>ele.getText());
    }),

    quit: co.wrap(function*(){
      return driver.quit();
    })

  }

  return browser;
}
