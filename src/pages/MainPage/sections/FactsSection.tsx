import React, {
  FC,
  PropsWithChildren,
}                      from 'react'
import Icons, { Icon } from '../../../components/Icons'
import { Flex }        from '../../../styles/styled/Layouts'



const Fact: FC<{
  icon: Icon
  title: string
} & PropsWithChildren> = ( { icon, title, children } ) => (
  <Flex dir='column' gap='13.5px'>
    <div
      className='flex-jc-ai-center bg--gray_box square-58 brad-8'
    >
      <Icons variant={icon}/>
    </div>
    <p className='fz-16 fw-600'>{title}</p>
    {children}
  </Flex>
)

type Props = {}
const FactsSection: FC<Props> = ( props ) => {

  return <div className='container pv-48 grid-4-1fr'>
    <Fact icon={Icon.Gift} title='Бесплатная'>
      <p className='fz-16'>всегда, без условий</p>
    </Fact>
    <Fact icon={Icon.CardCashback} title='Кэшбэк до 33%'>
      <p className='fz-16'>до 2% кэшбэка на всё и до 33% у партнёров</p>
    </Fact>
    <Fact icon={Icon.Money} title='Снятие без комиссии'>
      {/*TODO: окошко при нажатии*/}
      <p className='fz-16'>в любых банкоматах</p>
    </Fact>
    <Fact icon={Icon.Phone} title='Лучшее приложение'>
      <p className='fz-16'>по версии Markswebb</p>
    </Fact>
  </div>
}

export default FactsSection