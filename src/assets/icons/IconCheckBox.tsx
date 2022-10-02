import React, { FC } from 'react'
import { TSVGProps } from '../../types'



type Props = {
  checked: boolean
}
const IconCheckBox: FC<Props & TSVGProps> = ( { checked, ...props } ) => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z'
          fill={checked ? '#EF3124' : '#F2F2F2'}/>
    <path d='M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z'
          fill={checked ? 'black' : '#616161'}
          fillOpacity={checked ? '0.15' : undefined}/>
    <path d='M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4Z'
          fill={checked ? '#EF3124' : '#F2F2F2'}/>
    {checked && <path d='M7.391 9.375L4.825 6.95L4 7.692L7.391 11.084L12.65 5.817L11.758 5L7.391 9.375Z' fill='white'/>}
  </svg>
)
// return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill={'#EF3124'}/>
//   <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="black" fillOpacity="0.15"/>
//   <path d="M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4Z" fill={'#EF3124'}/>
//   <path d="M7.391 9.375L4.825 6.95L4 7.692L7.391 11.084L12.65 5.817L11.758 5L7.391 9.375Z" fill="white"/>
// </svg>
//
// return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill={'#F2F2F2'}/>
//   <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill={'#616161'}/>
//   <path d="M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4Z" fill={'#F2F2F2'}/>
// </svg>

export default IconCheckBox