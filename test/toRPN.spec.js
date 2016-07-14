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

  it('should return `12+34*5/-` if passing `1+2-3*4/5`', function() {
    expect(tokensToString(toRPN(tokenizer('1+2-3*4/5'))))
      .to.equal('12+34*5/-')
  })

  it('should return `13+42/*` if passing `(1+3)*(4/2)`', function() {
    const rpn = toRPN(tokenizer('(1+3)*(4/2)'))
    expect(tokensToString(rpn)).to.equal('13+42/*')
  })

  it('should return `4031-+` if passing `40+(3-1)`', function() {
    const rpn = toRPN(tokenizer('40+(3-1)'))
    expect(tokensToString(rpn)).to.equal('4031-+')
  })

  it('shoudl return `3242-+*` if passing `3*(2+(4-2))`', function() {
    const rpn = toRPN(tokenizer('3*(2+(4-2))'))
    expect(tokensToString(rpn)).to.equal('3242-+*')
  })
})
