import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconArrowSmallUp: FC<TSVGProps> = ( props ) => (
  <svg width='16'
       height='18'
       viewBox='0 0 16 18'
       stroke='black'
       xmlns='http://www.w3.org/2000/svg'
       {...props}
  >
    <path d='M8 16.5V1.5M8 1.5L1.25 8.25M8 1.5L14.75 8.25'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'/>
  </svg>
)

export default IconArrowSmallUp