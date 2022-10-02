import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconPhone: FC<TSVGProps> = ( props ) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path fillRule='evenodd' clipRule='evenodd'
          d='M13.3333 3.33331C11.4924 3.33331 10 4.8257 10 6.66665V33.3333C10 35.1743 11.4924 36.6666 13.3333 36.6666H26.6667C28.5076 36.6666 30 35.1743 30 33.3333V6.66665C30 4.8257 28.5076 3.33331 26.6667 3.33331H13.3333ZM20 33.3333C20.9205 33.3333 21.6667 32.5871 21.6667 31.6666C21.6667 30.7462 20.9205 30 20 30C19.0795 30 18.3333 30.7462 18.3333 31.6666C18.3333 32.5871 19.0795 33.3333 20 33.3333Z'
          fill='#0B1F35'/>
  </svg>
)

export default IconPhone