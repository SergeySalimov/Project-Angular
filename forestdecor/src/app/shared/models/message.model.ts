import { Categorie } from './categories-of-messages';

export interface Message {
  name: string,
  message: string,
  date: number,
  categorie: Categorie,
  email?: string,
  phone?: string,
  id?: string,
  isChecked?: boolean,
  isRegisterAfter?: boolean,
}
