import React, {
	FC,
	PropsWithChildren,
}                        from 'react'
import IconGift          from '../assets/icons/IconGift'
import IconCashback      from '../assets/icons/IconCashback'
import IconMoney         from '../assets/icons/IconMoney'
import IconPhone         from '../assets/icons/IconPhone'
import { useMatchMedia } from '../hooks/useMatchMedia'



type TermProps = {
	icon: JSX.Element
	title: string
} & PropsWithChildren

const Term: FC<TermProps> = ( { icon, title, children } ) => {
	return (
		<div className='flex flex-col gap-[13.5px] items-start'>
			<div className='bg-smokyWhite rounded-8 p-11'>{icon}</div>
			<p className='text-18 font-semibold'>{title}</p>
			<p className='text-16'>{children}</p>
		</div>
	)
}

const TermsSection: FC = () => {
	const { isMobile } = useMatchMedia()
	if ( isMobile ) return null

	return <div className='container grid grid-cols-4 mt-48'>
		<Term title='Бесплатная' icon={<IconGift className='w-36 h-36'/>}>
			всегда, без условий
		</Term>
		<Term title='Кэшбэк 10% на всё' icon={<IconCashback className='w-36 h-36'/>}>
			и до 33% у партнёров
		</Term>
		<Term title='Снятие без комиссии' icon={<IconMoney className='w-36 h-36'/>}>
			в любых банкоматах
		</Term>
		<Term title='Лучшее приложение' icon={<IconPhone className='w-36 h-36'/>}>
			по версии Markswebb
		</Term>
	</div>
}

export default TermsSection