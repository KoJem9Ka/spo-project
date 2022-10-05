import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconSearch: FC<TSVGProps> = ( props ) => (
  <svg role='img'
       focusable='false'
       fill='black'
       width='24'
       height='24'
       viewBox='0 0 24 24'
       cursor='pointer'
       {...props}
  >
    <path fillRule='evenodd'
          clipRule='evenodd'
          d='M10.544 3a7.544 7.544 0 104.405 13.67L20.28 22 22 20.28l-5.33-5.33A7.544 7.544 0 0010.544 3zm-5.11 7.544a5.11 5.11 0 1110.221 0 5.11 5.11 0 01-10.221 0z'></path>
  </svg>
)

export default IconSearch