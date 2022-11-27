import React    from 'react'
import ReactDOM from 'react-dom/client'
import App      from './App'
import './styles/global.scss'
import dayjs    from 'dayjs'
import 'dayjs/locale/ru'



dayjs.locale('ru')


ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
