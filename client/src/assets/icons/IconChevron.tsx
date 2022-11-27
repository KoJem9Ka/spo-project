import React, { FC } from 'react'
import { TSVGProps } from '../../types'



type ChevronProps = { dir: 'left' | 'right' | 'down' } & TSVGProps

const IconChevron: FC<ChevronProps> = ( { dir, ...props } ) => {

  switch ( dir ) {
    case 'left':
    case 'right':
      return (
        <svg
          width='10'
          height='18'
          viewBox='0 0 10 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d={dir === 'left' ? 'M8.75 16.5L1.25 9L8.75 1.5' : 'M1.25 1.5L8.75 9L1.25 16.5'}
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'down':
      return (
        <svg height='6'
             viewBox='0 0 10 6'
             width='10'
             {...props}
        >
          <path d='M5 4.548L8.547 1 9 1.453l-4 4-4-4L1.453 1 5 4.548z'
                fill='currentColor'></path>
          <path
            d='M5 4.548l-.177.176.177.177.176-.177L5 4.548zM8.547 1l.177-.177-.177-.177-.177.177.177.177zM9 1.453l.177.177.176-.176-.176-.177L9 1.453zm-4 4l-.177.177.177.177.176-.177L5 5.453zm-4-4l-.177-.176-.177.176.177.177L1 1.453zM1.453 1L1.63.823 1.453.646l-.176.177.176.177zm3.723 3.724l3.548-3.547L8.37.823 4.823 4.371l.353.353zM8.37 1.177l.453.453.354-.353-.453-.454-.354.354zm.453.1l-4 4 .353.353 4-4-.353-.353zm-3.647 4l-4-4-.353.353 4 4 .353-.353zm-4-3.647l.454-.453-.353-.354-.454.454.354.353h-.001zm.1-.453l3.547 3.547.353-.353L1.63.823l-.354.354z'
            fill='currentColor'></path>
        </svg>
      )

  }
}

export default IconChevron