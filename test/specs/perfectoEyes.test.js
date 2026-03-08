const { Eyes, Target, FileLogHandler } = require('@applitools/eyes-webdriverio');

describe('Perfecto iOS Native', () => {
  let eyes;

  before(() => {
    eyes = new Eyes();
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
    eyes.setLogHandler(new FileLogHandler(true));
  });

  it('Visual check', async () => {


  await eyes.open(browser, 'Perfecto iOS App', 'Main Screen');

    //Regular NML Screenshot
    await eyes.check("This is NML Screenshot",Target.window());

    //System Screenshot
    //await eyes.check(Target.window().useSystemScreenshot());

    await eyes.close();
  });

  after(async () => {
    await eyes.abortIfNotClosed();
  });
});