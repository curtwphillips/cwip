import { missingVals } from './arrays';

export const existy = <T>(val: T): boolean => typeof val !== 'undefined' && val !== null;

export const truthy = <T>(val: T): boolean => val !== false && existy(val);

export const containsString = (string: string, substr: string, sensitive = false): boolean =>
  sensitive ? string.indexOf(substr) > -1 : string.toUpperCase().indexOf(substr.toUpperCase()) > -1;

export const isPrimitive = <T>(val: T): boolean =>
  val === null || !(typeof val == 'object' || typeof val == 'function');

export const isObject = <T>(val: T): boolean =>
  typeof val === 'object' && val !== null && !Array.isArray(val);

export const missingKeys = <T>(obj: T, keys: string[]): string[] =>
  missingVals(Object.keys(obj), keys);

// return true if all keys in obj are not existy or empty arrays or empty objects
export const isEmpty = <T>(obj: T): boolean =>
  isPrimitive(obj)
    ? !existy(obj)
    : Array.isArray(obj)
      ? obj.every((a) => isEmpty(a))
      : Object.keys(obj).every((k) =>
          Array.isArray(obj[k])
            ? obj[k].every((a) => isEmpty(a))
            : isObject(obj[k])
              ? isEmpty(obj[k])
              : !existy(obj[k]),
        );