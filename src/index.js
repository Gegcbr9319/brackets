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
 

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if (OPEN_BRACKETS.includes(currentSymbol) && BRACKETS_PAIR[currentSymbol] === undefined)  {
     
      stack.push(currentSymbol);
    } else if (BRACKETS_PAIR[currentSymbol] === currentSymbol && !stack.includes(currentSymbol) && OPEN_BRACKETS.includes(currentSymbol))  {
stack.push(currentSymbol);
    } else 
    {
      if (stack.length === 0)  {
        return false;
      }

      let topElement = stack[stack.length - 1]; ;
      if (BRACKETS_PAIR[currentSymbol] === topElement){
        stack.pop();
           } else
      {
        return false;
      }
    }
  }

  return stack.length === 0;

};
