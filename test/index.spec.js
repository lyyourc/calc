const chai = require('chai')
const expect = chai.expect

const calc = require('../src/')

describe('calc()', function() {
  it('`calc` should be a function', function() {
    expect(calc).to.be.a('function')
  })

  // it('should be return `NaN if passing empty string or nothing', function() {
  //   expect(Number.isNaN(calc())).to.equal(true)
  // })

  it('should return `2.5` if passing `1+2*3/4`', function() {
    expect(calc('1+2*3/4')).to.equal(2.5)
  })

  it('should `8` return if passing `4/2*3-1+2*3/2`', function() {
    expect(calc('4/2*3-1+2*3/2')).to.equal(8)
  })
})
