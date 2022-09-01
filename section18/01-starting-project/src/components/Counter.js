import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from './store/index';
const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//   }

//   incrementHandler() {
//     this.props.increment();
//   };
//   decrementHandler() {
//     this.props.decrement();
//   };
//   toggleCounterHandler() {};
  
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={() => this.incrementHandler()}>Increment</button>
//           <button onClick={() => this.decrementHandler()}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'})
//   }
// }

export default Counter;

//use class component connect(mapStateToProps, mapDispatchToProps)(Counter)