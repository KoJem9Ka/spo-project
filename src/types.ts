import {
  ChangeEventHandler,
  FocusEventHandler,
  SVGProps,
} from 'react'


export type InputChangeFn = ChangeEventHandler<HTMLInputElement>
export type InputFocusFn = FocusEventHandler<HTMLInputElement>

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T
export type AtLeastOne<T, Keys extends keyof T = keyof T> = Partial<T> & { readonly [K in Keys]: Required<Pick<T, K>> }[Keys];

export type TSVGProps = SVGProps<SVGSVGElement>

export type TFalsy = false | 0 | '' | null | undefined
