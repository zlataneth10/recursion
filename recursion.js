function isPalindrome(word) {
    // Stop condition
    if (word.length <= 1) {
      return true;
    }
    
    // Compare characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
      // Test the rest of the word
      return isPalindrome(word.slice(1, word.length - 1));
    } else {
      return false;
    }
  }
  
  // Example usage
  console.log(isPalindrome("gag")); // true
  console.log(isPalindrome("kayak")); // true
  console.log(isPalindrome("php")); // true
  console.log(isPalindrome("radar")); // true
  console.log(isPalindrome("hello")); // false
  