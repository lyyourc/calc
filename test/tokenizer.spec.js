const expect = require('chai').expect
const tokenizer = require('../src/tokenizer')

describe('tokenizer()', function() {
  it("should return [{ type: 'number', value: '1' }] if passing '1'", function() {
    expect(tokenizer('1')).to.deep.equal(
      [{ type: 'number', value: '1' }]
    )
  })

  it("should return [{ type: 'paren', value: '(' }] if passing '('", function() {
    expect(tokenizer('(')).to.deep.equal(
      [{ type: 'paren', value: '(' }]
    )
  })

  it(`should return
    [
      { type: 'number', value: '1' },
      { type: 'operator', value: '+', priority: 0 },
      { type: 'number', value: '2' },
    ]
    if passing '1+2'`,
    function() {
      expect(tokenizer('1 + 2')).to.deep.equal(
        [
          { type: 'number', value: '1' },
          { type: 'operator', value: '+', priority: 0 },
          { type: 'number', value: '2' },
        ]
      )
    })
})
