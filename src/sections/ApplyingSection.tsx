import React, {
  Dispatch,
  FC,
  useEffect,
  useState,
}                   from 'react'
import {
  AtLeastOne,
  DeepPartial,
}                   from '../types'
import FormFields   from '../components/ApplyingForm'
import IconShield   from '../assets/icons/IconShield'
import IconMobileId from '../assets/icons/IconMobileId'
import styles       from '../styles/_shared.module.scss'



let initialState = {
  isRu:         true as boolean,
  lastName:     '' as string,
  firstName:    '' as string,
  patronymic:   '' as string,
  gender:       null as null | 'male' | 'female',
  noPatronymic: false as boolean,
  birthday:     '' as string,
  phone:        '' as string,
  email:        '' as string,
}

export type TFromState = typeof initialState

type TSetStateFn = Dispatch<React.SetStateAction<typeof initialState>>
let setFormState: TSetStateFn

export type TFormUpdateFn = ( value: AtLeastOne<DeepPartial<typeof initialState>> ) => void
export const formChange: TFormUpdateFn = ( newPartialState ) => setFormState( state => {
  newPartialState.noPatronymic ? (newPartialState.patronymic = '-') : state.patronymic === '-' && (newPartialState.patronymic = '')
  return ({ ...state, ...newPartialState })
} )

const ApplyingSection: FC = () => {
  const [ state, rawSetState ] = useState( initialState )
  useEffect( () => void (setFormState = rawSetState), [] )

  return <div className='container mt-48'>
    <h2 id='form' className='text-center mb-24'>Оформите заявку и сразу<br/>получите Альфа-Карту</h2>
    <div className='rounded-8 py-48 px-98 mob:p-20 pc:shadow-formShadow pc:w-760 mx-auto text-14 flex flex-col gap-24'>
      <FormFields {...state}/>
      {state.isRu && <>
        <div className='pc:p-16 flex items-center gap-12 mob:gap-24 text-gray70 text-14 pc:bg-smokyWhite mob:flex-wrap mob:justify-center'>
          <IconShield width={40}/>
          <span>Мы гарантируем безопасность и сохранность ваших данных</span>
          <button className='btn btn-red mob:-order-1 mob:w-full'>Продолжить</button>
        </div>
        <p className='text-16 text-gentianBlue'>
          Нажимая «Продолжить», я соглашаюсь
          с <a className='link text-inherit' href='/'>условиями</a>, <a className='link text-inherit' href='/'>договором</a>, даю <a
          className='link text-inherit' href='/'>согласие</a>, разрешаю сделать запрос в бюро кредитных историй и
          даю <a className='link text-inherit' href='/'>согласие</a> оператору, абонентом которого я являюсь.
        </p>
        <div className='flex gap-12 items-center text-16 text-black'>
          <IconMobileId/>
          <span>Передача данных через сервис Мобильный ID.</span>
        </div>
      </>}
    </div>
  </div>
}

export default ApplyingSection