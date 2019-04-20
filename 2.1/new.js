function isClearString(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      return true;
    } else return false; 
  }
}

isClearString('The weather is hella good today tho!', ['hella', 'tho']);
isClearString("I'm gonna be happy!", [";", "?", ".."]);