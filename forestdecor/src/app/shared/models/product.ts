export interface Parent {
  name: string,
  urlName: string
}

export interface Product {
  name: string,
  urlName: string,
  parents: Parent[] | null,
  img: string | null,
  photos: string[] | null,
  description: string | null,
  id?: string
}
