import React, {FC, useEffect, useRef,} from 'react'
import {InputChangeFn} from '../types'
import {EXPENSES_MAX_VALUE} from "../sections";


type Props = {
  expenses: number
  setExpenses: InputChangeFn
}
const ExpensesCalculator: FC<Props> = ({expenses, setExpenses}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current && (inputRef.current.style.width = `${expenses.toString().length}ch`)
  }, [expenses])

  return <div>
    <div
      onClick={() => inputRef.current?.focus()}
      className='relative
                 py-10 px-16
                 flex flex-col
                 bg-veryPaleBlue hover:bg-paleBlue transition
                 rounded-t-4
                 cursor-text
    '>
      <span className='text-16 select-none'>Ежемесячные расходы</span>
      <div>
        <input className='bg-transparent font-bold text-gentianBlue'
               ref={inputRef}
               value={expenses}
               onChange={setExpenses}
               type='text'/>
        <span className='select-none font-bold'>&nbsp;₽</span>
      </div>
      <input className='absolute -bottom-10 left-0 bg-transparent'
             onClick={e => e.stopPropagation()}
             value={expenses}
             onChange={setExpenses}
             min={1}
             max={EXPENSES_MAX_VALUE}
             type='range'
      />
    </div>
    <div className='flex justify-between text-14 mt-8'>
      {expenses < EXPENSES_MAX_VALUE
        ? <>
          <span>1 руб.</span>
          <span>250 тыс. и более</span>
        </>
        : <p>При расходах более 250 000 ₽ сумма кэшбэка не изменится. 5 000 ₽ — максимальная сумма кэшбэка в месяц.</p>}
    </div>
  </div>
}

export default ExpensesCalculator