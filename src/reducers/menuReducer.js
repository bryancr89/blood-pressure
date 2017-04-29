import { OPEN_MENU, TOGGLE_MENU, CLOSE_MENU } from '../constants/actionTypes';


export default function recordsReducer(state = false, action) {
  switch (action.type) {
    case OPEN_MENU:
      return true;
    case TOGGLE_MENU:
      return !action.value;
    case CLOSE_MENU:
      return false;
    default:
      return state;
  }
}
