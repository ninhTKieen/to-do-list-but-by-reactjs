// import {Map} from 'immutable'
// import {produce} from 'immer'
// // let book = Map({title : "Lord of the rings"});
// let book = {title : "Harry Potter"}
// // function publish(books) {
// //   return books.set("isPublished", true);
// // }

// // function publish(books) {
// //   return produce(books, newBook => {
// //     newBook.information = {
// //       author : "J.K.Rowling",
// //       isPublish : true
// //     }
// //   })
// // }
// // book = publish(book);
// // console.log(book);
// // let updated = publish(book);
// // console.log(updated);

// const baseState = [
//   {
//     todo : "Learn JS",
//     done : true
//   },
//   {
//     todo : "Learn ImmerJS",
//     done : false
//   }
// ];

// function changeState(state) {
//   return produce(state, drafState => {
//     drafState.push({todo : "Post Facebook to show off", done : false})
//     drafState[1].done = true;
//   })
// }

// console.log(changeState(baseState));

import {configureStore} from '@reduxjs/toolkit'
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/incremented') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}

const store = configureStore({reducer : counterReducer});
store.dispatch({type : 'counter/incremented'});

console.log(store.getState());