import React, { FC }   from 'react'
import Icons, { Icon } from '../../../components/Icons'
import { Flex }        from '../../../styles/styled/Layouts'
import pic             from './main_desktop_564_450_20-05-2022.png'



const FirstSection: FC = () => (
  <div className='container bg--intro_bg'>
    <Icons variant={Icon.Logo} fill='red'/>
    <Flex>
      <Flex dir='column' axis1='flex-end'>
        <h1>Суперкэшбэк до 33%<br/>каждый месяц</h1>
        <span className='fz-22'>с бесплатной Альфа-Картой</span>
        <Flex gap='12px' axis2='center' className='mb-65 mt-108'>
          <button className='btn big secondary'>Подробнее</button>
          <button className='btn big red shrink-0'>Заказать карту</button>
          <Icons variant={Icon.ArrowLeft}/>
          <span className='fz-13'>Закажите сейчас – бесплатно доставим завтра</span>
        </Flex>
      </Flex>
      <img src={pic} alt=''/>
    </Flex>
  </div>
)

export default FirstSection