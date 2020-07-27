import React from 'react';

export default props => {
  const buttons = props.buttons;
  const buttonItems = buttons.map(number => (
    <button key={number.toString()} onClick={props.onClick}>
      {number}
    </button>
  ));
  return <div>{buttonItems}</div>;
};
