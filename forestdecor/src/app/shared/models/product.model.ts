export interface Product {
  name: string,
  urlName: string,
  description?: string,
  img?: string,
  photos?: [],
  id?: string,
  children?: Product[],
}
