import { compact } from 'lodash'
import { TFalsy }  from './types'



export const join = ( ...strings: (string | TFalsy)[] ): string => compact( strings ).join( ' ' )


export const { format: formatCurrency } = new Intl.NumberFormat( 'ru', {
  style:                 'currency',
  currency:              'RUB',
  maximumFractionDigits: 0,
} )