// Helper function to check if a character is alphanumeric
function isAlphanumeric(char: string): boolean {
  return /[a-zA-Z0-9]/.test(char);
}

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isAlphanumeric(s[left])) {
      left++;
    }

    while (!isAlphanumeric(s[right])) {
      right--;
    }

    if(left >= right){
        break;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
