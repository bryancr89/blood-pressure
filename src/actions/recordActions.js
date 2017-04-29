import * as types from '../constants/actionTypes';

export function addRecord(record) {
  const key = 'records';
  const records = JSON.parse(localStorage.getItem(key)) || [];
  localStorage.setItem(key, JSON.stringify([...records, record]));
  return {
    type: types.ADD_NEW_RECORD,
    record
  };
}