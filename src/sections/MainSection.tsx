import React, { FC }     from 'react'
import IconChevronRight  from '../assets/icons/IconChevronRight'
import IconChevronLeft   from '../assets/icons/IconChevronLeft'
import cardAndLoupe      from '../assets/card_and_loupe.png'
import { useMatchMedia } from '../hooks/useMatchMedia'
import { join }          from '../utils'
import styles            from '../styles/_shared.module.scss'



const MainSection: FC = () => {
  const { noMobile } = useMatchMedia()

  return <div className='text-gentianBlue bg-lightCyan'>
    <div className={join( 'container', noMobile && 'grid grid-cols-2' )}>
      <div className='flex flex-col justify-between pb-66'>
        <div className='flex gap-10 items-center'>
          <a href='/' className={join( styles.link, 'text-14' )}>Частным лицам</a>
          <IconChevronRight className='w-6'/>
          <a href='/' className={join( styles.link, 'text-14' )}>Дебетовые карты</a>
        </div>
        <div>
          <h1>Получайте 10% кэшбэка <br/> за всё</h1>
          <p className='text-22'>с бесплатной Альфа-Картой</p>
        </div>
        <div className='flex gap-12 items-center'>
          <button className='btn big secondary shrink-0'>Подробнее</button>
          <button className='btn big red whitespace-nowrap shrink-0'>Заказать карту</button>
          <IconChevronLeft/>
          <span className='text-13'>Закажите сейчас – бесплатно доставим завтра</span>
        </div>
      </div>
      {noMobile && <img src={cardAndLoupe} alt='card and loupe'/>}
    </div>
  </div>
}

export default MainSection