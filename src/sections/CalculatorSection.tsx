import React, {
  ChangeEventHandler,
  FC,
  useState,
}                         from 'react'
import ExpensesCalculator from '../components/ExpensesCalculator'
import { formatCurrency } from '../utils'
import IconArrowSmallUp   from '../assets/icons/IconArrowSmallUp'
import { InputChangeFn }  from '../types'



export const EXPENSES_MIN_VALUE       = 0
export const EXPENSES_CASHBACK2_VALUE = 100000
export const EXPENSES_MAX_VALUE       = 250000

const CalculatorSection: FC = () => {
  const [ expenses, setRawExpenses ] = useState( EXPENSES_CASHBACK2_VALUE )

  const setExpenses: InputChangeFn = ( e ) => {
    let nextValue = +e.currentTarget.value
    if ( isNaN( nextValue ) ) return
    nextValue > EXPENSES_MAX_VALUE && (nextValue = EXPENSES_MAX_VALUE)
    nextValue < EXPENSES_MIN_VALUE && (nextValue = EXPENSES_MIN_VALUE)
    setRawExpenses( nextValue )
  }

  return <div className='container'>
    <h2 className='text-center mb-24'>Рассчитайте кэшбэк по Альфа-Карте</h2>
    <div className='block grid grid-cols-2 text-marengo bg-calcGrad'>
      <div className='p-48 pb-40 flex flex-col justify-between'>
        <ExpensesCalculator expenses={expenses} setExpenses={setExpenses}/>
        Расчёт калькулятора предварительный и не является публичной офертой
      </div>
      <div className='calcArrow bg-white px-48 py-40 shadow-calcShadow'>
        <p className='text-black font-semibold text-22 mb-32'>Вы получите:</p>
        <div className='flex justify-between items-center'>
          <span>Кэшбэк в месяц<br/>% кэшбэка по акции — 10%</span>
          <span className='text-30 font-semibold text-crayolaGreen'>
            +{formatCurrency( expenses < EXPENSES_CASHBACK2_VALUE
                              ? expenses * 0.015
                              : expenses * 0.02 )}
          </span>
        </div>
        <hr className='my-16 border-solid border-b-1 border-b-gainsboro'/>
        <div className='flex justify-between'>
          <span>% кэшбэка</span>
          <span className='flex text-18 text-black font-semibold items-center'>
            {expenses < EXPENSES_CASHBACK2_VALUE
             ? <>
               <span
                 onClick={() => setRawExpenses( EXPENSES_CASHBACK2_VALUE )}
                 className='text-13 cursor-pointer text-gray60 border-b-gray20 hover:border-b-gray60 border-b-1 border-dashed'>Повысить %</span>
               &nbsp;<IconArrowSmallUp className='stroke-red h-15'/>
               &nbsp;1,5%
             </>
             : '2%'}
          </span>
        </div>
        <button className='btn red'>Заказать карту</button>
      </div>
    </div>
  </div>
}

export default CalculatorSection