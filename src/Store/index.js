// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";


//combined two reducer one
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };



// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return {...store , counter: store.counter + 1 ,};
//   } else if (action.type === "DECREMENT") {
//     return {...store ,  counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return {...store ,  counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "PRIVACY") {
//     return {...store ,  privacy: store.privacy ? false : true };
//   }
//   return store;
// };

// const counterStore = createStore(counterReducer);



