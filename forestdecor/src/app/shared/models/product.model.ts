export interface Product {
  header: string,
  description: string,
  img: string,
  photos: Array<string | null>,
  uniqueId?: string
}
