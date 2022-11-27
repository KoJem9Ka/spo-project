import React, {FC, useState,} from 'react'
import {formatCurrency} from '../utils'
import {InputChangeFn} from '../types'
import {ExpensesCalculator} from "../components";
import {IconArrowSmallUp} from "../assets/icons";
import {EXPENSES_CASHBACK_VALUE, EXPENSES_MAX_VALUE, EXPENSES_MIN_VALUE} from "./";


const CalculatorSection: FC = () => {
  const [expenses, setRawExpenses] = useState(EXPENSES_CASHBACK_VALUE)

  const setExpenses: InputChangeFn = (e) => {
    let nextValue = +e.currentTarget.value
    if (isNaN(nextValue)) return
    nextValue > EXPENSES_MAX_VALUE && (nextValue = EXPENSES_MAX_VALUE)
    nextValue < EXPENSES_MIN_VALUE && (nextValue = EXPENSES_MIN_VALUE)
    setRawExpenses(nextValue)
  }

  return <div className='container mt-48 mob:mt-22'>
    <h2 className='text-center mb-28 mob:px-15'>Рассчитайте кэшбэк по Альфа-Карте</h2>
    <div className='block pc:grid grid-cols-2 text-marengo pc:bg-calcGrad mob:bg-formField'>
      <div className='p-48 pb-40 mob:p-20 flex flex-col justify-between'>
        <ExpensesCalculator expenses={expenses} setExpenses={setExpenses}/>
        Расчёт калькулятора предварительный и не является публичной офертой
      </div>
      <div className='calcArrow bg-white px-48 py-40 mob:p-20 mob:pb-0 pc:shadow-calcShadow'>
        <p className='text-black font-semibold text-22 mb-32'>Вы получите:</p>
        <div className='flex justify-between items-center'>
          <span>Кэшбэк в месяц<br/>% кэшбэка по акции — 10%</span>
          <span className='text-30 font-semibold text-crayolaGreen'>
            +{formatCurrency(expenses < EXPENSES_CASHBACK_VALUE
            ? expenses * 0.015
            : expenses * 0.02)}
          </span>
        </div>
        <hr className='my-16 border-solid border-b-1 border-b-gainsboro'/>
        <div className='flex justify-between'>
          <span>% кэшбэка</span>
          <span className='flex text-18 text-black font-semibold items-center'>
            {expenses < EXPENSES_CASHBACK_VALUE
              ? <>
               <span
                 onClick={() => setRawExpenses(EXPENSES_CASHBACK_VALUE)}
                 className='text-13 cursor-pointer text-gray60 border-b-gray20 hover:border-b-gray60 border-b-1 border-dashed'>Повысить %</span>
                &nbsp;<IconArrowSmallUp className='stroke-red h-15'/>
                &nbsp;1,5%
              </>
              : '2%'}
          </span>
        </div>
        <a className='btn btn-red mt-16 mob:w-full' href='#form'>Заказать карту</a>
      </div>
    </div>
  </div>
}

export default CalculatorSection