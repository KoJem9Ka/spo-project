import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconCashback: FC<TSVGProps> = ( props ) => (
  <svg
    width='42'
    height='40'
    viewBox='0 0 42 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8 8H32C34.2091 8 36 9.79086 36 12V15.3846V20.9231V28C36 30.2091 34.2091 32 32 32H20H8C5.79086 32 4 30.2091 4 28V17.2308V12C4 9.79086 5.79086 8 8 8Z'
      fill='#0B1F35'/>
    <rect x='30' y='2' width='12' height='20' rx='6' fill='white'/>
    <circle cx='36' cy='16' r='4' fill='#0B1F35'/>
    <circle cx='36' cy='12' r='4.7' fill='#0B1F35' stroke='white' strokeWidth='1.4'/>
    <circle cx='36' cy='8' r='4.7' fill='#0B1F35' stroke='white' strokeWidth='1.4'/>
    <path
      d='M8 21H11.0769C11.5867 21 12 21.4133 12 21.9231V22.6154V23C12 23.5523 11.5523 24 11 24H9.5H8C7.44772 24 7 23.5523 7 23V22.1538V22C7 21.4477 7.44772 21 8 21Z'
      fill='white'/>
    <path fillRule='evenodd'
          clipRule='evenodd'
          d='M7 18V17.0442H12V18H7ZM8.78573 13.9716H10.1753L9.51296 12.0541H9.48698L8.78573 13.9716ZM10.4089 11.7001L11.8831 15.7457H10.7922L10.461 14.784H8.48703L8.12986 15.7457H7.10392L8.65101 11.7001C8.80106 11.3077 8.9759 11 9.53895 11C10.1019 11 10.2663 11.309 10.4089 11.7001Z'
          fill='white'/>
  </svg>
)

export default IconCashback