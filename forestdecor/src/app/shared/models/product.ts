export interface Product {
  name: string,
  parents: string[],
  img: string | null,
  photos: string[] | null,
  description: string | null,
  id?: string
}
