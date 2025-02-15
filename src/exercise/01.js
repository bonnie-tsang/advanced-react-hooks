// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react';


const countReducer = (state, action) => {

  switch(action.type) {
    case "INCREMENT" : {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }



  // ...state,
  // ...(typeof action === "function" ? action(state) : action),
}

function Counter({initialCount = 0, step = 1}) {

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const {count} = state;
  const increment = () => dispatch({type: "INCREMENT", step});
  // const increment = () => setState(currentState => ({count: currentState.count + step}));
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App



















// // useReducer: simple Counter
// // http://localhost:3000/isolated/exercise/01.js

// import * as React from 'react';
// import { useState, useReducer } from 'react';


// type CounterProps = {
//   initialCount?: number,
//   step?: number,
// };


// type CounterState = {
//   count: number,
//   label: string,
// };


// type ActionType = 'label' | 'count';
// type Action = UpdateCount | UpdateLabel;
// type UpdateCount = {
//   type: 'count',
//   step: number,
// };
// type UpdateLabel = {
//   type: 'label',
//   label: string,
// };


// /**
//  * REDUCER
//  */
// const stateReducer = (prevState: CounterState, action: Action): CounterState => {
//   let result: CounterState = prevState;

//   switch(action.type){
//     case 'count': 
//       result = {
//         ...prevState,
//         count: prevState.count + action.step,
//       };
//       break;

//     case 'label': 
//       result = {
//         ...prevState,
//         label: action.label,
//       };
//       break;
//   }

//   return result;
// };


// /**
//  * COMPONENT
//  */
// const Counter: React.FC<CounterProps> = function Counter(props) {
//   const {
//     initialCount = 0,
//     step = 1,
//   } = props;

//   const [oldState, setOldState] = useState<CounterState>({
//     count: initialCount,
//     label: 'My label',
//   });

//   const [state, setState] = useReducer(stateReducer, {
//     count: initialCount,
//     label: 'My label',
//   });




//   const { count } = state;
//   const handleClick = () => {

//     setOldState((prevState: CounterState): CounterState => {
//       const nextCount = {
//         count: count + step,
//       };

//       const newState: CounterState = {
//         ...prevState,
//         ...nextCount,
//       };
//       return newState;
//     });


//     setState({
//       type: 'count',
//       step: step,
//     });

//   };

//   return (<button onClick={handleClick}>{ state.label }: { count }</button>);
// }

// function App() {
//   return <Counter />
// }

// export default App
