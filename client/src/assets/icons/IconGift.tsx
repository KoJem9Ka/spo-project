import React, { FC } from 'react'
import { TSVGProps } from '../../types'



const IconGift: FC<TSVGProps> = ( props ) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='40'
    height='40'
    fill='none'
    viewBox='0 0 40 40'
    {...props}
  >
    <path
      fill='#0B1F35'
      d='M8 8h24a4 4 0 014 4v16a4 4 0 01-4 4H8a4 4 0 01-4-4V12a4 4 0 014-4z'
    ></path>
    <path
      fill='#fff'
      d='M8 21h3.077c.51 0 .923.413.923.923V23a1 1 0 01-1 1H8a1 1 0 01-1-1v-1a1 1 0 011-1z'
    ></path>
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M7 18v-.956h5V18H7zm1.786-4.028h1.39l-.663-1.918h-.026l-.701 1.918zm1.623-2.272l1.474 4.046h-1.09l-.332-.962H8.487l-.357.962H7.104L8.65 11.7c.15-.392.325-.7.888-.7s.727.309.87.7z'
      clipRule='evenodd'
    ></path>
    <ellipse cx='29' cy='12.5' fill='#fff' rx='2' ry='2.5'></ellipse>
    <ellipse
      cx='28'
      cy='18.5'
      fill='#fff'
      rx='2'
      ry='2.5'
      transform='rotate(-180 28 18.5)'
    ></ellipse>
    <ellipse
      cx='31.5'
      cy='15'
      fill='#fff'
      rx='2'
      ry='2.5'
      transform='rotate(90 31.5 15)'
    ></ellipse>
    <ellipse
      cx='25.5'
      cy='16'
      fill='#fff'
      rx='2'
      ry='2.5'
      transform='rotate(-90 25.5 16)'
    ></ellipse>
    <path fill='#fff' d='M20 8l16 16v-2.444L22.444 8H20z'></path>
  </svg>
)
export default IconGift