const tokenizer = (
  input = ''
) => {
  const tokens = []
  let current = 0

  while (current < input.length) {
    let char = input[current]

    if (char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        value: char,
      })

      current++

      continue
    }

    const OPERATORS = /\+|-|\*|\//
    if (OPERATORS.test(char)) {
      tokens.push({
        type: 'operator',
        value: char,
      })

      current++

      continue
    }

    const NUMBERS = /\d/
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: 'number',
        value,
      })

      continue
    }

    throw new TypeError('Sorry, I dont know this char :(', char)
  }

  return tokens
}

module.exports = tokenizer
