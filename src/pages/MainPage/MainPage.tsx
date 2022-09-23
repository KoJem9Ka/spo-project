import React, { FC }      from 'react'
import FirstSection       from './sections/FirstSection'
import FactsSection       from './sections/FactsSection'
import CashbackCalculator from './sections/CashbackCalculator'
import OrderSection       from './sections/OrderSection'



type Props = {}
const MainPage: FC<Props> = ( props ) => {

  return <>
    <FirstSection/>
    <FactsSection/>
    <CashbackCalculator/>
    <OrderSection/>
  </>
}

export default MainPage