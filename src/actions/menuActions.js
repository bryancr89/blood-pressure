import * as types from '../constants/actionTypes';

export function setMenuStatus(status) {
  return {
    type: types.OPEN_MENU,
    status
  };
}

export function toggleMenu(status) {
  return {
    type: types.TOGGLE_MENU,
    status: !status,
  };
}

export function closeMenu() {
  return {
    type: types.CLOSE_MENU,
    status: false
  };
}