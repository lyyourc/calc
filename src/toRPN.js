const Stack = require('./util/Stack')

const toRPN = (
  tokens = []
) => {
  const operatorStack = new Stack()
  const RPN = []

  tokens.forEach((token, index) => {
    const { type, priority, value } = token

    if (type === 'number') {
      RPN.push(token)
    }

    if (type === 'operator' || type === 'paren') {
      if (operatorStack.top == null) {
        operatorStack.push(token)
        return
      }

      while (
        operatorStack.top &&
        priority <= operatorStack.top.value.priority
      ) {
        RPN.push(operatorStack.pop())
      }

      operatorStack.push(token)
    }

    if (index === tokens.length - 1) {
      while (operatorStack.top) {
        RPN.push(operatorStack.pop())
      }
    }
  })

  return RPN
}

module.exports = toRPN
