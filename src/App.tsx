import React             from 'react'
import MainSection       from './sections/MainSection'
import TermsSection      from './sections/TermsSection'
import CalculatorSection from './sections/CalculatorSection'
import ApplyingSection   from './sections/ApplyingSection'
import BenefitsSection   from './sections/BenefitsSection'
import Footer            from './sections/Footer'
import Header            from './sections/Header'



function App() {


  return (
    <>
      <Header/>
      <MainSection/>
      <TermsSection/>
      <CalculatorSection/>
      <ApplyingSection/>
      <BenefitsSection/>
      <Footer/>
      {/*<div className='min-h-screen'/>*/}
    </>
  )
}

export default App
