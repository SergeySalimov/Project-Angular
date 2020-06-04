export interface ContactUsMsg {
  name: string,
  message: string,
  date: number,
  categorie: number,
  checked: boolean,
  isRegisterAfter?: boolean,
  id?: string,
  email?: string,
  phone?: string,
}
