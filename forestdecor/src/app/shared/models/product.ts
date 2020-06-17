export interface Product {
  name: string,
  parents: string[],
  parentsRus: string[],
  img: string | null,
  photos: string[] | null,
  description: string | null,
  id?: string
}
