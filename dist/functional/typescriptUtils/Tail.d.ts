export type Tail<T extends any[]> = ((...t: T) => any) extends (_: any, ...tail: infer TT) => any ? TT : [];
//# sourceMappingURL=Tail.d.ts.map