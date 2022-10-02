import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconChevronRight: FC<TSVGProps> = ( props ) => (
  <svg
    width='10'
    height='18'
    viewBox='0 0 10 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1.25 1.5L8.75 9L1.25 16.5'
      stroke='black'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'/>
  </svg>
)

export default IconChevronRight