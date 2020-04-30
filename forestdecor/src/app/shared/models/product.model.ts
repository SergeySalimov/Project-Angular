export interface Product {
  name: string,
  urlName: string,
  description?: string,
  img?: string,
  photos?: string[],
  id?: string,
  children?: Product[],
}
