import en from '../language/en.json';

const keys = Object.entries(en);
type TranslationType = typeof en;

function mapInnerObject(
  key: string,
  data: object | string,
  prefix?: string,
): object | string {
  if (typeof data === 'string') return prefix || key;
  const entries = Object.entries(data);

  return entries.reduce(
    (prev, [keyL, value]) => ({
      ...prev,
      [keyL]: mapInnerObject(keyL, value as object, `${prefix || key}.${keyL}`),
    }),
    {} as typeof data,
  );
}

const translations: TranslationType = keys.reduce(
  (acc, [key, value]) => ({...acc, [key]: mapInnerObject(key, value)}),
  {} as TranslationType,
);

export default translations;
