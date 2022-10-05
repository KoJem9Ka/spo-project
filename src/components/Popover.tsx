import React, {
	createElement,
	FC,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react'



type Props = {
	elem: JSX.Element
	hover?: true
	click?: true
	children: JSX.Element
} & PropsWithChildren
const Popover: FC<Props> = ( { click, elem, hover, children } ) => {
	const elemRef     = useRef<any>( null )
	const childrenRef = useRef<any>( null )

	useEffect( () => {

	}, [] )

	return <div className='relative group'>
		{/*{elem}*/}
		{createElement( elem.type, { ...elem.props, ref: elemRef, className: `${elem.props.className}` } )}
		{createElement( children.type, { ...children.props, ref: elemRef, className: `${children.props.className} hidden group-hover:flex absolute left-0 top-full` } )}
	</div>
}

export default Popover