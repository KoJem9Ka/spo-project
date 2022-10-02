import React, { FC } from 'react'
import { TSVGProps } from '../../types'



type Props = {
  correct: boolean
} & TSVGProps

const IconIsCorrect: FC<Props> = ( { correct, ...props } ) => (
  <svg width='18'
       height='18'
       viewBox='0 0 18 18'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
       {...props}
  >
    <path d='M9 18C13.962 18 18 13.962 18 9C18 4.038 13.962 0 9 0C4.038 0 0 4.038 0 9C0 13.962 4.038 18 9 18Z'
          fill={correct ? '#13A463' : '#F03226'}/>
    {correct
     ? <path d='M7.97694 10.815L4.90694 7.903L3.90894 8.795L7.97694 12.864L14.2959 6.545L13.2229 5.565L7.97694 10.815V10.815Z'
             fill={'#FFFFFF'}/>
     : <path d='M5.918 13L9 9.918L12.082 13L13 12.082L9.918 9L13 5.918L12.082 5L9 8.082L5.918 5L5 5.918L8.082 9L5 12.082L5.918 13Z'
             fill={'#FFFFFF'}/>}
  </svg>
)

export default IconIsCorrect