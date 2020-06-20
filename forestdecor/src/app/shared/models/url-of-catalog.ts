import { Product } from './product';

export interface UrlOfCatalog {
  urlName: string,
  name: string,
  parents: string[],
  content: Product[],
}
