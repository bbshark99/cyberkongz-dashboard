declare type BigNumberish = import('@ethersproject/bignumber').BigNumberish

type AnyObject<T = any> = Record<string, T>
type AnyFunction = (...args: any[]) => any

type AllowArray<T> = T | T[]

type ValuesOf<T> = T[keyof T]

type Modify<T, R> = Omit<T, keyof R> & R

type AllOrNone<T> = T | { [K in keyof T]?: never }
