module.exports = function check(str, bracketsConfig) {
 /* const OPEN_BRACKETS = ['(', '[', '|','{','1','3','5','7','8'];
  const BRACKETS_PAIR = {
    [')']: '(',
    [']']: ']',
    ['|']: '|',
    ['}']: '{',
  };*/
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};
  for (let i = 0; i < bracketsConfig.length; i++){
  OPEN_BRACKETS.push(bracketsConfig[i][0]);
  BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];  
  }
  //console.log(OPEN_BRACKETS, BRACKETS_PAIR);
  let stack = [];
  let stack1 = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if (OPEN_BRACKETS.includes(currentSymbol) && BRACKETS_PAIR[currentSymbol] != currentSymbol)  {
     
      stack.push(currentSymbol);
    } else if (BRACKETS_PAIR[currentSymbol] == currentSymbol && !stack1.includes(currentSymbol))  {
stack1.push(currentSymbol);
    } else 
    {
      if (stack.length === 0 && stack1.length === 0)  {
        return false;
      }

      let topElement;
      if (BRACKETS_PAIR[currentSymbol] === currentSymbol){
        topElement = stack1[stack1.length - 1];
      } else
      topElement = stack[stack.length - 1]; 
     // console.log(topElement, stack, stack1);

      if (BRACKETS_PAIR[topElement] === topElement) {
        stack1.pop();
      } else if(BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else
      {
        return false;
      }
    }
  }

  return stack.length === 0;

};
