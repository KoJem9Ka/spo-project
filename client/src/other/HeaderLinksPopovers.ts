type THeaderLinksArray = {
	label: string
	link: string
	columns: {
		label: string
		link: string
		main?: true
	}[][]
}[]


export const headerLinks: THeaderLinksArray = [
	{
		label:   'Карты',
		link:    '/',
		columns: [
			[
				{ label: 'КРЕДИТНЫЕ КАРТЫ', main: true, link: '/' },
				{ label: 'Целый год без %', link: '/' },
				{ label: 'Alfa Travel', link: '/' },
				{ label: 'Как получить отсрочку по кредитам', link: '/' },
			], [

				{ label: 'ДЕБЕТОВЫЕ КАРТЫ', main: true, link: '/' },
				{ label: 'Альфа-Карта', link: '/' },
				{ label: 'Alfa Travel', link: '/' },
			], [
				{ label: 'СПЕЦИАЛЬНЫЕ УСЛОВИЯ', main: true, link: '/' },
				{ label: 'Зарплатные карты', link: '/' },
				{ label: 'Зарплата каждый день', link: '/' },
				{ label: 'Индивидуальное зарплатное предложение', link: '/' },
				{ label: 'Банк для семьи', link: '/' },
			],
		],
	},
	{
		label:   'Вклады',
		link:    '/',
		columns: [
			[
				{ label: 'ВКЛАДЫ', main: true, link: '/' },
				{ label: 'Альфа-Вклад', link: '/' },
				{ label: 'Калькулятор вклада', link: '/' },
			], [
				{ label: 'НАКОПИТЕЛЬНЫЕ СЧЕТА', main: true, link: '/' },
				{ label: 'Альфа-счёт', link: '/' },
				{ label: 'Мили "Аэрофлот Бонус" за остаток на счёте', link: '/' },
			], [
				{ label: 'БЕСПЛАТНЫЕ СЕРВИСЫ ДЛЯ НАКОПЛЕНИЙ', main: true, link: '/' },
				{ label: 'Копилка для зарплаты', link: '/' },
				{ label: 'Автопополнение накопительного счёта', link: '/' },
			],
		],
	},
	{
		label:   'Кредиты',
		link:    '/',
		columns: [
			[
				{ label: 'ВСЕ КРЕДИТЫ', main: true, link: '/' },
				{ label: 'Кредит наличными', link: '/' },
				{ label: 'Кредит на автомобиль', link: '/' },
				{ label: 'Кредит под залог на любые цели', link: '/' },
				{ label: 'Рефинансирование кредита', link: '/' },
				{ label: 'Кредитные карты', link: '/' },
			], [
				{ label: 'ПОЛЕЗНОЕ', main: true, link: '/' },
				{ label: 'Кредитный калькулятор', link: '/' },
				{ label: 'Погашение кредита', link: '/' },
				{ label: 'Работа со справками', link: '/' },
				{ label: 'Полезные статьи', link: '/' },
				{ label: 'Как получить отсрочку по кредитам', link: '/' },
			],
		],
	},
	{
		label:   'Ипотека',
		link:    '/',
		columns: [
			[
				{ label: 'ИПОТЕКА ОТ 5,7%', main: true, link: '/' },
				{ label: 'Вторичное жильё', link: '/' },
				{ label: 'Новостройки', link: '/' },
				{ label: 'Рефинансирование ипотеки', link: '/' },
				{ label: 'Ипотека с господдержкой', link: '/' },
			], [
				{ label: 'СПЕЦИАЛЬНЫЕ УСЛОВИЯ', main: true, link: '/' },
				{ label: 'Материнский капитал', link: '/' },
				{ label: 'Семейная ипотека', link: '/' },
				{ label: 'Льготная ипотека для IT-специалистов', link: '/' },
				{ label: 'Ипотека не выходя из дома', link: '/' },
			], [
				{ label: 'ПОЛЕЗНОЕ', main: true, link: '/' },
				{ label: 'Личный кабинет заёмщика', link: '/' },
				{ label: 'Ипотечный калькулятор', link: '/' },
				{ label: 'Полезные статьи', link: '/' },
			],
		],
	},
	{
		label:   'Инвестиции',
		link:    '/',
		columns: [
			[
				{ label: 'САМОСТОЯТЕЛЬНАЯ ТОРГОВЛЯ', main: true, link: '/' },
				{ label: 'Брокерский счёт', link: '/' },
				{ label: 'Тарифные планы', link: '/' },
				{ label: 'Обмен валюты на бирже', link: '/' },
				{ label: 'ИИС', link: '/' },
				{ label: 'Приложение Альфа-Инвестиции', link: '/' },
				{ label: 'Терминал Альфа-Инвестиции', link: '/' },
				{ label: 'Все Альфа-Инвестиции', link: '/' },
				{ label: 'Альфа-Форекс', link: '/' },
			], [
				{ label: 'ГОТОВЫЕ РЕШЕНИЯ ДЛЯ ИНВЕСТИЦИЙ', main: true, link: '/' },
				{ label: 'Паевые фонды', link: '/' },
				{ label: 'ИСЖ', link: '/' },
				{ label: 'Готовые стратегии ИИС', link: '/' },
				{ label: 'Доверительное управление', link: '/' },
				{ label: 'Посмотреть всё', link: '/' },
			], [
				{ label: 'ЕЩЁ', main: true, link: '/' },
				{ label: 'Аналитика и обучение', link: '/' },
				{ label: 'Личный кабинет', link: '/' },
				{ label: 'Поддержка', link: '/' },
			],
		],
	},
	{
		label:   'Премиум',
		link:    '/',
		columns: [],
	},
	{
		label:   'Ещё',
		link:    '/',
		columns: [
			[
				{ label: 'О банке', link: '/' },
				{ label: 'Самозанятые', link: '/' },
				{ label: 'Онлайн-сервисы', link: '/' },
			],
		],
	},
]
