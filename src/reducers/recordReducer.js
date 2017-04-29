import objectAssign from 'object-assign';
import moment from 'moment';
import { ADD_NEW_RECORD } from '../constants/actionTypes';
import initialState from './initialState';

const recordReducer = (state = initialState.record, action) => {
  switch (action.type) {
    case ADD_NEW_RECORD:
      return objectAssign({}, state, action.record, {
        date: moment(action.record.date)
      });
    default:
      return state;
  }
};

export default function recordsReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_RECORD:
      return [...state, recordReducer(undefined, action)];
    default:
      return state;
  }
}
