export function decodeString(s: string): string {
  const stack: [string, number][] = [];
  let currentString = "";
  let currentNum = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      stack.push([currentString, currentNum]);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      const [prevString, count] = stack.pop()!;
      currentString = prevString + currentString.repeat(count);
    } else {
      currentString += char;
    }
  }

  return currentString;
}
