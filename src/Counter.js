import React, { useState, useEffect, useReducer } from "react";

// useEffect hook when:
//   After our component is first rendered. This corresponds to the componentDidMount lifecycle method.
//   When a state variable in our component changes. This corresponds to looking at the prevState variable available in the componentDidUpdate lifecycle method to determine if state has changed, and to only make an update if it has.
//   After every re-render of our component. This corresponds to the componentDidUpdate lifecycle method.

// useEffect:
//   useEffect is first run after the first render of the component.
//   Without further configuration, useEffect runs after every re-render of the component.
//   useEffect takes a callback function as an argument, which acts as our "effect". This function is called every time the useEffect hook runs.
//   useEffect doesn't return anything.

const initialState = {
  counter: 0
}


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      };
    case 'decrement':
      return {
        counter: state.counter - 1
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}

function Counter() {
    // Here we've replaced the useState hook originally used for counter state.
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [counter, setCounter] = useState(0);

useEffect(() => {
  // Now we need to access state.counter to get the counter value.
  console.log('effect');
  document.title = state.counter;
}, [state.counter]);
// second argument to our useEffect hook: [counter]. This second argument is called a dependency array, and it can contain one or more state variables or props within it. When we add a dependency array to our useEffect hook, we're saying that whether our effect should run depends on whether the value of the state variables in our dependency array have changed

// adding a dependency array to the useEffect hook performs the same functionality as comparing prevState with current state in a componentDidUpdate lifecycle method
      // componentDidUpdate(prevProps, prevState) {
      //   if (prevState.counter !== this.state.counter) {
      //     document.title = counter;
      //   }
      // }  

  return(
    <React.Fragment>
      <h1>{state.counter}</h1>
      {/* <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button> */}
      {/* Now we use dispatch() to send an action to our reducer to update state. */}
      <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>

    </React.Fragment>
  )
}

export default Counter;


// Only call hooks at the top level of a function component. Don’t call hooks inside loops, conditions, or nested functions.
// Only call hooks from React function components. Don’t call hooks from regular JavaScript functions (unless you are creating a custom hook) or class components.

//Best Practices for hooks
    // 1. Use multiple hooks to handle different concerns.
    // For example, it's better to use multiple useState hooks to handle different state variables, instead of grouping them into one useState hook.
    // 2. You should also use multiple useEffect hooks to manage different effects. Doing so practices separation of concerns and is a huge benefit with the useEffect hook.
    // Convention dictates that the name of custom hooks should start with "use", like useState or useTimer. Later in this lesson, we'll create a custom hook called useTimer!
    // Take note that the ESLint plugin for React hooks relies on this naming convention to identify hooks and any issues with them.
