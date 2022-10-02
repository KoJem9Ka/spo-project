import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconChevronLeft: FC<TSVGProps> = ( props ) => (
  <svg
    width='10'
    height='18'
    viewBox='0 0 10 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8.75 16.5L1.25 9L8.75 1.5'
      stroke='black'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default IconChevronLeft