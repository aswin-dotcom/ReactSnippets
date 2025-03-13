import React, { useReducer } from "react";
 
const task ={
  increment:'increment',
  decrement:'decrement',
}
function reducerfn(state, action) {
  switch (action.type) {
    case task.increment:
      return { count: state.count + 1 };
    case task.decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducerfn, { count: 0 });

  function increment() {
    dispatch({ type: task.increment });
  }
  function decrement() {
    dispatch({ type: task.decrement });
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{state.count}</p>
      <button onClick={decrement}>+</button>
    </div>
  );
};

export default App;

//this can be done using react
// when we want to perform more than three operation on a state variable we can use use -> usereducer
