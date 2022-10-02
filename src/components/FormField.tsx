import React, {
  FC,
  useEffect,
  useRef,
  useState,
}                    from 'react'
import {
  InputChangeFn,
  InputFocusFn,
}                    from '../types'
import { isEmpty }   from 'lodash'
import dayjs         from 'dayjs'
import { join }      from '../utils'
import IconIsCorrect from '../assets/icons/IconIsCorrect'



type Props = {
  type: 'text' | 'date' | 'phone' | 'email'
  required?: true
  placeholder: string
  description?: string
  incorrect?: string
  id: string
  value: string
  handler: InputChangeFn
  disabled?: boolean
}
const FormField: FC<Props> = ( {
  id,
  type,
  value,
  handler: rawHandler,

  placeholder,
  description,

  required,
  incorrect,

  disabled,
} ) => {
  const inputRef                    = useRef<HTMLInputElement>( null )
  const [ isActive, setIsActive ]   = useState<boolean | null>( null )
  const [ isCorrect, setIsCorrect ] = useState( type === 'text' )

  useEffect( () => {
    if ( disabled ) setIsActive( null )
  }, [ disabled ] )

  const isLabelUp = isActive || !isEmpty( value )
  const needFill  = isActive === false && required && isEmpty( value )
  const needFix   = isActive === false && !isCorrect

  const focusHandler: InputFocusFn = ( { currentTarget } ) => {
    const isActive1 = document.activeElement === currentTarget
    setIsActive( isActive1 )
    if ( !isActive1 ) switch ( type ) {
      case 'date':
        const notDead = Math.abs( dayjs().diff( dayjs( currentTarget.value ), 'years' ) ) <= 120
        const isAdult = dayjs().diff( dayjs( currentTarget.value ), 'years' ) >= 18
        isCorrect !== (isAdult && notDead) && setIsCorrect( isAdult && notDead )
        break
      case 'phone':
        const correctPhone = /^7[0-9]{10}$/.test( currentTarget.value )
        isCorrect !== correctPhone && setIsCorrect( correctPhone )
        break
      case 'email':
        const correctEmail = /[0-9a-bA-B_.-]+@[a-zA-Z]+\.[a-zA-Z]{2,5}/g.test( currentTarget.value )
        isCorrect !== correctEmail && setIsCorrect( correctEmail )
        break
    }
  }

  return (
    <div>
      <label className={join( `relative
                        flex flex-col
                        transition
                        rounded-t-4
                        cursor-text
      `, disabled ? 'bg-formFieldFocus' : 'bg-formField hover:bg-formFieldFocus focus-within:bg-formFieldFocus' )}>
        <span className={join( `absolute select-none transition-all duration-[50ms]
                         text-formFieldLabel text-16
                         top-1/2
                         pl-12
                         -translate-y-1/2
        `, isLabelUp && 'text-14 top-7 translate-y-0' )}>{placeholder}</span>
        <input className={join( 'bg-transparent text-16 text-gray90 pt-28 pr-35 pb-8 pl-12', type === 'date' && !isLabelUp && 'text-transparent' )}
               type={type === 'date' ? 'date' : type === 'email' ? 'email' : 'text'}
               ref={inputRef}
               name={id}
               disabled={disabled}
               value={value}
               onChange={rawHandler}
               onFocus={focusHandler}
               onBlur={focusHandler}
        />
        <div className={join( `absolute
                       border
                       h-0
                       bottom-0
                       inset-x-0`, isActive
                                   ? 'border-b-2 border-slateGray'
                                   : needFix || needFill
                                     ? 'border-b-2 border-red'
                                     : disabled
                                       ? 'border-b-1 border-cadetBlueCrayola border-dashed'
                                       : 'border-b-1 border-cadetBlueCrayola' )}/>
        {isActive === false &&
          <IconIsCorrect className='absolute right-12 top-1/2 -translate-y-1/2'
                         correct={ !needFix && !needFill}/>
        }
      </label>
      {needFill
       ? <p className='mt-5 text-red'>Поле обязательно для заполнения</p>
       : needFix
         ? incorrect && <p className='mt-5 text-red'>{incorrect}</p>
         : description && <p className='mt-5 text-14 text-gray60'>{description}</p>
      }
    </div>
  )
}

export default FormField