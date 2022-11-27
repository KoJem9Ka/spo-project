import {AtLeastOne, DeepPartial} from "../types";
import {setFormState} from "./ApplyingSection";

export const formInitialState = {
  isRu: true as boolean,
  lastName: '' as string,
  firstName: '' as string,
  patronymic: '' as string,
  gender: null as null | 'male' | 'female',
  noPatronymic: false as boolean,
  birthday: '' as string,
  phone: '' as string,
  email: '' as string,
}

export type TFormUpdateFn = (value: AtLeastOne<DeepPartial<typeof formInitialState>>) => void
export const formChange: TFormUpdateFn = (newPartialState) => setFormState(state => {
  newPartialState.noPatronymic
    ? (newPartialState.patronymic = '-')
    : state.patronymic === '-' && (newPartialState.patronymic = '')
  return ({...state, ...newPartialState})
})