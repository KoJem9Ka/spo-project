import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconMoney: FC<TSVGProps> = ( props ) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M5 7H35C35.5523 7 36 7.44772 36 8V13.4V18.2V26.8C36 27.3523 35.5523 27.8 35 27.8H20H5C4.44772 27.8 4 27.3523 4 26.8V15V8C4 7.44772 4.44772 7 5 7Z'
          fill='#0B1F35'/>
    <path fillRule='evenodd' clipRule='evenodd'
          d='M20 13.4C17.792 13.4 16 15.2 16 17.4C16 19.6 17.792 21.4 20 21.4C22.21 21.4 24 19.6 24 17.4C24 15.2 22.21 13.4 20 13.4Z' fill='white'/>
    <path d='M5.6001 29.4H34.4001V31.6C34.4001 32.1523 33.9524 32.6 33.4001 32.6H6.6001C6.04781 32.6 5.6001 32.1523 5.6001 31.6V29.4Z' fill='#0B1F35'/>
    <path d='M7.19995 24.6V16.6L13.6 24.6H7.19995Z' fill='white'/>
    <path d='M33.3999 10L33.3999 18L26.9999 10L33.3999 10Z' fill='white'/>
  </svg>
)

export default IconMoney