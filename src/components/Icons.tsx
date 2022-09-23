import React, {
  FC,
  SVGProps,
} from 'react'



export const enum Icon {
  Logo,
  ArrowLeft,
  Gift,
  CardCashback,
  Phone,
  Money,
}

type SVGPropsAlias = SVGProps<SVGSVGElement>

type Props = {
  variant: Icon
} & SVGPropsAlias

const Icons: FC<Props> = ( { variant, ...props } ) => {
  switch ( variant ) {
    case Icon.Logo:
      return <AlfaBankLogo {...props}/>
    case Icon.ArrowLeft:
      return <ArrowLeft {...props}/>
    case Icon.Gift:
      return <Gift {...props}/>
    case Icon.CardCashback:
      return <CardCashback {...props}/>
    case Icon.Phone:
      return <Phone {...props}/>
    case Icon.Money:
      return <Money {...props}/>
  }
}

export default Icons

const AlfaBankLogo: FC<SVGPropsAlias> = ( props ) => (
  <svg height='47' viewBox='0 0 33 50' width='34' {...props}>
    <path clipRule='evenodd'
          d='M0 49.982v-6.825h32.61v6.825H0zm11.646-28.764h9.064L16.39 7.526h-.17l-4.573 13.692h-.001zm10.587-16.22l9.615 28.887h-7.115l-2.16-6.866H9.698l-2.33 6.867H.679l10.09-28.887C11.746 2.197 12.887 0 16.559 0s4.744 2.206 5.674 4.999v-.001z'
          fillRule='evenodd'></path>
  </svg>
)

const ArrowLeft: FC<SVGPropsAlias> = ( props ) => (
  <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g fillRule='evenodd'>
      <path fill='#000' fillRule='nonzero' d='M14.354 16.074l-.708.708-5.068-5.068 5.068-5.068.708.708-4.362 4.36z'/>
    </g>
  </svg>
)

const Gift: FC<SVGPropsAlias> = ( props ) => (
  <svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 8H32C34.2091 8 36 9.79086 36 12V15.3846V20.9231V28C36 30.2091 34.2091 32 32 32H20H8C5.79086 32 4 30.2091 4 28V17.2308V12C4 9.79086 5.79086 8 8 8Z'
      fill='#0B1F35'/>
    <path
      d='M8 21H11.0769C11.5867 21 12 21.4133 12 21.9231V22.6154V23C12 23.5523 11.5523 24 11 24H9.5H8C7.44772 24 7 23.5523 7 23V22.1538V22C7 21.4477 7.44772 21 8 21Z'
      fill='white'/>
    <path fillRule='evenodd' clipRule='evenodd'
          d='M7 18V17.0442H12V18H7ZM8.78573 13.9716H10.1753L9.51296 12.0541H9.48698L8.78573 13.9716ZM10.4089 11.7001L11.8831 15.7457H10.7922L10.461 14.784H8.48703L8.12986 15.7457H7.10392L8.65101 11.7001C8.80106 11.3077 8.9759 11 9.53895 11C10.1019 11 10.2663 11.309 10.4089 11.7001Z'
          fill='white'/>
    <ellipse cx='29' cy='12.5' rx='2' ry='2.5' fill='white'/>
    <ellipse cx='28' cy='18.5' rx='2' ry='2.5' transform='rotate(-180 28 18.5)' fill='white'/>
    <ellipse cx='31.5' cy='15' rx='2' ry='2.5' transform='rotate(90 31.5 15)' fill='white'/>
    <ellipse cx='25.5' cy='16' rx='2' ry='2.5' transform='rotate(-90 25.5 16)' fill='white'/>
    <path d='M20 8L36 24V21.5556L22.4444 8H20Z' fill='white'/>
  </svg>
)

const CardCashback: FC<SVGPropsAlias> = ( props ) => (
  <svg width='42' height='40' viewBox='0 0 42 40' xmlns='http://www.w3.org/2000/svg' {...props}>
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
    <path fillRule='evenodd' clipRule='evenodd'
          d='M7 18V17.0442H12V18H7ZM8.78573 13.9716H10.1753L9.51296 12.0541H9.48698L8.78573 13.9716ZM10.4089 11.7001L11.8831 15.7457H10.7922L10.461 14.784H8.48703L8.12986 15.7457H7.10392L8.65101 11.7001C8.80106 11.3077 8.9759 11 9.53895 11C10.1019 11 10.2663 11.309 10.4089 11.7001Z'
          fill='white'/>
  </svg>
)

const Phone: FC<SVGPropsAlias> = ( props ) => (
  <svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd'
          d='M13.3333 3.33331C11.4924 3.33331 10 4.8257 10 6.66665V33.3333C10 35.1743 11.4924 36.6666 13.3333 36.6666H26.6667C28.5076 36.6666 30 35.1743 30 33.3333V6.66665C30 4.8257 28.5076 3.33331 26.6667 3.33331H13.3333ZM20 33.3333C20.9205 33.3333 21.6667 32.5871 21.6667 31.6666C21.6667 30.7462 20.9205 30 20 30C19.0795 30 18.3333 30.7462 18.3333 31.6666C18.3333 32.5871 19.0795 33.3333 20 33.3333Z'
          fill='#0B1F35'/>
  </svg>
)

const Money: FC<SVGPropsAlias> = ( props ) => (
  <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 7H35C35.5523 7 36 7.44772 36 8V13.4V18.2V26.8C36 27.3523 35.5523 27.8 35 27.8H20H5C4.44772 27.8 4 27.3523 4 26.8V15V8C4 7.44772 4.44772 7 5 7Z'
          fill='#0B1F35'/>
    <path fillRule='evenodd' clipRule='evenodd'
          d='M20 13.4C17.792 13.4 16 15.2 16 17.4C16 19.6 17.792 21.4 20 21.4C22.21 21.4 24 19.6 24 17.4C24 15.2 22.21 13.4 20 13.4Z' fill='white'/>
    <path d='M5.6001 29.4H34.4001V31.6C34.4001 32.1523 33.9524 32.6 33.4001 32.6H6.6001C6.04781 32.6 5.6001 32.1523 5.6001 31.6V29.4Z' fill='#0B1F35'/>
    <path d='M7.19995 24.6V16.6L13.6 24.6H7.19995Z' fill='white'/>
    <path d='M33.3999 10L33.3999 18L26.9999 10L33.3999 10Z' fill='white'/>
  </svg>
)

