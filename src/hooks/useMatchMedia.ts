import {
	useCallback,
	useLayoutEffect,
	useState,
} from 'react'



const sizes = [
	'(max-width: 1139px)',
	'(min-width: 1140px)',
] as const


export function useMatchMedia() {
	const mql                   = sizes.map( q => matchMedia( q ) )
	const getValues             = () => mql.map( mq => mq.matches )
	const [ values, setValues ] = useState( getValues )
	useLayoutEffect( () => {
		const handler = () => setValues( getValues )
		mql.forEach( mq => mq.addEventListener( 'change', handler ) )
		return () => mql.forEach( mq => mq.removeEventListener( 'change', handler ) )
	} )
	return {
		isMobile:  values[0],
		isDesktop: values[1],
		noMobile:  !values[0],
	}
}