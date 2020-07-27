export default {
  namespace: 'calc',
  state: {
    value: 0,
    numbers: '0123456789',
    operators: '+-*/',
    numberArr: [
      ['1', '2', '3', '+'],
      ['4', '5', '6', '-'],
      ['7', '8', '9', '*'],
      ['0', 'C', '=', '/'],
    ],
    states: {
      Init: 0,
      LeftInput: 1,
      OpInput: 2,
      RightInput: 3,
      Equal: 4,
    },
    left: '',
    op: '',
    right: '',
    display: 0,
    calcState: 0,
    // calcState : states.Init,
  },
  effects: {
    *redirect({ payload }, { call, select, put }) {},
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    /* evalHandler() {
            display = eval(left + op + right).toString();
            left = display;
        }, */
    clickHandler(state, { payload }) {
      var buttonText = event.target.innerText;
      console.log('button txt:' + buttonText);
      if (buttonText == '=') {
        if (state.calcState === state.states.OpInput) {
          state.right = state.left;
          // state.evalHandler;
          state.display = eval(state.left + state.op + state.right).toString();
          state.left = state.display;
        } else if (state.calcState === state.states.RightInput) {
          state.right = state.display;
          // state.evalHandler;
          state.display = eval(state.left + state.op + state.right).toString();
          state.left = state.display;
        } else if (state.calcState === state.states.Equal) {
          // state.evalHandler;
          state.display = eval(state.left + state.op + state.right).toString();
          state.left = state.display;
        } else if (
          state.calcState === state.states.Init ||
          state.calcState === state.states.LeftInput
        ) {
          state.left = state.display;
          state.op = state.right = '';
        }
        state.calcState = state.states.Equal;
      } else if (state.numbers.includes(buttonText)) {
        if (
          state.calcState === state.states.Init ||
          state.calcState === state.states.Equal
        ) {
          // console.log('states Init' + state.display);
          state.display = buttonText;
          state.calcState = state.states.LeftInput;
          // console.log('states Init after' + state.display);
          // console.log('calcState' + state.calcState);
        } else if (
          state.calcState === state.states.LeftInput ||
          state.calcState === state.states.RightInput
        ) {
          // console.log('states LeftInput' + state.display);
          if (state.display == '0') state.display = buttonText;
          else state.display += buttonText;
        } else if (state.calcState === state.states.OpInput) {
          state.display = buttonText;
          state.calcState = state.states.RightInput;
        }
      } else if (state.operators.includes(buttonText)) {
        if (
          state.calcState === state.states.Init ||
          state.calcState === state.states.Equal ||
          state.calcState === state.states.LeftInput
        ) {
          state.left = state.display;
          state.op = buttonText;
        } else if (state.calcState === state.states.OpInput) {
          state.op = buttonText;
        } else if (state.calcState === state.states.RightInput) {
          state.right = state.display;
          // state.evalHandler;
          state.display = eval(state.left + state.op + state.right).toString();
          state.left = state.display;
          state.op = buttonText;
        }
        state.calcState = state.states.OpInput;
      } else if (buttonText == 'C') {
        state.display = '0';
        state.left = state.op = state.right = null;
        state.calcState = state.states.Init;
      }
      state.value = state.display;
      // this.updateState(display);
      console.log('display:' + state.display);
      console.log('value:' + state.value);
      //this
      return {
        ...state,
        ...payload,
      };
    },
  },
};
