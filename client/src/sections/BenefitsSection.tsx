import React, { FC }     from 'react'
import freeTransfers     from '../assets/freeTransfers.png'
import freePayments      from '../assets/freePayments.png'
import benefitsImg       from '../assets/benefits_mobile.png'
import { useMatchMedia } from '../hooks/useMatchMedia'



const BenefitsSection: FC = () => {
	const { isMobile } = useMatchMedia()

	return <div className='container mob:px-15'>
		<h2 className='text-center my-24'>Преимущества дебетовой Альфа-Карты</h2>
		<div className='pc:grid grid-cols-2 mob:flex flex-col gap-25'>
			<div className='bg-smokyWhite p-32 flex justify-between items-start'>
				<div className='flex flex-col justify-between gap-16'>
					<p className='text-22 font-bold text-gentianBlue'>Бесплатные переводы</p>
					<p className='text-gentianBlue/70'>Делайте переводы в другие банки по номеру телефона без комиссии (до 100 000 ₽ в месяц).</p>
				</div>
				<img className='w-96' src={freeTransfers} alt=''/>
			</div>
			<div className='bg-smokyWhite p-32 flex justify-between items-start'>
				<div className='flex flex-col gap-16'>
					<p className='text-22 font-bold text-gentianBlue'>Бесплатные платежи</p>
					<p className='text-gentianBlue/70'>— За мобильную связь</p>
					<p className='text-gentianBlue/70'>— ЖКХ</p>
					<p className='text-gentianBlue/70'>— Штрафы ГИБДД и другие услуги</p>
				</div>
				<img className='w-96' src={freePayments} alt=''/>
			</div>
		</div>
		{isMobile && <img className='my-25' src={benefitsImg} alt=''/>}
		<div className='pc:py-76 mob:mb-25 flex flex-col items-start pc:pr-50% gap-24 text-gentianBlue pc:bg-benefitsImage bg-center bg-no-repeat'>
			<p className='text-30 mob:text-22 font-semibold leading-1.2'>Получите больше с накопительным Альфа-Счётом — до 9% годовых с первого месяца</p>
			<div className='grid grid-cols-list gap-8'>
				<span className='text-red'>•</span>
				<p> Оформите бесплатную дебетовую Альфа-Карту</p>
				<span className='text-red'>•</span>
				<p> Откройте накопительный Альфа-Счёт в приложении</p>
				<span className='text-red'>•</span>
				<p> Пополните счёт бесплатным переводом из другого банка или наличными в банкомате</p>
			</div>
			<a className='btn btn-red mob:w-full' href='#form'>Заказать карту</a>
		</div>
	</div>
}

export default BenefitsSection