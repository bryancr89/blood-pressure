import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import records from './recordReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
  records,
  menu,
  routing: routerReducer
});

export default rootReducer;
