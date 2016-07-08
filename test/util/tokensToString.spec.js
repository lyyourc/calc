const expect = require('chai').expect

const tokenizer = require('../../src/tokenizer')
const tokensToString = require('../../src/util/tokensToString')

describe('tokensToString()', function() {
  it('should return a string', function() {
    expect(tokensToString(tokenizer())).to.be.a('string')
  })

  it('should return `1+2*3` if passing', function() {
    expect(tokensToString(tokenizer('1+2*3')))
      .to.equal('1+2*3')
  })
})
