import { shallowClone } from './objects';

// checks for vals at top level
export const missingVals = <T>(arr: T[], vals: T[]): T[] =>
  vals.filter((val) => !arr.includes(val));

// checks for vals at top level or at key
export const valsExistInArray = <T>(arr: T[], vals: T[], key: string): boolean[] =>
  vals.map((val) => (key ? !!arr.find((a) => a[key] === val) : arr.indexOf(val) !== -1));

// checks for vals at top level or at key
export const removeArrayValues = <T>(arr: T[], vals: T[], key: string): T[] =>
  arr.reduceRight(
    (accum, item, i) =>
      key
        ? vals.indexOf(item[key]) !== -1
          ? accum.toSpliced(i, 1)
          : accum
        : vals.indexOf(item) !== -1
          ? accum.toSpliced(i, 1)
          : accum,
    [...arr],
  );

export const removePrimitiveDups = <T>(arr: T[]): T[] => [...new Set(arr)];
