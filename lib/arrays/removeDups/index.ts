export const removeDups = <T>(arr: T[]): T[] => {
  return arr.filter(
    (item, index, self) =>
      index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(item)),
  );
};
