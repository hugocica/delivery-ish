import { Types } from './types';

const INITIAL_STATE = {
  list: [],
};

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.SET_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
