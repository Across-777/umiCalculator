import React from 'react';
import ButtonList from './ButtonList';

export default props => {
  const { display } = props;

  return (
    <div>
      <input type="text" id="display" value={display} readOnly />
      <div>
        <ButtonList buttons={numberArr[0]} onClick={props.onClick}></ButtonList>
        <ButtonList buttons={numberArr[1]} onClick={props.onClick}></ButtonList>
        <ButtonList buttons={numberArr[2]} onClick={props.onClick}></ButtonList>
        <ButtonList buttons={numberArr[3]} onClick={props.onClick}></ButtonList>
      </div>
    </div>
  );
};
