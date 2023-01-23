export type ExtractSinglePropType<TObj, TProp extends keyof TObj> = Record<
  TProp,
  TObj[TProp]
>;

export type ExtractSingleType<TObj, TProp extends keyof TObj> = TObj[TProp];
