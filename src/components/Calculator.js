import React from 'react';
import ButtonList from './ButtonList';

export default props => {
  const { value, setDisplay } = props;

  var numbers = '0123456789';
  var operators = '+-*/';
  var left, op, right;
  const states = {
    Init: 0,
    LeftInput: 1,
    OpInput: 2,
    RightInput: 3,
    Equal: 4,
  };
  var display = 0;
  const numberArr = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['0', 'C', '=', '/'],
  ];
  var calcState = states.Init;

  function evalHandler() {
    display = eval(left + op + right).toString();
    left = display;
  }

  function clickHandler(e) {
    var buttonText = e.target.innerText;
    console.log('button txt:' + buttonText);

    if (buttonText == '=') {
      if (calcState === states.OpInput) {
        right = left;
        evalHandler();
      } else if (calcState === states.RightInput) {
        right = display;
        evalHandler();
      } else if (calcState === states.Equal) {
        evalHandler();
      } else if (calcState === states.Init || calcState === states.LeftInput) {
        left = display;
        op = right = '';
      }
      calcState = states.Equal;
    } else if (numbers.includes(buttonText)) {
      if (calcState === states.Init || calcState === states.Equal) {
        console.log('states Init' + display);
        display = buttonText;
        calcState = states.LeftInput;
        console.log('states Init after' + display);
        console.log('states' + calcState);
      } else if (
        calcState === states.LeftInput ||
        calcState === states.RightInput
      ) {
        console.log('states LeftInput' + display);
        if (display == '0') display = buttonText;
        else display += buttonText;
      } else if (calcState === states.OpInput) {
        display = buttonText;
        calcState = states.RightInput;
      }
    } else if (operators.includes(buttonText)) {
      if (
        calcState === states.Init ||
        calcState === states.Equal ||
        calcState === states.LeftInput
      ) {
        left = display;
        op = buttonText;
      } else if (calcState === states.OpInput) {
        op = buttonText;
      } else if (calcState === states.RightInput) {
        right = display;
        evalHandler();
        op = buttonText;
      }
      calcState = states.OpInput;
    } else if (buttonText == 'C') {
      display = '0';
      left = op = right = null;
      calcState = states.Init;
    }
    setDisplay(display);
    console.log('display:' + display);
    // console.log('value' + this.state.value)
  }
  return (
    <div>
      {/* <h2>{value}</h2> */}
      <input type="text" id="display" value={value} readOnly />
      <div>
        <ButtonList buttons={numberArr[0]} onClick={clickHandler}></ButtonList>
        <ButtonList buttons={numberArr[1]} onClick={clickHandler}></ButtonList>
        <ButtonList buttons={numberArr[2]} onClick={clickHandler}></ButtonList>
        <ButtonList buttons={numberArr[3]} onClick={clickHandler}></ButtonList>
      </div>
    </div>
  );
};
