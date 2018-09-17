import { combineReducers } from 'redux';

import Items from "./reducer_items";


const rootReducer = combineReducers({

    items:Items,


});

export default rootReducer;
