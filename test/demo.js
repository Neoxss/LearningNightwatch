module.exports = {
    '@tags': ['demo'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title(`Google`)
        .setValue('input[type=text]', ['rembrandt van rijn', client.keys.ENTER])
        .waitForElementVisible('input[name=btnK]', 1000)
        .pause(2000)
        .click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
        .pause(5000)
        .assert.containsText('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a > h3','Rembrandt - Wikipedia')
        .end();
    }
  };