import { Types } from './types';

export function SetProductsList(payload: any) {
  return {
    type: Types.SET_PRODUCTS,
    payload,
  };
}
