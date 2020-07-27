import React from 'react';
import { connect } from 'dva';
import Calculator from '../components/Calculator';
import ButtonList from '../components/ButtonList';

const Calc = props => {
  /* const { value, display, numberArr, dispatch } = props;
  console.log('index.js - value1:'+value1)
  console.log('index.js - value:', value);
  console.log('index.js - props:', props);
  console.log('index.js - display:', display); */

  /* const clickHandler = val =>
    dispatch({ type: 'calc/clickHandler', payload: { value: val } }); */

  const { display, numberArr, dispatch } = props;
  const clickHandler = () =>
    dispatch({
      type: 'calc/clickHandler',
      payload: { ButtonTxt: event.target.innerText },
    });

  return (
    <div>
      {/* <input type="text" id="display" value={display} readOnly />
      <div>
        <ButtonList buttons={numberArr[0]} onClick={clickHandler}></ButtonList>
        <ButtonList buttons={numberArr[1]} onClick={clickHandler}></ButtonList>
        <ButtonList buttons={numberArr[2]} onClick={clickHandler}></ButtonList>
        <ButtonList buttons={numberArr[3]} onClick={clickHandler}></ButtonList>
      </div> */}

      <Calculator
        display={display}
        numberArr={numberArr}
        onClick={clickHandler}
      />
    </div>
  );
};

export default connect(({ calc }) => calc)(Calc);
