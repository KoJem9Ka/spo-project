import React, {FC} from 'react'
import IconChevron from '../assets/icons/IconChevron'
import cardAndLoupe from '../assets/card_and_loupe.png'
import cardAndLoupeMobile from '../assets/card_and_loupe_mobile.png'
import {useMatchMedia} from '../hooks/useMatchMedia'


const MainSection: FC = () => {
  const {isDesktop, isMobile} = useMatchMedia()

  return <div className='mob:container mob:px-15 text-gentianBlue bg-lightCyan mob:pb-16 mob:rounded-b-8'>
    <div className='pc:container pc:grid grid-cols-2 mob:flex flex-col'>
      <div className='flex flex-col justify-between pc:pb-66'>
        {isDesktop && <div className='flex gap-10 items-center'>
            <a href='/' className='link'>Частным лицам</a>
            <IconChevron dir='right' className='w-6'/>
            <a href='/' className='link'>Дебетовые карты</a>
        </div>}
        <div>
          <h1>Получайте 10% кэшбэка {isDesktop && <br/>} за всё</h1>
          <p className='text-22 mob:text-18'>с бесплатной Альфа-Картой</p>
        </div>
        {isDesktop ? <div className='flex gap-12 items-center'>
          <a className='btn-big btn-transp shrink-0'>Подробнее</a>
          <a className='btn-big btn-red whitespace-nowrap shrink-0' href='#form'>Заказать карту</a>
          <IconChevron dir='left'/>
          <span className='text-13'>Закажите сейчас – бесплатно доставим завтра</span>
        </div> : null}
      </div>
      <img src={isDesktop ? cardAndLoupe : cardAndLoupeMobile} alt='card and loupe'/>
      {isMobile && (<>
        <div className='bg-mainMobileDeliveryGrad rounded-t-8 p-16 pb-24 -mb-10'>Закажите сейчас – бесплатно доставим завтра</div>
        <div className='py-22 px-16 bg-white rounded-8 shadow-formShadow'>
          <p className='text-18 text-black mb-4 font-semibold'>Бесплатная</p>
          <p className='text-14 text-black/70 mb-16'>всегда без условий</p>
          <p className='text-18 text-black mb-4 font-semibold'>Кэшбэк до 10%</p>
          <p className='text-14 text-black/70 mb-16'>и до 33% у партнёров</p>
          <a className='btn btn-red w-full' href='#form'>Заказать карту</a>
        </div>
      </>)}
    </div>
  </div>
}

export default MainSection