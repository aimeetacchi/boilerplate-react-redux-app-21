import { combineReducers } from 'redux';

import ExampleReducer from './example'


// Add as many as you like.
const reducers = combineReducers({
    example: ExampleReducer, // Change the name of this

})

export default reducers;