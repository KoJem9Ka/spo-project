import React, {
  ChangeEventHandler,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  TBankProduct,
  TClientType
} from "../types";
import {
  api,
  TProductsFilter
} from "../api/api";
import { formatCurrency2 } from "../utils";
import {
  isEmpty,
  isNil,
  isNumber,
  pickBy
} from "lodash";
import { IconSearch } from "../assets/icons";


type Props = {}
const BankProductsList: FC<Props> = () => {
  const [products, setProducts] = useState<TBankProduct[] | null>(null)
  const [clientTypes, setClientTypes] = useState<TClientType[]>([])
  const [filters, setFilters] = useState<TProductsFilter>({})
  const selectionTypeRef = useRef<HTMLSelectElement>(null)
  const selectionValueRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)

  const handler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = useCallback(({currentTarget: {name, value}}) => {
    setFilters(prevState => {
      let nextState: TProductsFilter = {}
      if (['title', 'description'].includes(name))
        nextState = {...prevState, [name]: value}
      else if (['id_client_type'].includes(name))
        nextState = {...prevState, [name]: value ? +value : undefined}
      else if (['tariff_price_rub'].includes(name))
        nextState = {
          ...pickBy(prevState, (v, k) => !k.startsWith(name)),
          [name + selectionTypeRef.current?.value]: selectionValueRef.current?.value.replace(/[^0-9.-]/g, '')
        }
      return pickBy(nextState, (v) => !isNil(v) && v !== '' && (!isNumber(v) || !isNaN(v)))
    })
  }, [])

  useEffect(() => {
    api.clientTypes().then(({data}) => {
      setError(null)
      setClientTypes(data);
    }).catch(e => setError(e.message))
  }, [])

  useEffect(() => {
    api.products(filters).then(({data}) => {
      setError(null)
      setProducts(data);
    }).catch(e => setError(e.message))
  }, [filters])

  useEffect(() => {
    error && alert(error)
  }, [error])

  return <div className='container py-24'>
    <h2 className='text-center py-24'>Банковские продукты</h2>
    <div className='pb-24 flex justify-center gap-10'>
      <input name='title'
             className='border border-1 rounded-4 border-cadetBlueCrayola px-8 py-4'
             type="text"
             placeholder='Заголовок'
             value={filters.title ?? ''}
             onChange={handler}
      />
      <input name='description'
             className='border border-1 rounded-4 border-cadetBlueCrayola px-8 py-4'
             type="text"
             placeholder='Описание'
             value={filters.description ?? ''}
             onChange={handler}
      />
      <select name='id_client_type'
              className='border border-1 rounded-4 border-cadetBlueCrayola px-8 py-4'
              value={filters.id_client_type ?? 0}
              onChange={handler}
      >
        <option value={undefined}>Любой тип клиента</option>
        {/*{sortedUniqBy(sortBy(products, p => p.client_type), p => p.client_type)*/}
        {/*  .map(p => <option key={p.id_client_type} value={p.id_client_type}>{p.client_type}</option>)}*/}
        {clientTypes.map(p => <option key={p.id_client_type} value={p.id_client_type}>{p.client_type}</option>)}
      </select>
      <div className='flex border border-1 rounded-4 border-cadetBlueCrayola'>
        <select name='tariff_price_rub'
                ref={selectionTypeRef}
                onChange={handler}>
          <option value=''>~</option>
          <option value='__e'>=</option>
          <option value='__lt'>{'<'}</option>
          <option value='__gt'>{'>'}</option>
          <option value='__lte'>{'<='}</option>
          <option value='__gte'>{'>='}</option>
        </select>
        <input name='tariff_price_rub'
               className='px-8 py-4 w-108'
               ref={selectionValueRef}
               defaultValue={0}
               type='number'
               onChange={handler}/>
      </div>
    </div>
    <div className='flex flex-col gap-20'>
      {!isEmpty(products)
        ? products!.map((product) => (
          <div key={product.id_bank_product}
               className='p-20 gap-32 flex justify-between items-center rounded-8 shadow-formShadow hover:scale-[102.5%] transition'>
            <img src={product.image} alt="" width={100} height={100} className='shrink-0'/>
            <div className='flex flex-col flex-grow justify-between items-start'>
              <h2 className=''>{product.title}</h2>
              <span className=''>{product.client_type}</span>
              <span className=''>{product.description}</span>
            </div>
            <span className='text-crayolaGreen font-semibold text-22'>{formatCurrency2(product.tariff_price_rub)}</span>
          </div>
        ))
        : <p className='flex justify-center items-center gap-10 text-center text-30 text-black/20 font-semibold'>
          <IconSearch width={40} height={40} className='fill-black/20'/>
          Ничего не найдено
        </p>}
    </div>
  </div>
}

export default BankProductsList