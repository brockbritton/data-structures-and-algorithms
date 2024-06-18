function validateBrackets(string) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of string) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (brackets[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


console.log(validateBrackets("(){}[]"));
console.log(validateBrackets("([{}])"));
console.log(validateBrackets("({[)]}"));
console.log(validateBrackets("((("));
console.log(validateBrackets(""));
