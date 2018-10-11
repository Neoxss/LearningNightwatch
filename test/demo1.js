module.exports = {
    '@tags': ['demo1'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title(`Google`)
        .setValue('input[type=text]', ['Barack Obama', client.keys.ENTER])
        .waitForElementVisible('input[name=btnK]', 1000)
        .click('input[name=btnK]')
        .pause(5000)
        .assert.containsText("#rso > div:nth-child(1) > div > div > div > div.r > a > h3", "Barack Obama",)
        .end();
    }
  };