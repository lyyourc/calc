const expect = require('chai').expect

const tokenizer = require('../src/tokenizer')
const toRPN = require('../src/toRPN')
const tokensToString = require('../src/util/tokensToString')

describe('toRPN()', function() {
  it('toRPN() should return a array', function() {
    expect(toRPN()).to.be.a('array')
  })

  it('should return `342*+` if passing `3+4*2`', function() {
    expect(tokensToString(toRPN(tokenizer('3+4*2'))))
      .to.equal('342*+')
  })

  it('should return `1+2-3*4/5` if passing `12+34*5/-`', function() {
    expect(tokensToString(toRPN(tokenizer('1+2-3*4/5'))))
      .to.equal('12+34*5/-')
  })
})
