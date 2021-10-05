// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import {rootReducer} from './reducers/rootReducer';


// const initialState = {};

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   );
  

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import {searchReducer} from './searchSlice'

const store = configureStore({
    reducer: {
      movies: searchReducer
    }
  })

export default store;
