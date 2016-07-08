const chai = require('chai')
const expect = chai.expect

const Stack = require('../../src/util/Stack')

describe('Stack Class', function() {
  it('`Stack` should be a Class', function() {
    expect(Stack).to.be.a('function')
  })

  it('instance of `Stack` should have prop `top`, `push` & `pop`', function() {
    const stack = new Stack
    expect(stack).to.have.property('top')
    expect(stack).to.have.property('push')
    expect(stack).to.have.property('pop')
  })

  const stack = new Stack()
  const ex = { loved: true }
  const next = { loved: true }
  it('push()', function() {
    stack.push(ex)
    expect(stack.top.value).to.deep.equal(ex)

    stack.push(next)
    expect(stack.top.value).to.deep.equal(next)
    expect(stack.top.prev.value).to.deep.equal(ex)
  })

  it('pop()', function() {
    expect(stack.pop()).to.deep.equal(next)
    expect(stack.pop()).to.deep.equal(ex)
  })
})
