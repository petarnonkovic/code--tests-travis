const expect = require('chai').expect
const greeting = require('../helpers/greeting')

describe('simple test', function() {
  it('shoult return stringer', function() {
    let userName = 'TravisCI'
    // work
    let result = greeting(userName)
    // assertions | chai.expect
    let expected = `Hello, ${userName}`
    expect(result).to.be.a('string')
    expect(result).to.equal(expected)
  })
})