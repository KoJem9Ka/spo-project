import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconBasket: FC<TSVGProps> = ( props ) => (
  <svg width='16'
       height='18'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
       {...props}
  >
    <path fillRule='evenodd'
          clipRule='evenodd'
          d='M8 1.75A3.25 3.25 0 004.75 5a.75.75 0 01-1.5 0 4.75 4.75 0 019.5 0 .75.75 0 01-1.5 0A3.25 3.25 0 008 1.75z'
          fill='#0B1F35'/>
    <path fillRule='evenodd'
          clipRule='evenodd'
          d='M4 4.553c.417 0 .755.338.755.755v2.154a.755.755 0 01-1.51 0V5.308c0-.417.338-.755.755-.755zM12 4.553c.417 0 .755.338.755.755v2.154a.755.755 0 11-1.51 0V5.308c0-.417.338-.755.755-.755z'
          fill='#0B1F35'/>
    <path fillRule='evenodd'
          clipRule='evenodd'
          d='M.25 5A.75.75 0 011 4.25h14a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V5.75H1.75v10.5H9a.75.75 0 010 1.5H1A.75.75 0 01.25 17V5z'
          fill='#0B1F35'/>
    <path fillRule='evenodd'
          clipRule='evenodd'
          d='M13 12a1 1 0 00-1 1v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1a1 1 0 00-1-1z'
          fill='#F04539'/>
  </svg>
)

export default IconBasket