import React, {FC} from 'react'
import {join} from '../utils'
import {FormField} from './'
import {InputChangeFn} from '../types'
import {IconCheckBox} from '../assets/icons'
import {formChange, formInitialState} from "../sections/formState";


const onInputChangeByInputNameHandler: InputChangeFn = ({currentTarget: {name, value, checked}}) => {
  if (name === 'noPatronymic')
    formChange({noPatronymic: checked})
  else
    formChange({[name as 'lastName']: value})
}

const ApplyingForm: FC<typeof formInitialState> = (
  {
    isRu,
    lastName,
    firstName,
    patronymic,
    noPatronymic,
    gender,
    birthday,
    phone,
    email,
  }
) => (
  <>
    <div>
      <p className='text-gray60 mb-12'>У вас гражданство РФ?</p>
      <div className='flex gap-8'>
        <button className={join('radioBtn', isRu && 'active')} onClick={() => formChange({isRu: true})}>Да</button>
        <button className={join('radioBtn', !isRu && 'active')} onClick={() => formChange({isRu: false})}>Нет</button>
      </div>
    </div>
    {!isRu ? closestOffice : <>
      <FormField type='text'
                 required
                 placeholder='Фамилия'
                 description='Укажите точно как в паспорте'
                 id='lastName'
                 value={lastName}
                 handler={onInputChangeByInputNameHandler}
      />
      <FormField type='text'
                 required
                 placeholder='Имя'
                 description='Укажите точно как в паспорте'
                 id='firstName'
                 value={firstName}
                 handler={onInputChangeByInputNameHandler}
      />
      <FormField type='text'
                 required
                 placeholder='Отчество'
                 description='Укажите точно как в паспорте'
                 id='patronymic'
                 disabled={noPatronymic}
                 value={patronymic}
                 handler={onInputChangeByInputNameHandler}
      />
      <label className='select-none relative flex gap-10 items-center text-16 text-gray90 cursor-pointer'>
        <IconCheckBox checked={noPatronymic}/>
        <input type='checkbox'
               className='absolute w-0 h-0 opacity-0'
               checked={noPatronymic}
               name='noPatronymic'
               onChange={onInputChangeByInputNameHandler}
        />
        По паспорту без отчества
      </label>
      <div>
        <p className='text-gray60 mb-12'>Пол</p>
        <div className='flex gap-8'>
          <button className={join('radioBtn', gender === 'female' && 'active')}
                  onClick={() => formChange({gender: 'female'})}>Женский
          </button>
          <button className={join('radioBtn', gender === 'male' && 'active')}
                  onClick={() => formChange({gender: 'male'})}>Мужской
          </button>
        </div>
      </div>
      <FormField type='date'
                 required
                 placeholder='Дата рождения'
                 description='Заказать карту можно только с 18 лет'
                 incorrect='Указана некорректная дата'
                 id='birthday'
                 value={birthday}
                 handler={onInputChangeByInputNameHandler}
      />
      <div className='pc:grid mob:flex flex-col grid-cols-2 gap-25'>
        <FormField type='phone'
                   required
                   placeholder='Мобильный телефон'
                   incorrect='Телефон указан неверно. Должно быть 11 цифр, например: +7 (901) 123-45-67'
                   id='phone'
                   value={phone}
                   handler={onInputChangeByInputNameHandler}
        />
        <FormField type='email'
                   placeholder='Электронная почта'
                   incorrect='Email введен некорректно. Пример: example@domain.ru'
                   id='email'
                   value={email}
                   handler={onInputChangeByInputNameHandler}
        />
      </div>
    </>}
  </>
)

export default ApplyingForm

const closestOffice: JSX.Element = <>
  <p className='text-16 text-black'>
    Для оформления заявки на получение карты, пожалуйста, обратитесь в ближайшее отделение Альфа-Банка.
  </p>
  <button className='btn btn-red'>Найти ближайшее отделение</button>
</>