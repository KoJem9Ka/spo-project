import React, {
	FC,
	useState,
}                         from 'react'
import IconLogo           from '../assets/icons/IconLogo'
import styles             from '../styles/_shared.module.scss'
import IconChevron        from '../assets/icons/IconChevron'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import IconSearch         from '../assets/icons/IconSearch'
import IconBasket         from '../assets/icons/IconBasket'
import Popover            from '../components/Popover'
import { headerLinks }    from '../other/HeaderLinksPopovers'
import { join }           from '../utils'
import { isEmpty }        from 'lodash'



const { headLink, headLink2 } = styles

const Header: FC = () => {
	const [ isLinksOpened, setIsLinksOpened ] = useState( false )

	const toggleOpened = () => setIsLinksOpened( state => !state )
	const [ ref ]      = useAutoAnimate<HTMLDivElement>()
	const [ ref2 ]     = useAutoAnimate<HTMLDivElement>()

	return <div className='flex bg-lightCyan py-32'>
		<div ref={ref2} className='container flex items-center text-12 gap-16 relative'>
			<IconLogo className='fill-red'/>
			<div className='flex flex-col justify-between flex-grow self-stretch'>
				<div ref={ref} className='flex font-bold gap-16 self-stretch'>
					<a className='border-b-1 hover:text-gentianBlue/50' href='/'>ЧАСТНЫМ ЛИЦАМ</a>
					<a className={headLink} href='/'>МАЛОМУ БИЗНЕСУ И ИП</a>
					<a className={headLink} href='/'>КОРПОРАЦИЯМ</a>
					{isLinksOpened && <>
                      <a className={headLink} href='/'>ФИНАНСОВЫМ ОРГАНИЗАЦИЯМ</a>
                      <a className={headLink} href='/'>ИНВЕСТБАНК</a>
                      <a className={headLink} href='/'>А-КЛУБ</a>
                    </>}
					<IconChevron onClick={toggleOpened} dir={isLinksOpened ? 'left' : 'right'} className='w-8 cursor-pointer'/>
				</div>
				<div className='text-16 flex gap-16 text-gentianBlue'>
					{headerLinks.map( ( { label: rootLabel, link: rootLink, columns } ) => (
						isEmpty(columns) ? <a href={rootLink} className={headLink2}>{rootLabel}</a> : (
							<Popover key={rootLabel + rootLink} elem={<a href={rootLink} className={headLink2}>{rootLabel}</a>} hover>
								<div className='flex w-max bg-white p-24 border-abdelKerim border-1 rounded-4 gap-36'>
									{columns.map( ( col, i ) => (
										<div key={i} className='flex flex-col gap-10'>
											{col.map( ( { label, link, main } ) => (
												<a key={label + link}
												   href={link}
												   className={join( 'hover:text-red', main ? 'text-12 font-bold' : 'text-16' )}>{label}</a>
											) )}
										</div>
									) )}
								</div>
							</Popover>
						)),
					)}
				</div>
			</div>
			{ !isLinksOpened && (
				<div className='absolute right-0 flex items-center gap-12 text-14'>
					<IconSearch/>
					<button className='px-15 py-7 flex items-center gap-8 border-1 rounded-4 border-black/40 font-semibold active:bg-black/10'>
						<IconBasket/>
						СТАТЬ КЛИЕНТОМ
						<IconChevron dir='down'/>
					</button>
					<button className='btn red small bg-red hover:red/20'>ИНТЕРНЕТ-БАНК</button>
				</div>
			)}
		</div>
	</div>
}

export default Header

// const Pop1Maps = <Popover elem={<a href='/' className={headLink2}>Карты</a>} hover>
// 	<div className='flex w-max bg-white p-24 border-abdelKerim border-1 rounded-4 gap-36'>
// 		<div className='flex flex-col gap-10'>
// 			<a href='/' className='hover:text-red'>КРЕДИТНЫЕ КАРТЫ</a>
// 			<a href='/' className='hover:text-red'>Целый год без %</a>
// 			<a href='/' className='hover:text-red'>Alfa Travel</a>
// 			<a href='/' className='hover:text-red'>Как получить отсрочку по кредитам</a>
// 		</div>
// 		<div className='flex flex-col gap-10'>
// 			<a href='/' className='hover:text-red'>ДЕБЕТОВЫЕ КАРТЫ</a>
// 			<a href='/' className='hover:text-red'>Альфа-Карта</a>
// 			<a href='/' className='hover:text-red'>Альфа-Карта Premium</a>
// 			<a href='/' className='hover:text-red'>Alfa Travel</a>
// 		</div>
// 		<div className='flex flex-col gap-10'>
// 			<a href='/' className='hover:text-red'>СПЕЦИАЛЬНЫЕ УСЛОВИЯ</a>
// 			<a href='/' className='hover:text-red'>Зарплатные карты</a>
// 			<a href='/' className='hover:text-red'>Зарплата каждый день</a>
// 			<a href='/' className='hover:text-red'>Индивидуальное зарплатное предложение</a>
// 			<a href='/' className='hover::text-red'>Банк для семьи</a>
// 		</div>
// 	</div>
// </Popover>