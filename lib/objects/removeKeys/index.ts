import { Obj } from '../../ts-types';

export const removeKeys = (keys: string[], obj: Obj): Obj => {
  for (let i = 0; i < keys.length; i++) {
    delete obj[keys[i]];
  }
  return obj;
};
