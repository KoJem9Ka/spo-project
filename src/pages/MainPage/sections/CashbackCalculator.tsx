import React, {
  FC,
  useCallback,
  useState,
}                    from 'react'
import { Flex }      from '../../../styles/styled/Layouts'
import InputExpenses from '../../../components/InputField/InputExpenses'
import styled        from 'styled-components'



const { format } = new Intl.NumberFormat( 'ru', {
  style:                 'currency',
  currency:              'RUB',
  maximumFractionDigits: 0,
} )

type Props = {}
const CashbackCalculator: FC<Props> = ( props ) => {
  const [ expenses, setExpenses ] = useState( 100000 )

  const higherExpenses = useCallback( () => setExpenses( 100000 ), [] )

  return (
    <div className='container'>
      <h2 className='mb-24'>Рассчитайте кэшбэк по Альфа-Карте</h2>
      <div className='grid-2-1fr'>
        <div className='bg--calc_grad p-48 flex-col jc-sb fc-gray'>
          <InputExpenses expenses={expenses} setExpenses={setExpenses}/>
          <p className='fz-16'>Расчёт калькулятора предварительный и не является публичной офертой</p>
        </div>
        <ElemWithArrow className='p-48'>
          <p className='fz-22 fw-600 mb-32'>Вы получите</p>
          <Flex axis1='space-between' axis2='center'>
            <span className='fc-gray'>Кэшбэк в месяц</span>
            <span className='fz-30 fc-green fw-500'>+{expenses < 100000 ? format( expenses * 0.015 ) : format( expenses * 0.02 )}</span>
          </Flex>
          <hr className='mv-16'/>
          <Flex axis1='space-between' axis2='center'>
            <span className='fc-gray'>% кэшбэка</span>
            <span>
              {
                expenses < 100000 && (<>
                  <span className='c-pointer bb-dashed' onClick={higherExpenses}>Повысить</span>
                  {' '}
                </>)
              }
              <span className='fz-18 fw-700'>{expenses < 100000 ? '1,5%' : '2%'}</span>
            </span>
          </Flex>
          <button className='btn red mt-30'>Заказать карту</button>
        </ElemWithArrow>
      </div>
    </div>
  )
}

const ElemWithArrow = styled.div`
  position   : relative;
  box-shadow : var(--small_shadow);

  &:after {
    content       : "";
    border-bottom : 16px solid transparent;
    border-left   : 16px solid #e3e6e9;
    border-top    : 16px solid transparent;
    display       : block;
    //height        : 0;
    left          : 0;
    position      : absolute;
    top           : 50%;
    transform     : translateY(-50%);
    width         : 0;
  }
`

export default CashbackCalculator