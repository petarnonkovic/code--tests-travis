const expect = require('chi').expect
const server = require('../index')

describe('simple test', function() {
  it('shoult return string', function() {
    expect('ci with travis').to.equel('ci with travis')
  })
})