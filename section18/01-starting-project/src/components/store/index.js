import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({
  counter: counterSlice.reducers
});
// const counterReducer = (state = initialState, action) => {
//   if(action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if(action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if(action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }
//   return state;
// };

export const counterActions = counterSlice.actions;
export default store;

// 절대 state를 변형시키지 않는다.