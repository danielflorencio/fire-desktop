
export const reducer = (state = 5) => {
    return state;
} // Reducers receive a state and return a new different state.

export const store = Redux.createStore(reducer) // Store are objects that 'store' all the states in a react application.

const currentState = store.getState() // gets the state from the store


// In Redux, all state updates are triggered by dispatching actions. 
// An action is simply a JavaScript object that contains information about an action event that has occurred. 
// The Redux store receives these action objects, then updates its state accordingly. 
// Sometimes a Redux action also carries some data. 
// For example, the action carries a username after a user logs in. 
// While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.

// Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. 
// The store then conducts the business of updating state based on the action that occurred.

// Writing a Redux action is as simple as declaring an object with a type property. 
// Declare an object action and give it a property type set to the string 'LOGIN'.

const action = {
    type: 'LOGIN'
}

// After creating an action, the next step is sending the action to the Redux store so it can update its state. 
// In Redux, you define action creators to accomplish this. 
// An action creator is simply a JavaScript function that returns an action. 
// In other words, action creators create objects that represent action events.

// Define a function named actionCreator() that returns the action object when called.

const actionCreator = () => {
    return action;
}

dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

const store = Redux.createStore(
    (state = {login: false}) => state
);
  
const loginAction = () => {
    return {
      type: 'LOGIN'
    }
};
  
// Dispatch the action here:

store.dispatch(loginAction());

// // // // 

// Handle an Action in the Store

// After an action is created and dispatched, the Redux store needs to know how to respond to that action. 
// This is the job of a reducer function. 
// Reducers in Redux are responsible for the state modifications that take place in response to actions. 

// A reducer takes state and action as arguments, and it always returns a new state. 
// It is important to see that this is the only role of the reducer. 
// It has no side effects — it never calls an API endpoint and it never has any hidden surprises. 
// The reducer is simply a pure function that takes state and action, then returns new state.

// Another key principle in Redux is that state is read-only. 
// In other words, the reducer function must always return a new copy of state and never modify state directly. 
// Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. 

// The code editor has the previous example as well as the start of a reducer function for you. 
// Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. 
// Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.

// const defaultState = {
//     login: false
//   };
  
//   const reducer = (state = defaultState, action) => {
//     // Change code below this line
//     if (action.type === 'LOGIN'){
//       state = {
//         login: true
//       }
//     }
//     return state;
//     // Change code above this line
//   };
  
//   const store = Redux.createStore(reducer);
  
//   const loginAction = () => {
//     return {
//       type: 'LOGIN'
//     }
//   };

Use a Switch Statement to Handle Multiple Actions

You can tell the Redux store how to handle multiple action types. 
Say you are managing user authentication in your Redux store. 
You want to have a state representation for when users are logged in and when they are logged out. 
You represent this with a single state object with the property authenticated. 
You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.



The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state.

Note: At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object — for example, {authenticated: true}. Also, don't forget to write a default case in your switch statement that returns the current state. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current state.


const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type){
      case 'LOGIN':
        return {
          authenticated: true
        };
      case 'LOGOUT':
        return {
          authenticated: false
        }
      case defaultState:
        return defaultState
    }
    return state
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };