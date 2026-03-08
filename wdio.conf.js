const { Eyes } = require('@applitools/eyes-webdriverio')
const { HttpsProxyAgent } = require('https-proxy-agent')

const securityToken = "<perfecto security token> "

exports.config = {
  enableEyesLogs: true,

  automationProtocol: 'webdriver',
  protocol: 'https',
  hostname: 'applitools-1.perfectomobile.com',
  port: 443,
  path: '/nexperience/perfectomobile/wd/hub',


  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  sync: false,

  framework: 'mocha',
  mochaOpts: {
    timeout: 120000
  },

  capabilities: [{
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': 'PUBLIC:Demo Application - pristine.ipa',
  'appium:newCommandTimeout': 120,
  'appium:commandTimeouts': 120000,
  'appium:processArguments': JSON.stringify({
    args: [],
    env: {
	DYLD_INSERT_LIBRARIES: '@executable_path/Frameworks/Applitools_iOS.xcframework/ios-arm64/Applitools_iOS.framework/Applitools_iOS:@executable_path/Frameworks/Applitools_iOS.xcframework/ios-arm64_x86_64-simulator/Applitools_iOS.framework/Applitools_iOS:@executable_path/Frameworks/Applitools_iOS.framework/Applitools_iOS',
      APPLITOOLS_API_KEY: process.env.APPLITOOLS_API_KEY,
      APPLITOOLS_SERVER_URL: 'https://eyesapi.applitools.com'
    }
  }),
  
  'perfecto:options': {
    automationName: 'XCUITest',
    deviceName: '00008030-000549C60C90802E',
    securityToken: securityToken,
    waitForAvailableLicense: true
  },

  'applitools:eyes': {
    isMobile: true
  }
}]
}