import client from "./client";
import {
  GSqlSearchByType,
  TBankProduct,
  TClientType
} from "../types";


export type TProductsFilter
  = Partial<Pick<TBankProduct, 'id_bank_product' | 'id_client_type' | 'title' | 'description'>
  & GSqlSearchByType<TBankProduct, 'tariff_price_rub', 'NUMERIC_RANGES'>>

export const api = {
  products: async (filter?: TProductsFilter) => await client.post<TBankProduct[]>('/products', filter),
  clientTypes: async () => await client.get<TClientType[]>('/client_types')
} as const