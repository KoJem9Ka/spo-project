import React from 'react'
import {
  ApplyingSection,
  BankProductsList,
  BenefitsSection,
  CalculatorSection,
  Footer,
  Header,
  MainSection,
  TermsSection
} from "./sections";


const App = () => (
  <>
    <Header/>
    <MainSection/>
    <TermsSection/>
    <CalculatorSection/>
    <ApplyingSection/>
    <BankProductsList/>
    <BenefitsSection/>
    <Footer/>
    {/*<div className='min-h-screen'/>*/}
  </>
);

export default App
