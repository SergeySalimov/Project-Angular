export interface Message {
  name: string,
  message: string,
  date: number,
  categorie: number,
  id?: string,
  isRegisterAfter?: boolean,
  email?: string,
  phone?: string,
}
