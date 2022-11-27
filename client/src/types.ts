import {
  ChangeEventHandler,
  FocusEventHandler,
  SVGProps,
} from 'react'

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T
export type AtLeastOne<T, Keys extends keyof T = keyof T> = Partial<T> & { readonly [K in Keys]: Required<Pick<T, K>> }[Keys];


export type TSVGProps = SVGProps<SVGSVGElement>
export type TFalsy = false | 0 | '' | null | undefined


export type InputChangeFn = ChangeEventHandler<HTMLInputElement>
export type InputFocusFn = FocusEventHandler<HTMLInputElement>


export type GSqlSearchByType<O extends object, F extends keyof O & string, T extends 'EQUAL' | 'TEXT' | 'NUMERIC_RANGES'>
  = T extends 'NUMERIC_RANGES'
  ? Record<F | `${F}__e` | `${F}__lt` | `${F}__gt` | `${F}__lte` | `${F}__gte`, number>
  : Record<F, O[F]>
// { F: O[F] }


export type TBankProduct = {
  id_bank_product: number
  title: string
  description: string
  image: string
  id_client_type: number
  client_type: string
  tariff_price_rub: number
}

export type TClientType = {
  id_client_type: number
  client_type: string
}