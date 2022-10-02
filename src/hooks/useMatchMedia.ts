import {
  useCallback,
  useLayoutEffect,
  useState,
} from 'react'



const sizes = [
  '(max-width: 640px)',
  '(min-width: 641px) and (max-width: 1139px)',
  '(min-width: 1140px)',
] as const


export function useMatchMedia() {
  const mql                   = sizes.map( q => matchMedia( q ) )
  const getValues             = useCallback( () => mql.map( mq => mq.matches ), [ mql ] )
  const [ values, setValues ] = useState( getValues )
  useLayoutEffect( () => {
    const handler = () => setValues( getValues )
    mql.forEach( mq => mq.addEventListener( 'change', handler ) )
    return () => mql.forEach( mq => mq.removeEventListener( 'change', handler ) )
  } )
  return {
    isMobile:  values[0],
    isTablet:  values[1],
    isDesktop: values[2],
    noMobile: !values[0]
  }
}