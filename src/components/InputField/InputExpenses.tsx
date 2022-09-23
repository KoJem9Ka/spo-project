import React, {
  FC,
  useEffect,
  useRef,
}             from 'react'
import styled from 'styled-components'



type Props = {
  expenses: number
  setExpenses: ( expenses: number ) => void
}

const minValue = 0
const maxValue = 250000

const InputExpenses: FC<Props> = ( { expenses, setExpenses } ) => {
  const inputRef = useRef<HTMLInputElement>( null )

  useEffect( () => {
    if ( !inputRef.current ) return
    inputRef.current.style.width = `${expenses.toString().length}ch`
  }, [ expenses ] )

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    let nextValue = +e.currentTarget.value
    if ( isNaN( nextValue ) ) return
    nextValue > maxValue && (nextValue = maxValue)
    nextValue < minValue && (nextValue = minValue)
    setExpenses( nextValue )
  }

  return (
    <div>
      <InputWrapper onClick={( e ) => {
        e.preventDefault()
        e.stopPropagation()
        document.activeElement !== inputRef.current && inputRef.current?.focus()
      }}>
        <p className='no_click'>Ежемесячные расходы</p>
        <input
          ref={inputRef}
          type='text'
          value={expenses}
          onChange={handleChange}
        />
        <span className='fw-700'> ₽</span>
        <input min={minValue} max={maxValue} type='range' value={expenses} onChange={handleChange}/>
      </InputWrapper>
      <div className='flex-row jc-sb mv-10'>
        {
          expenses < maxValue
          ? <>
            <span className='fz-14'>1 руб.</span>
            <span className='fz-14'>250 тыс. и более</span>
          </>
          : <p className='fz-14'>При расходах более 250 000 ₽ сумма кэшбэка не изменится. 5 000 ₽ — максимальная сумма кэшбэка в месяц.</p>
        }
      </div>
    </div>
  )
}

export default InputExpenses

const InputWrapper = styled.div`
  background    : var(--input_bg_color);
  cursor        : text;
  border-radius : 4px 4px 0 0;
  padding       : 16px 16px 10px;
  transition    : background .2s ease;
  position      : relative;

  &:focus-within, &:hover {
    background : var(--input_bg_active_color);
  }

  input {
    color       : var(--text_dark);
    font-weight : 700;
    background  : transparent;
  }

  input[type=range] {
    position : absolute;
    //margin-top : -10px;
    left     : 0;
    right    : 0;
    top      : calc(100% - 10px);
  }
`