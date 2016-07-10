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

    if (type === 'operator') {
      while (
        operatorStack.top &&
        priority <= operatorStack.top.value.priority
      ) {
        RPN.push(operatorStack.pop())
      }

      operatorStack.push(token)
    }

    if (type === 'paren') {
      if (value === '(') {
        operatorStack.push(token)
      } else {
        while (operatorStack.top && operatorStack.top.value.value !== '(') {
          RPN.push(operatorStack.pop())
        }
        if (operatorStack.top && operatorStack.top.value.value === '(') operatorStack.pop()
      }
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
