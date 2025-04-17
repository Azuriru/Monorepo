export type Falsey = false | 0 | -0 | 0n | '' | null | undefined | typeof NaN;

export type Truthy<T> = Exclude<T, Falsey>;

export type ValueOf<T> = T[keyof T];

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PatchBy<Initial, Overwrite> = Omit<Initial, keyof Overwrite> & Overwrite;

export type ReplaceWith<T, K extends keyof T, V> = Omit<T, K> & Record<K, V>;

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

export type Booleanish = boolean | 'true' | 'false';

export type ObjectProperty = number | string; // no sane person uses Symbol, ok.
